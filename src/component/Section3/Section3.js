import React, { forwardRef, useEffect, useState } from 'react';
import { projectItem } from './Card/projectItem';
import './Section3.css';
import Card from './Card/Card';

function Section4(props, projectRef) {
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
                <div className='title fadeTarget'>
                    <p>PROJECT</p>
                    <p style={{ color: '#CBE4DE', fontSize: '1rem', margin: '0' }}>프로젝트를 클릭해주세요!</p>
                </div>
                <div className='projectContent fadeTarget'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-3" style={{ padding: '0' }}>
                                <div className='projectTitle'>
                                    {projectItem.map((item, id) => {
                                        return (
                                            <div key={id} onClick={() => handleItemClick(item)}>{item.title}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-7">
                                <div className='cardContainer'>
                                    {isCardVisible && selectedItem && (
                                        <Card item={selectedItem} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section4);