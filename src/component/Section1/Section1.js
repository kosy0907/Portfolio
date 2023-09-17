import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { Home, HomeContainer, Homep, Homeh1, Star, ToAboutBtn } from '../StyledComponent/StyledComponent';
import './Section1.css';

function Section1(props) {

    const toAbout = () => {
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Home id='home'>
                <Star />
                <HomeContainer>
                    <Homeh1>Ko Seung Yeon</Homeh1>
                    {/* Text Animation Section */}
                    <Homep>
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
                    </Homep>
                    <ToAboutBtn onClick={toAbout}>
                        About Me
                    </ToAboutBtn>
                </HomeContainer>
            </Home>
        </>
    );
}

export default Section1;
