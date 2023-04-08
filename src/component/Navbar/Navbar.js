import React, { forwardRef } from 'react';
import './Navbar.css';

function Navbar(props) {

    const HomeClick = () => {
        props.setNavState(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const AboutClick = () => {
        props.setNavState(2);
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const ProjectClick = () => {
        props.setNavState(3);
        props.projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav>
            <ul>
                <li className='navBtn' onClick={HomeClick}>HOME<span>.</span></li>
                <li className='navBtn' onClick={AboutClick}>ABOUT<span>.</span></li>
                <li className='navBtn' onClick={ProjectClick}>PROJECT<span>.</span></li>
            </ul>
        </nav>
    );
}

export default forwardRef(Navbar);