import React, { useEffect, useState } from 'react';
import './Card.css';

function Card(props) {
    const { item } = props;

    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        if (item.show) {
            setTimeout(() => {
                setShowCard(true);
            }, 20);
        }
    }, [item]);

    return (
        <div className={`card ${showCard ? 'show' : ''}`}>
            <div className='cardImg'><img src={require(`../../../images/mockup/${item.img}.png`)} alt='Mockup' /></div>
            <div className='cardTitle'>{item.title}</div>
            <div className='cardDescription'>{item.description}</div>
            <div className='cardPeriod'>개발 기간: {item.period}</div>
            <div className='cardLink'>Link: {item.link}</div>
            <div className='cardCode'>Code: {item.code}</div>
        </div>
    );
}

export default Card;