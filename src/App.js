import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GoogleCallback from './GoogleCallback';
import KakaoCallback from './KakaoCallback';
import Main from './Main';
import NaverCallback from './NaverCallback';
import TwitterCallback from './TwitterCallback';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/kakaoCallback" element={<KakaoCallback />} />
                <Route path="/naverCallback" element={<NaverCallback />} />
                <Route path="/googleCallback" element={<GoogleCallback />} />
                <Route path="/twitterCallback" element={<TwitterCallback />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
