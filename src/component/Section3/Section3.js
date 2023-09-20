import React, { forwardRef, useEffect } from 'react';
import Tab from './Tab/Tab';
import { Project } from '../StyledComponent/StyledComponent';

function Section3(props, projectRef) {

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fadeIn');
                    } else {
                        entry.target.classList.remove('fadeIn');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const targets = document.querySelectorAll('.fadeTarget');
        targets.forEach(target => observer.observe(target));

        return () => observer.disconnect();
    }, []);

    return (
        <Project ref={projectRef} id='project'>
            <div className='wrap fadeTarget'>
                <div className='sectionTitle'>
                    <p>Project</p>
                </div>
                <Tab />
            </div>
        </Project>
    );
}

export default forwardRef(Section3);