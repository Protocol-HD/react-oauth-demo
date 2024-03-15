import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { OAUTH_LOGIN, OAUTH_SIGNUP, OAUTH_SIGN_IN, OAUTH_SIGN_UP } from './mutations';

const Login = () => {
    const params = new URL(document.location.toString())?.searchParams;
    const code = params.get('code');
    const state = params.get('state');

    const { clientId, redirectUri } = (() => {
        let clientId = '';
        let redirectUri = process.env.REACT_APP_REDIRECT_URI;
        switch (state) {
            case 'google':
                clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
                break;
            case 'apple':
                clientId = process.env.REACT_APP_APPLE_CLIENT_ID;
                redirectUri = process.env.REACT_APP_APPLE_REDIRECT_URI;
                break;
            case 'kakao':
                clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
                break;
            case 'naver':
                clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
                break;
            case 'twitter':
                clientId = process.env.REACT_APP_TWITTER_CLIENT_ID;
                break;
            case 'facebook':
                clientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
                break;
            default:
                break;
        }
        return { clientId, redirectUri };
    })();

    const [oauthLoginMutation] = useMutation(OAUTH_SIGN_IN);
    const [oauthSignupMutation] = useMutation(OAUTH_SIGN_UP);

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
                    authType: state.toUpperCase(),
                    code,
                    redirectUri: redirectUri,
                    clientId: clientId,
                },
            },
        }).then((res) => {
            console.log(res.data);
            setTokens(res.data.oauthLogin);

            if (res.data.oauthLogin.message === 'NOT_SIGNED_UP') {
                oauthSignupMutation({
                    variables: {
                        input: {
                            authType: state.toUpperCase(),
                            nickname: '아서_' + state.toUpperCase(),
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

export default Login;
