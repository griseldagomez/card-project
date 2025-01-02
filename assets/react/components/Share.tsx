import {
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
} from '@chakra-ui/react';
import React from 'react';

interface ShareProps {
    isButtonEnabled: boolean;
    isOpen: boolean;
    onClose: () => void;
    cardUrl: string | null;
}

function Share({ isButtonEnabled, isOpen, onClose, cardUrl }: ShareProps) {
    return (
        <>
            <AccordionItem p={3}>
                <h2 className="title-share">
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            <FontAwesomeIcon icon={faShareNodes} className="icon-form" />
                            COMPARTE
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>

                <Box display="flex" alignItems="center" justifyContent="center" pt={2} pb={2}>
                    <AccordionPanel className="button-container">
                        <Button
                            backgroundColor="rgb(92, 10, 92)"
                            color="White"
                            type="submit"
                            disabled={!isButtonEnabled}
                        >
                            <FontAwesomeIcon icon={faAddressCard} />
                            Crear tarjeta
                        </Button>
                    </AccordionPanel>
                </Box>
            </AccordionItem>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalContent color=" rgb(92, 10, 92)" padding="10px">
                    <ModalHeader>Tu tarjeta se ha creado exitosamente</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text
                            fontFamily="roboto"
                            fontWeight="bold"
                            align="center"
                            fontSize="18px"
                            color="rgb(63, 14, 63)"
                        >
                            {cardUrl && (
                                <Link to={`/card/${cardUrl}`} target="_blank" className="card-url">
                                    ¡Pincha aquí para verla!
                                </Link>
                            )}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Cerrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Share;
