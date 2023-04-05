import React, { forwardRef, useState, useEffect } from 'react';
import './Navbar.css';

function Navbar(props, NavbarRef) {
    const [navState, setNavState] = useState('');

    useEffect(() => {
        console.log(navState);
    })

    const HomeClick = () => {
        setNavState('Home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const AboutClick = () => {
        setNavState('About');
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const SkillClick = () => {
        setNavState('Skill');
        props.skillRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const ProjectClick = () => {
        setNavState('Project');
        props.projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav ref={NavbarRef}>
            <ul>
                <li className='navBtn' onClick={HomeClick}>HOME<span>.</span></li>
                <li className='navBtn' onClick={AboutClick}>ABOUT<span>.</span></li>
                <li className='navBtn' onClick={SkillClick}>SKILL<span>.</span></li>
                <li className='navBtn' onClick={ProjectClick}>PROJECT<span>.</span></li>
            </ul>
        </nav>
    );
}

export default forwardRef(Navbar);