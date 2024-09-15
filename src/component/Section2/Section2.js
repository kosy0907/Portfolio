import React, { useEffect, useRef, useState, forwardRef } from 'react';
import {
    About,
    AboutEllipse, AboutEllipse2,
    AnimatedProfileImage, AnimatedIntroduction
} from '../StyledComponent/StyledComponent';
import { TableMenu } from './TableMenu';

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
            <AnimatedProfileImage ref={introRef} $isVisible={isVisible} />
            <AnimatedIntroduction ref={certRef} $isVisible={isVisible}>
                <h2>Hello, I'm Ko Seung Yeon!</h2>
                <p>
                    기술이 발전함에 따라 소프트웨어 품질의 중요성을 깊이 깨닫게 되었습니다. 저는 언제나 사용자 경험을 최우선으로 여기며, 완벽한 제품을 만들기 위해 꼼꼼히 테스트하고 분석하는 과정을 즐깁니다.
                    대학 시절 여러 프로젝트에 참여하면서 테스팅의 기본 원칙과 다양한 테스트 기법을 익혔습니다. 특히 자동화 테스트 도구에 큰 관심을 가지고 있어, 관련 기술을 학습하고 실제로 적용해보는 경험을 쌓았습니다.
                    제 목표는 품질 보증 분야의 뛰어난 전문가로 성장하는 것이며, 이를 위해 끊임없이 배우고 발전하는 자세로 임하고 있습니다. 저는 팀원들과의 협업을 통해 더 나은 결과를 창출하는 것을 중요하게 여기며, 항상 열린 마음으로 피드백을 받아들이고 있습니다.
                </p>
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
        </About>
    );
}

export default forwardRef(Section2);
