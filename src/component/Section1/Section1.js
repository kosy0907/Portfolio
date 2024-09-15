import React, { forwardRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import {
    Intro,
    MainContent,
    Title,
    SubTitle,
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
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection2 = () => {
        if (section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <Title
                    style={{
                        transform: isScrolled ? 'translateX(-200%)' : 'translateX(0)',
                        transition: 'transform 1s ease'
                    }}>KO SEUNG YEON
                </Title>
                <SubTitle
                    style={{
                        transform: isScrolled ? 'translateX(200%)' : 'translateX(0)',
                        transition: 'transform 1s ease'
                    }}>PORTFOILIO
                </SubTitle>
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
