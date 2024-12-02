import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

function Header() {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="40px"
                margin="40px"
                textColor="black"
                fontFamily="Lilita One"
            >
                <Text textAlign="center" margin="0 30px 10px 0">
                    Crea tu tarjeta de visita
                </Text>
                <Image
                    width="100px"
                    height="100px"
                    src="react/images/card.png"
                    alt="diseña"
                    objectFit="contain"
                    marginLeft="21px"
                />
            </Box>
        </>
    );
}

export default Header;
