import React from 'react';
import { Layout } from '../layout/Layout';
import { Button, Grid, GridItem, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Hero from '../layout/Hero';

export function HomePage() {
    const [mobile] = useMediaQuery('(max-width: 720px)');
    return (
        <Layout>
            <Hero />
            <Grid
                templateColumns={mobile ? '1fr' : 'repeat(3, 1fr)'}
                templateRows={mobile ? 'repeat(3, 100px) 1fr' : '80px 1fr'}
                gap={mobile ? '6' : '4'}
                width={mobile ? '300px' : '600px'}
                margin="50px auto"
                placeItems="center"
                padding={mobile ? '20px' : '50px'}
                marginTop="50px"
            >
                <GridItem colSpan={1}>
                    <Text
                        textAlign="center"
                        marginBottom="10px"
                        fontFamily="Lilita One"
                        fontSize={mobile ? '16px' : '20px'}
                    >
                        Diseña
                    </Text>
                    <Image
                        width={mobile ? '95px' : '75px'}
                        height={mobile ? '95px' : '75px'}
                        src="react/images/diseña.png"
                        alt="diseña"
                        // objectFit="contain"
                        marginLeft="20px"
                        marginBottom="5px"
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text
                        textAlign="center"
                        marginBottom="10px"
                        fontFamily="Lilita One"
                        fontSize={mobile ? '16px' : '20px'}
                    >
                        Rellena
                    </Text>
                    <Image
                        width={mobile ? '80px' : '70px'}
                        height={mobile ? '80px' : '70px'}
                        src="react/images/rellena.png"
                        alt="diseña"
                        // objectFit="contain"
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text
                        textAlign="center"
                        marginBottom="10px"
                        fontFamily="Lilita One"
                        fontSize={mobile ? '16px' : '20px'}
                    >
                        Comparte
                    </Text>
                    <Image
                        width={mobile ? '80px' : '68px'}
                        height={mobile ? '80px' : '68px'}
                        src="react/images/comparte.png"
                        alt="diseña"
                        // objectFit="contain"
                        marginLeft="10px"
                    />
                </GridItem>
                <GridItem colSpan={mobile ? 1 : 3} alignSelf="center" justifySelf="center">
                    <Button
                        size={mobile ? 'md' : 'lg'}
                        height={mobile ? '40px' : '48px'}
                        width={mobile ? '140px' : '180px'}
                        border="3px solid rgb(2, 70, 120 )"
                        color="black"
                        marginTop={mobile ? '30px' : '70px'}
                        fontFamily="Lilita One"
                        fontWeight="light"
                        backgroundColor="rgb(238, 238, 238) "
                        as={Link}
                        to="/create"
                    >
                        Crear mi tarjeta
                    </Button>
                </GridItem>
            </Grid>
        </Layout>
    );
}
