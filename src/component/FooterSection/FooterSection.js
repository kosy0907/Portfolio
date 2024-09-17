import React from 'react';
import { Footer, HalfMoon, HalfMoonBorder, FooterCross, FooterCross2 } from '../StyledComponent/StyledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function FooterSection() {
    const gitUrl = 'https://github.com/kosy0907'
    const blogUrl = 'https://kosy.tistory.com/'

    return (
        <Footer>
            <FooterCross>
                <div className="vertical" />
                <div className="horizontal" />
            </FooterCross>
            <FooterCross2>
                <div className="vertical" />
                <div className="horizontal" />
            </FooterCross2>
            <HalfMoon style={{ width: '50px', height: '25px' }} />
            <HalfMoonBorder style={{ width: '50px', height: '25px' }} />
            <p>
                <FontAwesomeIcon icon={faCopyright} className='icon' />
                SeungYeon Ko 2024. All Rights Reserved
            </p>
            <div className='socialLink'>
                <a href={gitUrl} target='_blank' className='snsIcon' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='icon fa-xl' /></a>
                <a href={blogUrl} target='_blank' className='snsIcon' rel="noreferrer"><FontAwesomeIcon icon={faBook} className='icon fa-xl' /></a>
            </div>
        </Footer>
    );
}

export default FooterSection;
