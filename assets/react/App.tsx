import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import FormPage from './pages/FormPage';

function App() {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<FormPage />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
