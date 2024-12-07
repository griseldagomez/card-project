import {
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Box,
    FormErrorMessage,
    FormControl,
    FormLabel,
    RadioGroup,
    VStack,
    Radio,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FormFields } from '../types/formFields';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface DesignProps {
    register: UseFormRegister<FormFields>;
    errors: FieldErrors<FormFields>;
}

function Design({ register, errors }: DesignProps) {
    const colorData: Record<string, string[]> = {
        color1: ['#220330', '#b68ec7', '#866096'],
        color2: ['#2b3c0d', '#728e42', '#6f9331'],
        color3: ['#165d5c', ' #093e3e', '#069b99'],
    };

    return (
        <AccordionItem p={2}>
            <h2 className="title-design">
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        <FontAwesomeIcon icon={faObjectUngroup} className="icon-form" />
                        DISEÑA
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>

            <AccordionPanel>
                <FormControl as="fieldset" isInvalid={errors.color ? true : false}>
                    <FormLabel as="legend">Paleta de colores:</FormLabel>
                    {/* 
                    Object.keys es una funcion que devuelve un array con todos los
                    miembros de un objeto.

                    En este caso devuelve ['color1', 'color2', 'color3'].

                    Luego se pueden acceder usando la sintaxis de array:
                    Por ejemplo: colorData[colorName]
                */}
                    <RadioGroup>
                        <VStack spacing={6}>
                            {Object.keys(colorData).map((colorName) => (
                                <Radio
                                    value={colorName}
                                    key={colorName}
                                    {...register('color', { required: true })}
                                >
                                    <div className="options">
                                        {colorData[colorName].map((color, index) => (
                                            <div
                                                className="divcol"
                                                key={index}
                                                style={{ backgroundColor: color }}
                                            ></div>
                                        ))}
                                    </div>
                                </Radio>
                            ))}
                        </VStack>
                    </RadioGroup>
                    {errors.color && (
                        <FormErrorMessage>Por favor, elija una paleta de colores</FormErrorMessage>
                    )}
                </FormControl>
            </AccordionPanel>
        </AccordionItem>
    );
}

export default Design;
