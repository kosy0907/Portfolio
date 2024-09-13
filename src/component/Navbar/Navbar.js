import React, { useState } from 'react';
import { Navigation, NavbarToggle } from '../StyledComponent/StyledComponent'
import { navbarMenu } from './NavbarMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <NavbarToggle onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className={menuOpen ? 'navToggle active' : 'navToggle'} />
            </NavbarToggle>

            <Navigation className={menuOpen ? 'active' : ''}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Navigation>
        </>
    );
}

export default Navbar;
