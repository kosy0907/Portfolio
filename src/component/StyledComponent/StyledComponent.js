import styled, { keyframes } from "styled-components";

// Animation
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeInOut = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`;

// Navbar
export const NavbarToggle = styled.div`
    .navToggle {
        position: fixed;
        left: 15px;
        top: 15px;
        z-index: 9998;
        border: 0;
        font-size: 24px;
        transition: all 0.4s;
        outline: none !important;
        color: #F08080;
        width: 40px;
        height: 40px;
        line-height: 0;
        border-radius: 5px;
        cursor: pointer;
    }

    .active {
        background-color: #F08080;
        color: #fff !important;
    }

    @media (min-width: 1080px) {
        display: none!important;
    }
`

export const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px 20px;
    z-index: 999; 
    width: 100vw;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding: 0;

        li {
            a {
                color: #fff;
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color: #F08080;
                }
            }
        }
    }
    &.active {
        transform: translateY(0);
    }

    @media (max-width: 1080px) {
        ul {
            flex-direction: column;
            align-items: center;
            padding: 10px 0;
        }

        padding: 10px 0;
        transform: translateY(-100%);
        transition: transform 0.5s ease-in-out;
    }
`

// Section1
export const Intro = styled.div`
    font-family: 'Arial', sans-serif;
    color: #94a8a8;
    background-color: #000;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const MainContent = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 6rem;
    letter-spacing: 5px;
    margin: 0;
    color: #F08080;
    z-index: 999;
    animation: ${fadeIn} 1.5s ease-in; 

    @media(max-width: 1080px) {
        font-size: 3rem;
    }
`;

export const Ellipse = styled.div`
    width: 1050px;
    height: 400px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%; // 화면의 중앙에 위치
    left: 50%; // 화면의 중앙에 위치
    transform: translate(-50%, -50%);
    animation: spin 13s ease-in-out infinite;

    @media(max-width: 1080px) {
        width: 700px;
        height: 300px;
    }
    
    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(10deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(30deg);
        }   
        100% {
            transform: translate(-50%, -50%) rotate(10deg);
        }
    }
`;

export const Ellipse2 = styled.div`
    width: 1050px;
    height: 400px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin2 10s ease-in-out infinite;

    @media(max-width: 1080px) {
        width: 700px;
        height: 300px;
    }
    
    @keyframes spin2 {
        0% {
            transform: translate(-50%, -50%) rotate(-20deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(10deg);
        }   
        100% {
            transform: translate(-50%, -50%) rotate(-20deg);
        }
    }
`

export const Ellipse3 = styled.div`
    width: 1050px;
    height: 400px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    animation: spin3 10s ease-in-out infinite;

    @media(max-width: 1080px) {
        width: 700px;
        height: 300px;
    }
    
    @keyframes spin3 {
        0% {
            transform: translate(-50%, -50%) rotate(-40deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(0deg);
        }   
        100% {
            transform: translate(-50%, -50%) rotate(-40deg);
        }
    }
`

export const Cross = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: ${fadeInOut} 5s ease-in-out infinite;

    /* 세로 선 */
    & .vertical {
        position: absolute;
        width: 1px;
        height: 300px;
        background-color: #c7b658;
        background-image: linear-gradient(#000, #c7b658, #000);
        top: -150px;
        left: 50%;
        transform: translateX(-50%);
    }

    /* 가로 선 */
    & .horizontal {
        position: absolute;
        width: 200px;
        height: 1px;
        background-color: #c7b658;
        background-image: linear-gradient(#000, #c7b658, #000);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Cross2 = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: 1;
    animation: ${fadeInOut} 7s ease-in-out infinite;

    /* 세로 선 */
    & .vertical {
        position: absolute;
        width: 1px;
        height: 150px;
        background-color: #94a8a8;
        background-image: linear-gradient(#000, #94a8a8, #000);
        top: -75px;
        left: 50%;
        transform: translateX(-50%);
    }

    /* 가로 선 */
    & .horizontal {
        position: absolute;
        width: 150px;
        height: 1px;
        background-color: #94a8a8;
        background-image: linear-gradient(#000, #94a8a8, #000);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const HalfMoon = styled.div`
    width: 100px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 0 0 100px 100px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
`;

export const HalfMoonBorder = styled.div`
    width: 100px;
    height: 50px;
    border: 5px solid rgba(240, 128, 128, 0.7);
    border-radius: 100px 100px 0 0;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    z-index: 200;
`

export const ToAboutBtn = styled.button`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    zIndex: 1000;
`

export const IntroFooter = styled.footer`
    bottom: 0;
    padding-bottom: 30px;
    color: #fcdcbc;
    font-size: 1rem;
`;

// Section2
export const About = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: #c4b55e;
    padding: 40px 0;

    h1, p {
        margin: 0;
    }

    a {
        svg {
            color: #000;

            &:hover {
                color: #fcdcbc;
                }
            }
        }
`

export const Skill = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: #e2eae7;
`

// Section3
export const Project = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #5ec4a4;
`

// Section4
export const Contact = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #c4655e;
`

// Footer
export const Footer = styled.div`
    width: 100vw;
    height: 30vh;
    background-color: #c2d1be;
    color: #F08080;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: relative;

    p {
        position: absolute;
        font-size: 14px;
        bottom: 0
    }

    .socialLink {
        position: absolute;
        bottom: 20%;

        .snsIcon {
            margin: 10px 20px;

            svg {
                color: #fff; /* 기본 색상 */
            }

            &:hover svg {
                color: #F08080; /* hover 시 색상 변경 */
            }
        }
    }
`

export const FooterCross = styled(Cross)`
    & .vertical {
        height: 80px;
        top: -40px;
        background-image: linear-gradient(#fff, #c7b658, #fff);
    }

    & .horizontal {
        width: 60px;
        background-image: linear-gradient(#fff, #c7b658, #fff);
    }
`

export const FooterCross2 = styled(Cross2)`
    & .vertical {
        height: 60px;
        top: -30px;
        background-image: linear-gradient(#fff, #94a8a8, #fff);
    }

    & .horizontal {
        width: 60px;
        background-image: linear-gradient(#fff, #94a8a8, #fff);
    }
`