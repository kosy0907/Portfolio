import React, { forwardRef, useState } from 'react';
import book from '../../images/icon/book.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faHouse, faUser, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { Header, NavbarContainer, NavbarLi, NavbarUl, ProfileImg, Profileh1, SocialLink, SocialLinkItem } from '../StyledComponent/StyledComponent';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const gitUrl = 'https://github.com/kosy0907'
    const blogUrl = 'https://kosy.tistory.com/'

    return (
        <Header>
            <div className='d-lex flex-column'>
                <div className='profile'>
                    <ProfileImg src={book} alt='profile' />
                    <Profileh1>Ko Seung Yeon</Profileh1>
                    <SocialLink>
                        <SocialLinkItem href={gitUrl} target='_blank' className='github'><FontAwesomeIcon icon={faGithub} /></SocialLinkItem>
                        <SocialLinkItem href={blogUrl} target='_blank' className='Tistory'><FontAwesomeIcon icon={faBook} /></SocialLinkItem>
                    </SocialLink>
                </div>
            </div>

            <NavbarContainer>
                <NavbarUl>
                    <NavbarLi><a href='#home' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faHouse} style={{ paddingRight: '8px', fontSize: '24px', color: '#6f7180' }} /><span>Home</span></a></NavbarLi>
                    <NavbarLi><a href='#about' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faUser} style={{ paddingRight: '8px', fontSize: '24px', color: '#6f7180' }} /><span>About</span></a></NavbarLi>
                    <NavbarLi><a href='#project' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faFileInvoice} style={{ paddingRight: '8px', fontSize: '24px', color: '#6f7180' }} /><span>Project</span></a></NavbarLi>
                </NavbarUl>
            </NavbarContainer>
        </Header>
    );
}

export default forwardRef(Navbar);