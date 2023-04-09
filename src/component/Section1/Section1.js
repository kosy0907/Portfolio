import React, { useEffect, useState } from 'react';
import './Section1.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section1(props) {
    // parallax
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
            <div className='introBg'>
                <div className='intro bg1' style={{ backgroundPositionY: position }} />
                <div className='intro bg2' style={{ backgroundPositionY: position }} />
                <div className='intro bg3' style={{ backgroundPositionY: position / 2 }} />
                <div className='intro bg4' style={{ backgroundPositionY: position / 2 }} />
                <div className='intro bg5' style={{ backgroundPositionY: position / 3 }} />
                <div className='intro bg6' style={{ backgroundPositionY: position / 10 }} />

                <div className='intro cover'>
                    <div className='text'>
                        <div className='scrollContainer'>
                            <div className='scrollBox'>
                                <ul>
                                    <li style={{ color: "#03d2e0" }}>웹 개발을</li>
                                    <li style={{ color: "#025FCC" }}>기록을</li>
                                    <li style={{ color: "#CC9F02" }}>픽셀아트를</li>
                                </ul>
                            </div>
                            <span style={{ color: "#fff" }}>좋아하는 <span style={{ color: '#02C0CC' }}>고승연</span>입니다.</span>
                        </div >

                        <div className='fixedContainer'>
                            <ul>
                                <li><span>React.js</span>를 활용하여 프로젝트를 개발합니다.</li>
                                <li>웹 개발 시 <span>반응형 웹</span>을 고려하여 개발합니다.</li>
                                <li>공부한 내용을 <span>블로그</span>에 게시하여 스터디를 진행합니다.</li>
                            </ul>
                        </div>
                        <div style={{ marginTop: "3rem" }}>
                            <FontAwesomeIcon className='bounceArrow' icon={faAngleDown} size="2x" />
                        </div>
                        <div className='toAboutBtn' onClick={toAbout}>About Me</div>
                    </div >
                </div >

            </div >
        </div >
    );
}

export default Section1;