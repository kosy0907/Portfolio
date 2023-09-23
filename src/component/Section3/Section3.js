import React, { forwardRef } from 'react';
import Tab from './Tab/Tab';
import { Project } from '../StyledComponent/StyledComponent';

function Section3(props, projectRef) {

    return (
        <Project ref={projectRef} id='project'>
            <div className='wrap'>
                <div className='sectionTitle'>
                    <p>Project</p>
                </div>
                {/* Tab Component */}
                <Tab />
            </div>
        </Project>
    );
}

export default forwardRef(Section3);