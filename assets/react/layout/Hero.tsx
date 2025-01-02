import React from 'react';
import { Box, Text, useMediaQuery } from '@chakra-ui/react';

function Hero() {
    const [mobile] = useMediaQuery('(max-width: 720px)');

    return (
        <Box>
            <Box
                display="inline"
                textAlign="center"
                fontWeight="extrabold"
                textColor="rgba(254, 234, 218, 0.98)"
                fontFamily="Roboto"
                fontStyle="normal"
                padding={mobile ? 'null' : '10px'}
                maxWidth="700px"
                minWidth="300px"
            >
                <Text fontWeight="light" fontSize={mobile ? '16px' : '24px'}>
                    Crea mejores contactos <br /> profesionales de forma más fácil y comóda
                </Text>
            </Box>
        </Box>
    );
}

export default Hero;
