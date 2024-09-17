import React, { useState } from 'react';
import { Navigation, NavbarToggle } from '../StyledComponent/StyledComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ navbarMenu }) {

    const scrollToSection = (menu) => {
        if (menu.name === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            menu.ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
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
                        <li key={id} onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(menu);
                        }}>
                            <span>{menu.name}</span>
                        </li>
                    ))}
                </ul>
            </Navigation>
        </>
    );
}

export default Navbar;
