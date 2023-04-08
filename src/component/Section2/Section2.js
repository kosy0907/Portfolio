import React, { forwardRef, useEffect } from 'react';
import './Section2.css';

function Section2(props, aboutRef) {

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
        <div className='about' ref={aboutRef}>
            <div className='container'>
                <div className='title fadeTarget'>
                    <p>About Me</p>
                </div>
                <div className='aboutContent fadeTarget'>
                    <div>About Content</div>
                    <div>About Content</div>
                    <div>About Content</div>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section2);