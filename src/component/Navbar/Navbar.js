import React, { forwardRef, useState } from 'react';
import book from '../../images/icon/book.gif';
import { navbarMenu } from './NavbarMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faBars } from '@fortawesome/free-solid-svg-icons';
import { Header, NavbarContainer, Profile, NavbarToggle, HeaderContainer } from '../StyledComponent/StyledComponent';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const gitUrl = 'https://github.com/kosy0907'
    const blogUrl = 'https://kosy.tistory.com/'

    return (
        <>
            <NavbarToggle onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className={menuOpen ? 'navToggle active' : 'navToggle'} />
            </NavbarToggle>

            <Header>
                <HeaderContainer className={menuOpen ? 'header active' : 'header'}>
                    <Profile>
                        <img src={book} alt='profile' />
                        <h1>Ko Seung Yeon</h1>
                        <p>seungyeonko98@gmail.com</p>
                        <div className='socialLink'>
                            <a href={gitUrl} target='_blank' className='github' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                            <a href={blogUrl} target='_blank' className='Tistory' rel="noreferrer"><FontAwesomeIcon icon={faBook} className='icon' /></a>
                        </div>
                    </Profile>

                    <NavbarContainer >
                        <ul>
                            {navbarMenu.map((menu, id) => {
                                return (
                                    <li key={id}>
                                        <a href={menu.link}
                                            style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon className='icon' icon={menu.icon} />
                                            <span>{menu.name}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </NavbarContainer>
                </HeaderContainer>
            </Header>
        </>
    );
}

export default forwardRef(Navbar);