import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

interface LayoutPropTypes {
    children: React.ReactElement | React.ReactElement[] | string;
}
//  todo lo que se pone aqui aparecera en todas las paginas.
export function Layout({ children }: LayoutPropTypes) {
    return (
        <Box display="flex" flexDirection="column" minHeight="100dvh">
            <Header />
            <Box flexGrow={1}>{children}</Box>
            <Footer />
        </Box>
    );
}
