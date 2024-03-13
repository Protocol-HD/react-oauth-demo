import { GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import React from 'react';
import { firebaseAuth } from './firebase';

const Main = () => {
    const redirectUri = encodeURI(process.env.REACT_APP_REDIRECT_URI);
    const appleRedirectUri = encodeURI(process.env.REACT_APP_APPLE_REDIRECT_URI);

    const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}&state=kakao`;

    const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${redirectUri}&state=naver`;

    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=${redirectUri}&scope=https://www.googleapis.com/auth/userinfo.email&state=google`;

    const twitterClientId = process.env.REACT_APP_TWITTER_CLIENT_ID;
    const twitterLoginUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${twitterClientId}&redirect_uri=${redirectUri}&scope=tweet.read%20users.read%20offline.access&state=twitter&code_challenge=challenge&code_challenge_method=plain`;

    const appleClientId = process.env.REACT_APP_APPLE_CLIENT_ID;
    const appleLoginUrl = `https://appleid.apple.com/auth/authorize?client_id=${appleClientId}&redirect_uri=${appleRedirectUri}&response_type=code&state=apple&scope=email&response_mode=form_post`;

    const facebookClientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
    const facebookLoginUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${facebookClientId}&redirect_uri=${redirectUri}`;

    const kakaoLogin = async () => {
        window.location.href = kakaoLoginUrl;
    };

    const naverLogin = async () => {
        window.location.href = naverLoginUrl;
    };

    const googleLogin = async () => {
        window.location.href = googleLoginUrl;
    };

    const twitterLogin = async () => {
        window.location.href = twitterLoginUrl;
    };
    const appleLogin = async () => {
        window.location.href = appleLoginUrl;
    };

    const facebookLogin = async () => {
        window.location.href = facebookLoginUrl;
    };

    const firebaseLogin = async () => {
        const googleProvider = new GoogleAuthProvider();
        const twitterProvider = new TwitterAuthProvider();
        const res = await signInWithPopup(firebaseAuth, twitterProvider);

        console.log(res);
    };

    return (
        <div>
            <button onClick={kakaoLogin}>Kakao Login</button>
            <button onClick={naverLogin}>Naver Login</button>
            <button onClick={googleLogin}>Google Login</button>
            <button onClick={twitterLogin}>Twitter Login</button>
            <button onClick={appleLogin}>Apple Login</button>
            <button onClick={facebookLogin}>Facebook Login</button>
            <button onClick={firebaseLogin}>Firebase Login</button>
        </div>
    );
};

export default Main;
