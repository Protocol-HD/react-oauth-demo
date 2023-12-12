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
        uri: 'http://localhost:2000/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/kakaoCallback" element={<KakaoCallback />} />
                    <Route path="/naverCallback" element={<NaverCallback />} />
                    <Route path="/googleCallback" element={<GoogleCallback />} />
                    <Route path="/twitterCallback" element={<TwitterCallback />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
