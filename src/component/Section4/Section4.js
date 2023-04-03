import React, { forwardRef } from 'react';
import './Section4.css';

function Section4(props, projectRef) {
    return (
        <div className='project' ref={projectRef}>
            PROJECT
        </div>
    );
}

export default forwardRef(Section4);