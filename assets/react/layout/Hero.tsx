import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Hero() {
    return (
        <Box>
            <Box
                display="inline"
                textAlign="center"
                fontSize="30px"
                fontWeight="extrabold"
                textColor="black"
                fontFamily="Fira Sans, sans-serif"
                fontStyle="normal"
                padding="30px"
            >
                <Text fontWeight="light">
                    Crea mejores contactos profesionales de forma más fácil y comóda
                </Text>
            </Box>
        </Box>
    );
}

export default Hero;
