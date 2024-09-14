import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import {
    Intro,
    MainContent,
    Title,
    Ellipse,
    Ellipse2,
    Ellipse3,
    Cross,
    HalfMoon,
    HalfMoonBorder,
    IntroFooter,
    Cross2
} from '../StyledComponent/StyledComponent';

function Section1(props, section1Ref) {
    const { section2Ref } = props;

    const scrollToSection2 = () => {
        if (section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Intro ref={section1Ref}>
            <MainContent>
                <Cross>
                    <div className="vertical" />
                    <div className="horizontal" />
                    <div className="vertical-rotated" /> {/* 두 번째 세로 선 (회전된) */}
                    <div className="horizontal-rotated" /> {/* 두 번째 가로 선 (회전된) */}
                </Cross>
                <Cross2>
                    <div className="vertical" />
                    <div className="horizontal" />
                </Cross2>
                <HalfMoon />
                <HalfMoonBorder />
                <Title>KO SEUNG YEON</Title>
                <Ellipse />
                <Ellipse2 />
                <Ellipse3 />
                <button onClick={scrollToSection2} style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1000
                }}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" color="#F08080" />
                </button>
            </MainContent>

            <IntroFooter>
                <span>KOSY Made</span>
            </IntroFooter>
        </Intro>
    )
}

export default forwardRef(Section1);
