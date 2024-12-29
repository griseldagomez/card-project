import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import Icons from '../components/Icons';

interface CardProps {
    name: string;
    job: string;
    color: string;
    projectImage: string;
    tel: string;
    github: string;
    email: string;
    linkedin: string;
}

function Card({ name, job, color, projectImage, tel, email, github, linkedin }: CardProps) {
    return (
        <Box border="2px solid white" borderRadius="20px" backgroundColor="beige" marginLeft="20px">
            <div className="card-title">
                {/* ?? se llama null coalescent operator: si color es null o undefined, pasa al otro lado */}
                <h1 className={`card-name ${color ?? ''}`}>{name || 'Sara Gómez'}</h1>
                <p className={`card-job ${color ?? ''}`}>{job || 'Programadora Web'}</p>
            </div>

            <Box
                display="flex"
                marginTop="20px"
                flex-direction="column"
                justify-content="center"
                width="100%"
                height="230px"
                borderRadius="10px"
            >
                <Image
                    maxWidth="100%"
                    maxHeight="100%"
                    minHeight="200px"
                    borderRadius="10px"
                    object-fit="contain"
                    margin="0 auto"
                    src={projectImage ? projectImage : '/react/images/perfil.jpg'}
                    alt="img"
                />
            </Box>

            <Icons color={color} tel={tel} email={email} linkedin={linkedin} github={github} />
        </Box>
    );
}

export default Card;
