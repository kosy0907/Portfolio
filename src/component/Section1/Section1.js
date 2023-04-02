import React, { useEffect, useState } from 'react';
import './Section1.css';

export default function Section1() {

    const [position, setPosition] = useState(0);
    function onScroll() {
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className='wrap'>
            <div className='introBg'>
                <div className='intro bg1' />
                <div className='intro bg2' style={{ backgroundPositionY: position / 2 }} />
                <div className='intro bg3' style={{ backgroundPositionY: position / 2 }} />
                <div className='intro bg4' style={{ backgroundPositionY: position / 4 }} />
                <div className='intro bg5' style={{ backgroundPositionY: position / 6 }} />
                <div className='intro bg6' style={{ backgroundPositionY: position / 10 }} />

                <div className='intro text'>
                    <p>웹 개발을 좋아하는</p>
                    <p>고승연입니다.</p>
                </div>
            </div>

            <div className='exDiv'>This is test</div>
        </div>
    );
}
