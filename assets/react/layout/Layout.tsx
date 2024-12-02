import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';
import Hero from './Hero';

interface LayoutPropTypes {
    children: React.ReactElement;
}
//  todo lo que se pone aqui aparecera en todas las paginas.
export function Layout({ children }: LayoutPropTypes) {
    return (
        <Box display="flex" flexDirection="column" height="100dvh">
            <Header />
            <Hero />
            <Box flexGrow={1}>{children}</Box>
            <Footer />
        </Box>
    );
}
