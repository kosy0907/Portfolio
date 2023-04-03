import React, { forwardRef } from 'react';
import './Section2.css';

function Section2(props, aboutRef) {
    return (
        <div className='about' ref={aboutRef}>
            ABOUT
        </div>
    );
}

export default forwardRef(Section2);