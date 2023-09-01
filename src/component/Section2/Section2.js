import React, { forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReadme } from '@fortawesome/free-brands-svg-icons';
import { skillData } from './skillData';
import './Section2.css';

const gitHubUrl = "https://github.com/kosy0907"
const blogUrl = "https://kosy.tistory.com/"

function Section2(props, aboutRef) {

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
        <div className='about' ref={aboutRef}>
            {/* About Banner */}
            <div className='aboutBanner'>
                <div className='container fadeTarget'>
                    <div className='bannerComment'>
                        <FontAwesomeIcon icon={faUser} beat size='2x' color='#03d2e0' />
                        <div className='commentText'>
                            <p>KO SEUNG YEON</p>
                        </div>
                    </div>
                    <div className='bannerContent'>
                        <div className='row'>
                            <p style={{ fontWeight: '900' }}>Education</p>
                            <ul>
                                <li>명지대학교 융합소프트웨어학부</li>
                                <li>2018.02 ~ 2023.02(졸업)</li>
                            </ul>
                        </div>
                        <div className='row'>
                            <p style={{ fontWeight: '900' }}>Certificate</p>
                            <ul>
                                <li>정보처리기사 2022.06.17</li>
                                <li>SQLD(SQL 개발자) 2022.06.24</li>
                                <li>SW테스트 전문가(CSTS) FL 2022.08.20</li>
                            </ul>
                        </div>
                        <div className='row'>
                            <p style={{ fontWeight: '900' }}>Archive</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faGithub} /> Github - <span className='link' style={{ cursor: 'pointer' }} onClick={() => window.open(gitHubUrl, '_blank')}>https://github.com/kosy0907</span></li>
                                <li><FontAwesomeIcon icon={faReadme} /> Study Blog - <span className='link' style={{ cursor: 'pointer' }} onClick={() => window.open(blogUrl, '_blank')}>https://kosy.tistory.com</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* About skill */}
            <div className='aboutSkill'>
                {skillData.map((item) => {
                    return (
                        <p>{item.name}</p>
                    )
                })}
            </div>

            {/* About personality*/}
            <div className='aboutPersonality'>
                <div className='container fadeTarget'>
                    <ul className='aboutIcon'>
                        <li>
                            <div className='gifClock' />
                            <dl>
                                <dt>#성실함</dt>
                                <dd>시간 약속에 늦지 않습니다.</dd>
                            </dl>
                        </li>
                        <li>
                            <div className='gifComplete' />
                            <dl>
                                <dt>#꼼꼼함</dt>
                                <dd>시간을 들여 꼼꼼하게<br />일을 처리합니다.</dd>
                            </dl>
                        </li>
                        <li>
                            <div className='gifBook' />
                            <dl>
                                <dt>#도전 정신</dt>
                                <dd>새로운 것을 배우는 것을<br />두려워하지 않습니다.</dd>
                            </dl>
                        </li>
                        <li>
                            <div className='gifPen' />
                            <dl>
                                <dt>#기록</dt>
                                <dd>기록하는 습관을 통해<br />해야 할 일을 잊지 않고 챙깁니다.</dd>
                            </dl>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default forwardRef(Section2);