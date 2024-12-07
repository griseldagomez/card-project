import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { UseFormWatch } from 'react-hook-form';
import { FormFields } from '../types/formFields';

interface IconsProps {
    watch: UseFormWatch<FormFields>;
}

function Icons({ watch }: IconsProps) {
    const [color] = watch(['color']);

    return (
        <div className="icons">
            <div className={color ? 'icons ' + color : 'icons'}>
                <a href="tel" target="_blank" title="">
                    <FontAwesomeIcon icon={faMobileScreen} />
                </a>
            </div>
            <div className={color ? 'icons ' + color : 'icons'}>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>

            <div className={color ? 'icons ' + color : 'icons'}>
                <a href="mailto" target="_blank" title="">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>

            <div className={color ? 'icons ' + color : 'icons'}>
                <a href="https://github.com" target="_blank" title="" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Icons;
