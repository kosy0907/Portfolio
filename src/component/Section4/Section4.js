import React, { forwardRef } from 'react';
import { Contact, ContactTitle, LinksContainer } from '../StyledComponent/StyledComponent';

function Section4(props, section4Ref) {
    return (
        <Contact ref={section4Ref}>
            <ContactTitle>Link & Contact</ContactTitle>
            <LinksContainer>
                <h3 style={{ color: '#f08080' }}>Links</h3>
                <a href="https://github.com/kosy0907/" target="_blank" rel="noreferrer">Github</a>
                <a href="https://kosy.tistory.com/" target="_blank" rel="noreferrer">Blog</a>
                <h3 style={{ color: '#f08080' }}>Contact</h3>
                <p>E-mail: seungyeonko98@gmail.com</p>
            </LinksContainer>
        </Contact>
    );
}

export default forwardRef(Section4);