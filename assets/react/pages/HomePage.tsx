import React from 'react';
import { Layout } from '../layout/Layout';
import { Button, Grid, GridItem, Link, Image, Text } from '@chakra-ui/react';

export function HomePage() {
    return (
        <Layout>
            <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="80px 1fr"
                gap="4"
                width="600px"
                margin="50px auto"
                placeItems="center"
                padding="50px"
            >
                <GridItem colSpan={1}>
                    <Text textAlign="center" marginBottom="10px" fontFamily="Lilita One">
                        Diseña
                    </Text>
                    <Image
                        width="80px"
                        height="80px"
                        src="react/images/diseña.png"
                        alt="diseña"
                        objectFit="contain"
                        marginLeft="21px"
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text textAlign="center" marginBottom="10px" fontFamily="Lilita One">
                        Rellena
                    </Text>
                    <Image
                        width="70px"
                        height="70px"
                        src="react/images/rellena.png"
                        alt="diseña"
                        objectFit="contain"
                    />
                </GridItem>
                <GridItem colSpan={1}>
                    <Text textAlign="center" marginBottom="10px" fontFamily="Lilita One">
                        Comparte
                    </Text>
                    <Image
                        width="70px"
                        height="70px"
                        src="react/images/comparte.png"
                        alt="diseña"
                        objectFit="contain"
                    />
                </GridItem>
                <GridItem colSpan={3} alignSelf="center" justifySelf="center">
                    <Button
                        size="lg"
                        height="48px"
                        width="180px"
                        border="2px solid black"
                        color="black"
                        marginTop="70px"
                        fontFamily="Lilita One"
                        fontWeight="light"
                        backgroundColor="#d8a6cb"
                        as={Link}
                        // to="/create"
                    >
                        Crear mi tarjeta
                    </Button>
                </GridItem>
            </Grid>
        </Layout>
    );
}
