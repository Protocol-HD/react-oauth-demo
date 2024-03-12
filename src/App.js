import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Login from './Login';

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
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
