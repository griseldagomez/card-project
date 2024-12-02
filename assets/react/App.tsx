import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </ChakraProvider>
    );
}

export default App;
