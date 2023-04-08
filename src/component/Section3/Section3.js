import React, { forwardRef } from 'react';
import './Section3.css';

function Section4(props, projectRef) {
    return (
        <div className='project' ref={projectRef}>
            <div className='container'>
                <div className='title'>
                    <p>PROJECT</p>
                    <p style={{ color: '#CBE4DE', fontSize: '1.2rem', margin: '0' }}>카드를 클릭해주세요!</p>
                </div>
                <div className='projectContent'>
                    <div className='projectLeft'>
                        <h3>This is Project content Left div</h3>
                    </div>
                    <div className='projectRight'>
                        <div className='checkerBoard'>
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section4);