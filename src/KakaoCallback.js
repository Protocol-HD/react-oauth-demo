import axios from 'axios';
import { useEffect } from 'react';

const KakaoCallback = () => {
    useEffect(() => {
        const params = new URL(document.location.toString())?.searchParams;
        if (!params) return;
        const code = params.get('code');
        if (!code) return;

        const kakaoLogin = async () => {
            const res = await axios.post('http://localhost:3000/oauth/kakao/login', {
                code,
                redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
                clientId: process.env.REACT_APP_KAKAO_CLIENT_ID,
            });

            console.log(res.data);
        };

        kakaoLogin();
    }, []);

    return <></>;
};

export default KakaoCallback;
