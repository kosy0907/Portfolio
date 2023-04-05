import React, { forwardRef } from 'react';
import './Section2.css';

function Section2(props, aboutRef) {
    return (
        <div className='about' ref={aboutRef}>
            <div className='container'>
                <div className='title'>
                    <p>About Me</p>
                </div>
                <div className='content'>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section2);