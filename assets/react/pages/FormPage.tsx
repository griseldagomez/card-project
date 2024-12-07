import React, { ChangeEvent } from 'react';
import { Layout } from '../layout/Layout';
import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Accordion } from '@chakra-ui/react';
import Design from '../components/Design';
import Card from '../components/Card';
import Icons from '../components/Icons';
import Share from '../components/Share';
import Formulary from '../components/Formulary';
import { FormFields } from '../types/formFields';

function FormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormFields>();

    const [cardUrl, setCardUrl] = useState<string | null>(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const onSubmit = async (data: FieldValues) => {
        setIsButtonEnabled(false);

        try {
            const response = await fetch('/api/card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    colorScheme: data.color,
                    name: data.name,
                    job: data.job,
                    email: data.email,
                    photo: projectImage,
                    phone: data.tel,
                    linkedinUrl: data.linkedin,
                    githubUrl: data.github,
                }),
            });

            if (response.ok) {
                const data = await response.json();

                console.log(data);
                setCardUrl(data.insert_id);
                onOpen();
            } else {
                // mostramos otro error
                // van a venir errores del servidor (tipo 500 o 404)
            }
        } catch (e) {
            console.log(e);
            // mostramos un error
            // van a venir errores de internet (errores de coneccion)
            // o del codigo
        } finally {
            setIsButtonEnabled(true);
        }
    };

    const [projectImage, setProjectImage] = useState('');

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        //fotografía
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result && typeof reader.result === 'string') {
                setProjectImage(reader.result.toString());
            }
        };

        if (!target.files) {
            return;
        }

        reader.readAsDataURL(target.files[0]);
    };

    return (
        <Layout>
            <Grid
                templateColumns="repeat(2, 1fr)"
                gap="20px"
                width="100%"
                height="500px"
                placeContent="center"
                border="1px solid black"
                margin="50px auto"
            >
                <GridItem colSpan={1}>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Accordion defaultIndex={[0]} allowToggle width="300px" marginTop="30px">
                            <Design register={register} errors={errors} />
                            <Formulary
                                register={register}
                                errors={errors}
                                handleImage={handleImage}
                                projectImage={projectImage}
                            />
                            <Share
                                isButtonEnabled={isButtonEnabled}
                                isOpen={isOpen}
                                onClose={onClose}
                                cardUrl={cardUrl}
                            />
                        </Accordion>
                    </form>
                </GridItem>
                <GridItem colSpan={1}>
                    <Card watch={watch} projectImage={projectImage} />
                    <Icons watch={watch} />
                </GridItem>
            </Grid>
        </Layout>
    );
}

export default FormPage;
