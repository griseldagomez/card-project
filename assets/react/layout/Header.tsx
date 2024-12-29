import React from 'react';
import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';

function Header() {
    const [mobile] = useMediaQuery('(max-width: 720px)');
    return (
        <>
            <Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={mobile ? 'column' : 'row'}
                    fontSize={mobile ? '30px' : '40px'}
                    margin="40px"
                    textColor="black"
                    fontFamily="Lilita One"
                >
                    <Text textAlign="center" margin="0 30px 10px 0">
                        Crea tu tarjeta de visita
                    </Text>
                    <Image
                        width={mobile ? '80px' : '100px'}
                        height={mobile ? '80px' : '100px'}
                        src="react/images/card.png"
                        alt="diseña"
                        objectFit="contain"
                        marginLeft="21px"
                    />
                </Box>
            </Box>
        </>
    );
}

//     @media all and (min-width: 768px) {
//         font-size: 16px;
//         max-width: 325px;
//         margin-left: 25px;

//     }

//     @media all and (min-width: 1200px) {
//         font-size: 16px;
//         max-width: 325px;
//         margin: 0 auto;
//     }
// }
export default Header;
