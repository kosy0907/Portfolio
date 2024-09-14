import React, { forwardRef } from 'react';
import { Project } from '../StyledComponent/StyledComponent';

function Section3(props, section3Ref) {
    return (
        <Project ref={section3Ref} />
    );
}

export default forwardRef(Section3);
