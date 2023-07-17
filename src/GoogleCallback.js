import axios from 'axios';
import { useEffect } from 'react';

const GoogleCallback = () => {
    useEffect(() => {
        const params = new URL(document.location.toString())?.searchParams;
        if (!params) return;
        const code = params.get('code');
        if (!code) return;

        const googleLogin = async () => {
            const res = await axios.post('http://localhost:3000/oauth/google/login', {
                code,
                redirectUri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
            });

            console.log(res.data);
        };

        googleLogin();
    }, []);
    return <></>;
};

export default GoogleCallback;
