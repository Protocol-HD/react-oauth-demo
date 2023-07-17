import { GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import React from 'react';
import { firebaseAuth } from './firebase';

const Main = () => {
    const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const kakaoRedirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}`;

    const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    const naverRedirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI;
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${naverRedirectUri}&state=null`;

    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&scope=https://www.googleapis.com/auth/userinfo.email`;

    const twitterClientId = process.env.REACT_APP_TWITTER_CLIENT_ID;
    const twitterRedirectUri = process.env.REACT_APP_TWITTER_REDIRECT_URI;
    const twitterLoginUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${twitterClientId}&redirect_uri=${twitterRedirectUri}&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;

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
            <button onClick={firebaseLogin}>Firebase Login</button>
        </div>
    );
};

export default Main;
