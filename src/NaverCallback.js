import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { OAUTH_LOGIN, OAUTH_SIGNUP } from './mutations';

const NaverCallback = () => {
    const params = new URL(document.location.toString())?.searchParams;
    const code = params.get('code');

    const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    const naverRedirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI;

    const [oauthLoginMutation] = useMutation(OAUTH_LOGIN);
    const [oauthSignupMutation] = useMutation(OAUTH_SIGNUP);

    const [tokens, setTokens] = useState({
        accessToken: '',
        refreshToken: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        oauthLoginMutation({
            variables: {
                input: {
                    authType: 'NAVER',
                    code,
                    redirectUri: naverRedirectUri,
                    clientId: naverClientId,
                },
            },
        }).then((res) => {
            console.log(res.data);
            setTokens(res.data.oauthLogin);

            if (res.data.oauthLogin.message === 'NOT_SIGNED_UP') {
                oauthSignupMutation({
                    variables: {
                        input: {
                            authType: 'NAVER',
                            nickname: '아서따리',
                            oauthAccessToken: res.data.oauthLogin.oauthAccessToken,
                        },
                    },
                }).then((res) => {
                    console.log(res.data);
                    setTokens(res.data.oauthSignup);
                });
            }
        });
    }, []);

    return (
        <>
            <p>{tokens.accessToken ?? ''}</p>
            <p>{tokens.refreshToken ?? ''}</p>
            <p>{tokens.email ?? ''}</p>
            <p>{tokens.message ?? ''}</p>
        </>
    );
};

export default NaverCallback;
