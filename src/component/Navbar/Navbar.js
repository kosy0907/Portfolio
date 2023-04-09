import React, { forwardRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='navWrapper'>
            <nav>
                <FontAwesomeIcon color='#CBE4DE' className={`menuIcon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} icon={menuOpen ? faTimes : faBars} size="2x" />
                <p>seungyeonko98@gmail.com</p>
                <ul className={`navMenu ${menuOpen ? 'open' : ''}`}>
                    <li className='navBtn' onClick={HomeClick}>HOME<span>.</span></li>
                    <li className='navBtn' onClick={AboutClick}>ABOUT<span>.</span></li>
                    <li className='navBtn' onClick={ProjectClick}>PROJECT<span>.</span></li>
                </ul>
            </nav>
        </div>
    );
}

export default forwardRef(Navbar);