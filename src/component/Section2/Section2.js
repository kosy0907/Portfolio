import React, { forwardRef, useEffect } from 'react';
import { skillData } from './skillData';
import { About } from '../StyledComponent/StyledComponent';

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
        <About className='about' ref={aboutRef} id='about'>
            {/* About Banner */}
            <div className='sectionTitle'>
                <p>About me</p>
            </div>
            <div className='aboutBanner fadeTarget'>
                <div className='container' id='aboutContainer'>
                    <div className='bannerComment'>
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
                                <li>Github - <span className='link' style={{ cursor: 'pointer' }} onClick={() => window.open(gitHubUrl, '_blank')}>https://github.com/kosy0907</span></li>
                                <li>Study Blog - <span className='link' style={{ cursor: 'pointer' }} onClick={() => window.open(blogUrl, '_blank')}>https://kosy.tistory.com</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* About skill */}
            <div className='aboutSkill'>
                {skillData.map((item, i) => {
                    return (
                        <p key={i}>{item.name}</p>
                    )
                })}
            </div>
        </About>
    );
}

export default forwardRef(Section2);