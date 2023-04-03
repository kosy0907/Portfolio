import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
    const HomeClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const AboutClick = () => {
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const SkillClick = () => {
        props.skillRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const ProjectClick = () => {
        props.projectRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav>
            <ul>
                <li className='navBtn' onClick={HomeClick}>HOME<span>.</span></li>
                <li className='navBtn' onClick={AboutClick}>ABOUT<span>.</span></li>
                <li className='navBtn' onClick={SkillClick}>SKILL<span>.</span></li>
                <li className='navBtn' onClick={ProjectClick}>PROJECT<span>.</span></li>
            </ul>
        </nav>
    );
}
