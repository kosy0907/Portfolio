import React, { forwardRef } from 'react';
import { Contact } from '../StyledComponent/StyledComponent';

function Section4(props, section4Ref) {
    return (
        <Contact ref={section4Ref} />
    );
}

export default forwardRef(Section4);