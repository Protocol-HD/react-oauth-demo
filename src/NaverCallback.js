import axios from 'axios';
import { useEffect } from 'react';

const NaverCallback = () => {
    useEffect(() => {
        const params = new URL(document.location.toString())?.searchParams;
        if (!params) return;
        const code = params.get('code');
        if (!code) return;

        const naverLogin = async () => {
            const res = await axios.post('http://localhost:3000/oauth/naver/login', {
                code,
                redirectUri: process.env.REACT_APP_NAVER_REDIRECT_URI,
                clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
                clientSecret: process.env.REACT_APP_NAVER_CLIENT_SECRET,
            });

            console.log(res.data);
        };

        naverLogin();
    }, []);

    return <></>;
};

export default NaverCallback;
