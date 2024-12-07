import React from 'react';
import { Image } from '@chakra-ui/react';
import { UseFormWatch } from 'react-hook-form';
import { FormFields } from '../types/formFields';

interface CardProps {
    watch: UseFormWatch<FormFields>;
    projectImage: string;
}

function Card({ watch, projectImage }: CardProps) {
    const [name, job, color] = watch(['name', 'job', 'color']);

    return (
        <>
            <div className={color ? 'nav-card ' + color : 'nav-card'}>
                <h1 className="nav-card__title">{name || 'Maria'}</h1>
                <h2 className="nav-card__sub-title">{job || 'Programadora'}</h2>
            </div>

            <Image
                border="1px"
                // boxSize="200px"
                borderColor="gray"
                marginTop="20px"
                width="100%"
                minHeight="200px"
                borderRadius="10px"
                object-fit="contain"
                src={projectImage ? projectImage : '#'}
                alt="Rellena"
            />
        </>
    );
}

export default Card;
