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
            <div className={color ? 'card-name ' + color : 'card-job'}>
                <h1 className="card-name">{name || 'Sara Gómez'}</h1>
                <p className="car-job">{job || 'Programadora Web'}</p>
            </div>

            <Image
                // boxSize="200px"
                marginTop="20px"
                width="100%"
                minHeight="100px"
                borderRadius="10px"
                object-fit="contain"
                src={projectImage ? projectImage : '/react/images/perfil.jpg'}
                alt="img"
            />
        </>
    );
}

export default Card;
