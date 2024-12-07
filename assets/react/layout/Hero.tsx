import React from 'react';
import { Box, Text, useMediaQuery } from '@chakra-ui/react';

function Hero() {
    const [mobile] = useMediaQuery('(max-width: 720px)');

    return (
        <Box >
            <Box
                display="inline"
                textAlign="center"
                fontWeight="extrabold"
                textColor="black"
                fontFamily="Roboto"
                fontStyle="normal"
                padding={mobile ? 'null' : '30px'}
                maxWidth="700px"
                minWidth="300px"
            >
                <Text fontWeight="light" fontSize={mobile ? '16px' : '24px'}>
                    Crea mejores contactos profesionales de forma más fácil y comóda
                </Text>
            </Box>
        </Box>
    );
}

export default Hero;
