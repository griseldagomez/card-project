import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import FormPage from './pages/FormPage';
import CardPage from './pages/CardPage';

function App() {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<FormPage />} />
                <Route path="/card/:id" element={<CardPage />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
