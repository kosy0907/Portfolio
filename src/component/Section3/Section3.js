import React, { forwardRef, useEffect } from 'react';
import './Section3.css';
import Tab from './Tab/Tab';

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
        <div className='project' ref={projectRef} id='project'>
            <div className='wrap'>
                <Tab />
            </div>
        </div>
    );
}

export default forwardRef(Section3);