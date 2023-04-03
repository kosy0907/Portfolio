import React, { forwardRef } from 'react';
import './Section3.css';

function Section3(props, skillRef) {
    return (
        <div className='skill' ref={skillRef}>
            SKILL
        </div>
    );
}

export default forwardRef(Section3);