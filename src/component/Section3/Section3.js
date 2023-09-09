import React, { forwardRef, useEffect, useState } from 'react';
import { projectItem } from './SlideShow/projectItem';
import SlideShow from './SlideShow/SlideShow';
import './Section3.css';

function Section3(props, projectRef) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleItemClick = (item) => {
        if (selectedItem === null) {
            setSelectedItem({ ...item, show: true });
            setIsCardVisible(true);
        } else if (selectedItem.id !== item.id) {
            setSelectedItem({ ...item, show: true });
            setIsCardVisible(false);
            window.requestAnimationFrame(() => setIsCardVisible(true));
        }
    };

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
        <div className='project' ref={projectRef}>
            <div className='wrap'>
                {projectItem.map((item) => {
                    return (
                        <div>
                            <img src={require(`../../images/mockup/${item.img}.png`)} alt='mockup' style={{ width: '100px' }} />
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <p>{item.link}</p>
                            <p>{item.code}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default forwardRef(Section3);