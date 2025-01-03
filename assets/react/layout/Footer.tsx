import { Box } from '@chakra-ui/react';

import React from 'react';

function Footer() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            color="blue.900"
            fontFamily="Lilita One"
            border="1px solid gray"
        >
            <footer>
                <Box margin="10px">
                    <p>Creative Digital ©2024</p>
                </Box>
            </footer>
        </Box>
    );
}

export default Footer;
