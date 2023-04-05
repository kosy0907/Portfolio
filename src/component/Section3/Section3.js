import React, { forwardRef } from 'react';
import './Section3.css';

function Section3(props, skillRef) {
    return (
        <div className='skill' ref={skillRef}>
            <div className='container'>
                <div className='title'>
                    <p>SKILL</p>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section3);