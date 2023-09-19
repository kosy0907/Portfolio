import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { Home, HomeContainer, Homep, Homeh1, Star, ToAboutBtn } from '../StyledComponent/StyledComponent';

function Section1(props) {

    const toAbout = () => {
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Home id='home'>
            <div className='star' />
            <div className='homeContainer'>
                <h1>Ko Seung Yeon</h1>
                <p>
                    I love
                    <TypeAnimation
                        sequence={[
                            ' Web Develop',
                            1000,
                            ' Recording',
                            1000,
                            ' Challenge',
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </p>
                <div className='toAboutBtn' onClick={toAbout}>
                    About Me
                </div>
            </div>
        </Home>
    );
}

export default Section1;
