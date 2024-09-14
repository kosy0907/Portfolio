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
    Cross2,
    ToAboutBtn
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

                <ToAboutBtn onClick={scrollToSection2}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} size='2x' color='#F08080' />
                </ToAboutBtn>
            </MainContent>

            <IntroFooter>
                <span>KOSY Made</span>
            </IntroFooter>
        </Intro>
    )
}

export default forwardRef(Section1);
