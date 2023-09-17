import React, { forwardRef, useState } from 'react';
import book from '../../images/icon/book.gif';
import './Navbar.css';
import { Header, NavbarLi, NavbarUl, ProfileImg, Profileh1, SocialLink, SocialLinka } from '../StyledComponent/StyledComponent';

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <Header>
            <div class='d-flex flex-column'>
                <div class='profile'>
                    <ProfileImg src={book} alt='profile img' />
                    <Profileh1 class='text-light'><a href='index.html'>Ko Seung Yeon</a></Profileh1>
                    <SocialLink>
                        <SocialLinka className='github' href='#'><i class="ri-github-fill" /></SocialLinka>
                        <SocialLinka className='Tistory' href='#'><i class="ri-book-2-line" /></SocialLinka>
                    </SocialLink>
                </div>

                <Navbar>
                    <NavbarUl>
                        <NavbarLi><a href="#home" class="nav-link scrollto active"><i class="ri-home-4-line" /> <span>Home</span></a></NavbarLi>
                        <NavbarLi><a href="#about" class="nav-link scrollto"><i class="ri-user-line" /><span>About</span></a></NavbarLi>
                        <NavbarLi><a href="#project" class="nav-link scrollto"><i class="ri-computer-line" /> <span>Project</span></a></NavbarLi>
                    </NavbarUl>
                </Navbar>
            </div>
        </Header>

        // <div className='navWrapper'>
        //     <nav>
        //         <FontAwesomeIcon color='#CBE4DE' className={`menuIcon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} icon={menuOpen ? faTimes : faBars} size="2x" />
        //         <p>seungyeonko98@gmail.com</p>
        //         <ul className={`navMenu ${menuOpen ? 'open' : ''}`}>
        //             <li className='navBtn' onClick={HomeClick}>HOME<span>.</span></li>
        //             <li className='navBtn' onClick={AboutClick}>ABOUT<span>.</span></li>
        //             <li className='navBtn' onClick={ProjectClick}>PROJECT<span>.</span></li>
        //         </ul>
        //     </nav>
        // </div>
    );
}

export default forwardRef(Navbar);