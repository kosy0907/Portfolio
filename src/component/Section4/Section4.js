import React, { forwardRef } from 'react';
import './Section4.css';

function Section4(props, projectRef) {
    return (
        <div className='project' ref={projectRef}>
            <div className='container'>
                <div className='title'>
                    <p>PROJECT</p>
                    <p style={{ color: '#CBE4DE', fontSize: '1.25rem', margin: '0' }}>Card를 클릭해주세요!</p>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section4);