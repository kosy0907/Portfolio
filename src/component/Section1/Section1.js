import React, { useState, useEffect } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Section1.css';

function Section1(props) {
    const [position, setPosition] = useState(0);
    const onScroll = () => {
        setPosition(window.scrollY);
    }
    const toAbout = () => {
        props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className='home'>
            <div className='parallaxContainer'>
                <div className='intro bg5' style={{ backgroundPositionY: position / 2 }} />
                <div className='stars'>
                    <div id='star' />
                </div>
                <div className='intro bg6' style={{ backgroundPositionY: position / 10 }} />

                <div className='text'>
                    <div className='scrollContainer'>
                        <div className='scrollBox'>
                            <ul>
                                <li style={{ color: "#03d2e0" }}>웹 개발을</li>
                                <li style={{ color: "#025FCC" }}>기록을</li>
                                <li style={{ color: "#CC9F02" }}>새로운 도전을</li>
                            </ul>
                        </div>
                        <span style={{ color: "#fff" }}>좋아하는 <span style={{ color: '#02C0CC' }}>고승연</span>입니다.</span>
                    </div >

                    <div className='fixedContainer'>
                        <ul>
                            <li>안녕하세요! 저의 포트폴리오에 오신 것을 환영합니다!</li>
                            <li style={{ marginBottom: '2.5rem' }}>궁금한 점이 있으시다면 언제든지 연락주시길 바랍니다.</li>
                            <li><span>React.js</span>를 활용하여 프로젝트를 진행합니다<span>.</span></li>
                            <li>웹 개발 시 <span>반응형 웹</span>을 고려하여 개발합니다<span>.</span></li>
                            <li>공부한 내용을 <span>블로그</span>에 게시하여 스터디를 진행합니다<span>.</span></li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <FontAwesomeIcon className='bounceArrow' icon={faAngleDown} size="2x" />
                    </div>
                    <div className='toAboutBtn' onClick={toAbout}>
                        About Me
                    </div>
                </div >
            </div>
        </div>
    );
}

export default Section1;
