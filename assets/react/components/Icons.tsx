import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface IconsProps {
    color: string;
    email: string;
    tel: string;
    linkedin: string;
    github: string;
}

function Icons({ color, email, tel, linkedin, github }: IconsProps) {
    const regExp = /^https?:\/\//;

    return (
        <div className="icons">
            <div className={color ? 'icons ' + color : 'icons'}>
                <a href={tel ? `tel:${tel}` : '#'} target="_blank" title="Tel" rel="noreferrer">
                    <FontAwesomeIcon icon={faMobileScreen} />
                </a>
            </div>
            <div className={color ? 'icons ' + color : 'icons'}>
                <a
                    href={
                        linkedin ? (linkedin.match(regExp) ? linkedin : `https://${linkedin}`) : '#'
                    }
                    target="_blank"
                    title="linkedin"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>

            <div className={color ? 'icons ' + color : 'icons'}>
                <a
                    href={email ? `mailto:${email}` : '#'}
                    target="_blank"
                    title="email"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>

            <div className={color ? 'icons ' + color : 'icons'}>
                <a
                    href={github ? (github.match(regExp) ? github : `https://${github}`) : '#'}
                    target="_blank"
                    title="github"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Icons;
