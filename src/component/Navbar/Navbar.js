import React, { useState } from 'react';
import { Navigation, NavbarToggle } from '../StyledComponent/StyledComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ navbarMenu }) {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

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
                    {navbarMenu.map((menu, id) => (
                        <li key={id} onClick={() => scrollToSection(menu.ref)}>
                            <a href={menu.link}>
                                <span>{menu.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </Navigation>
        </>
    );
}

export default Navbar;
