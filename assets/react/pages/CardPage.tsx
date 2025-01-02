import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { Box } from '@chakra-ui/react';

interface Card {
    colorScheme: string;
    id: number;
    name: string;
    job: string;
    email: string;
    phone: string;
    photo: string;
    linkedinUrl: string;
    githubUrl: string;
}

export default function CardPage() {
    const [card, setCard] = useState<Card>();

    // Con useParams meto en routeParams los parámetros de la ruta actual
    const { id } = useParams();

    useEffect(() => {
        const callApi = async () => {
            try {
                const response = await fetch(`/api/card/${id}`);

                if (response.ok) {
                    const data = await response.json();

                    console.log(data.results);
                    setCard(data.results);
                } else {
                    // mostramos otro error
                    // van a venir errores del servidor (tipo 500 o 404)
                }
            } catch (e) {
                console.log(e);

                // mostramos un error
                // van a venir errores de internet (errores de coneccion)
                // o del codigo
            }
        };

        callApi();
    }, []);

    // TODO:
    // llamar a la API con un useEffect vacio [] (/api/card/{id})

    // renderizar la tarjeta
    return (
        <>
            {card && (
                <>
                    <div className="card">
                        <Card
                            color={card.colorScheme}
                            name={card.name}
                            job={card.job}
                            email={card.email}
                            tel={card.phone}
                            projectImage={card.photo}
                            github={card.githubUrl}
                            linkedin={card.linkedinUrl}
                        />
                        <Box
                            fontFamily="roboto"
                            fontSize="16px"
                            padding="20px"
                            margin="0 auto"
                            // backgroundColor="#966096"
                            borderRadius="20px"
                            textDecoration="underline"
                        >
                            <div>
                                <a
                                    href="https://card-project.fotosgri.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    ¡Pincha aquí y crea tu propia tarjeta!
                                </a>
                            </div>
                        </Box>
                    </div>
                </>
            )}
        </>
    );
}
