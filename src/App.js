import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GoogleCallback from './GoogleCallback';
import KakaoCallback from './KakaoCallback';
import Main from './Main';
import NaverCallback from './NaverCallback';
import TwitterCallback from './TwitterCallback';

function App() {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_BACKEND_URL,
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/kakao-callback" element={<KakaoCallback />} />
                    <Route path="/naver-callback" element={<NaverCallback />} />
                    <Route path="/google-callback" element={<GoogleCallback />} />
                    <Route path="/twitter-callback" element={<TwitterCallback />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
