import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { OAUTH_LOGIN, OAUTH_SIGNUP } from './mutations';

const GoogleCallback = () => {
    const params = new URL(document.location.toString())?.searchParams;
    const code = params.get('code');

    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

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
                    authType: 'GOOGLE',
                    code,
                    redirectUri: googleRedirectUri,
                    clientId: googleClientId,
                },
            },
        }).then((res) => {
            console.log(res.data);
            setTokens(res.data.oauthLogin);

            if (res.data.oauthLogin.message === 'NOT_SIGNED_UP') {
                oauthSignupMutation({
                    variables: {
                        input: {
                            authType: 'GOOGLE',
                            // nickname: '아서따리',
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

export default GoogleCallback;
