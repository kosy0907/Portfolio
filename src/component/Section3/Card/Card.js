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
            <div className="cardTitle">{item.title}</div>
            <div className="cardDescription">{item.description}</div>
        </div>
    );
}

export default Card;