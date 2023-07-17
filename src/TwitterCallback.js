import axios from 'axios';
import { useEffect } from 'react';

const TwitterCallback = () => {
    useEffect(() => {
        const params = new URL(document.location.toString())?.searchParams;
        if (!params) return;
        const code = params.get('code');
        if (!code) return;

        const twitterLogin = async () => {
            const res = await axios.post('http://localhost:3000/oauth/twitter/login', {
                code,
                redirectUri: process.env.REACT_APP_TWITTER_REDIRECT_URI,
                clientId: process.env.REACT_APP_TWITTER_CLIENT_ID,
            });

            console.log(res.data);
        };

        twitterLogin();
    }, []);
    return <></>;
};

export default TwitterCallback;
