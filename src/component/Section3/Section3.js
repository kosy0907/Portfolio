import React, { forwardRef } from 'react';
import { projectItem } from './Card/projectItem';
import './Section3.css';
import { Card } from 'react-bootstrap';

const images = [
    'https://dummyimage.com/600x400/000/fff&text=Image+1',
    'https://dummyimage.com/600x400/000/fff&text=Image+2',
    'https://dummyimage.com/600x400/000/fff&text=Image+3',
    'https://dummyimage.com/600x400/000/fff&text=Image+4',
    'https://dummyimage.com/600x400/000/fff&text=Image+5',
];

function Section4(props, projectRef) {
    return (
        <div className='project' ref={projectRef}>
            <div className='wrap'>
                <div className='title'>
                    <p>PROJECT</p>
                    <p style={{ color: '#CBE4DE', fontSize: '1rem', margin: '0' }}>프로젝트를 클릭해주세요!</p>
                </div>
                <div className='projectContent'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-3" style={{ padding: '0' }}>
                                <div className='projectTitle'>
                                    {projectItem.map((item, id) => {
                                        return (
                                            <div style={{ color: '#fff', fontSize: '1.2rem', margin: '1rem 0', width: '7rem' }}>{item.title}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-7">
                                <div className='cardContainer'>
                                    {projectItem.map((item, id) => {
                                        return (
                                            <Card />
                                        );
                                    })}
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