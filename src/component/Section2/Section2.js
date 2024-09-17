import React, { useEffect, useRef, useState, forwardRef } from 'react';
import {
    About,
    AboutEllipse, AboutEllipse2,
    FeatureContainer,
    FeatureContent,
    FeatureTitle,
    FeatureDescription,
    CheckIcon,
    AnimatedAbility, AnimatedIntroduction,
    Info,
    CheckIconContainer
} from '../StyledComponent/StyledComponent';
import { TableMenu } from './TableMenu';
import { Features } from './Features';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section2(props, section2Ref) {
    const [isVisible, setIsVisible] = useState(false);
    const introRef = useRef(null);
    const certRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const currentIntroRef = introRef.current;
        const currentCertRef = certRef.current;

        if (currentIntroRef) observer.observe(currentIntroRef);
        if (currentCertRef) observer.observe(currentCertRef);

        return () => {
            if (currentIntroRef) observer.unobserve(currentIntroRef);
            if (currentCertRef) observer.unobserve(currentCertRef);
        };
    }, []);

    return (
        <About ref={section2Ref}>
            <AboutEllipse />
            <AboutEllipse2 />
            <AnimatedIntroduction ref={certRef} $isVisible={isVisible}>
                <h2>Hello, I'm Ko Seung Yeon!</h2>
                <Info>
                    <p className='simpleWords'>
                        사용자 경험을 최우선으로 하여 보다 완벽한 제품을 만들기 위해 꼼꼼하게 테스트하고 분석하는 과정을 즐깁니다.
                    </p>
                </Info>
                <h2>Education & Certificate</h2>
                <table>
                    <tbody>
                        {TableMenu.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </AnimatedIntroduction>
            <AnimatedAbility ref={introRef} $isVisible={isVisible}>
                {Features.map((feature, index) => (
                    <FeatureContainer key={index}>
                        <CheckIconContainer>
                            <CheckIcon>
                                <FontAwesomeIcon icon={feature.icon} className='icon' style={{ width: '30px', height: '30px' }} />
                            </CheckIcon>
                        </CheckIconContainer>
                        <FeatureContent>
                            <FeatureTitle>
                                {feature.title}
                            </FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                        </FeatureContent>
                    </FeatureContainer>
                ))}
            </AnimatedAbility>
        </About>
    );
}

export default forwardRef(Section2);
