import React, { useState, useEffect } from 'react';

function SlideShow(props) {
    const { item } = props;

    return (
        <>
            <div className='projectSlide'>
                <img src={require(`../../../images/mockup/${item.img}.png`)} alt='mockup' style={{ width: '100px' }} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.link}</p>
                <p>{item.code}</p>
            </div>
        </>
    );
}

export default SlideShow;
