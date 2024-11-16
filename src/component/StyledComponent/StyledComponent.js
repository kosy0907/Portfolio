import styled, { keyframes, css } from "styled-components";
import night from '../../images/PixelArt/night.gif';

// Animation
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

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
`

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
    }
    40% {
        transform: translateY(-10px) translateX(-50%);
    }
    60% {
        transform: translateY(-5px) translateX(-50%);
    }
`

export const slideInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

// 재사용 컴포넌트
const StyledEllipse = styled.div`
    width: 1050px;
    height: 400px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${({ animation }) => animation} 10s ease-in-out infinite;

    @media (max-width: 1400px) {
        width: 700px;
        height: 300px;
    }

    @media (max-width: 860px) {
        width: 300px;
        height: 150px;
    }

    @media (max-width: 380px) {
        width: 180px;
        height: 80px;
    }
`

export const StackSection = styled.div`
    position: sticky;
    top: 0;
`

// Navbar
export const NavbarToggle = styled.div`
    .navToggle {
        position: fixed;
        left: 15px;
        top: 15px;
        z-index: 1001;
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
    z-index: 1000; 
    max-width: 100vw;
    font-size: 1.25rem;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding: 0;

        li {
        &:hover {
            color: #F08080;
            }
        }
    }
    &.active {
        transform: translateY(0);
    }

    @media (max-width: 1080px) {
        font-size: 1rem;
        padding: 10px 0;
        transform: translateY(-100%);
        transition: transform 0.5s ease-in-out;

        ul {
            flex-direction: column;
            align-items: center;
            padding: 10px 0;

            li {
                margin: 5px 0;
            }
        }
    }
`

// Section1
export const Intro = styled.div`
    color: #94a8a8;
    background-color: #000;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    overflow: hidden;
    font-family: 'Freesentation-9Black';
`

export const MainContent = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const Title = styled.h1`
    font-size: 6rem;
    letter-spacing: 5px;
    margin: 0;
    color: #F08080;
    z-index: 999;
    animation: ${fadeIn} 1.5s ease-in; 
    font-weight: 900;

    @media(max-width: 1080px) {
        font-size: 3rem;
    }
`

export const SubTitle = styled.div`
    width: 65%;
    border-radius: 50px;
    background-color: #F08080;
    color: #000;
    font-size: 4rem;
    font-weight: 900;
    margin-top: 10px;
    z-index:999;
    animation: ${fadeIn} 1.5s ease-in; 

    @media(max-width: 1080px) {
        font-size: 2rem;
    }
`

export const Ellipse = styled(StyledEllipse)`
    animation: spin 13s ease-in-out infinite;

    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(10deg); }
        50% { transform: translate(-50%, -50%) rotate(30deg); }   
        100% { transform: translate(-50%, -50%) rotate(10deg); }
    }
`

export const Ellipse2 = styled(StyledEllipse)`
    animation: spin2 10s ease-in-out infinite;

    @keyframes spin2 {
        0% { transform: translate(-50%, -50%) rotate(-20deg); }
        50% { transform: translate(-50%, -50%) rotate(10deg); }   
        100% { transform: translate(-50%, -50%) rotate(-20deg); }
    }
`

export const Ellipse3 = styled(StyledEllipse)`
    z-index: 1;
    animation: spin3 10s ease-in-out infinite;

    @keyframes spin3 {
        0% { transform: translate(-50%, -50%) rotate(-40deg); }
        50% { transform: translate(-50%, -50%) rotate(0deg); }   
        100% { transform: translate(-50%, -50%) rotate(-40deg); }
    }
`

export const Cross = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    z-index: 1;
    animation: ${fadeInOut} 5s ease-in-out infinite;

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
`

export const Cross2 = styled(Cross)`
    transform: translate(-50%, -50%) rotate(45deg);
    animation: ${fadeInOut} 7s ease-in-out infinite;

    & .vertical {
        height: 150px;
        background-color: #94a8a8;
        top: -75px;
    }

    & .horizontal {
        width: 150px;
        background-color: #94a8a8;
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
    animation: ${fadeIn} 0.25s ease-in-out;
`

export const HalfMoonBorder = styled(HalfMoon)`
    border: 5px solid rgba(240, 128, 128, 0.7);
    border-radius: 100px 100px 0 0;
    position: absolute;
    background: none;
    z-index: 200;
    animation: ${fadeIn} 0.5s ease-in;
`

export const ToAboutBtn = styled.button`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    animation: ${bounce} 2s infinite;
`

export const IntroFooter = styled.footer`
    bottom: 0;
    padding-bottom: 30px;
    color: rgb(252, 220, 188, 0.3);
    font-size: 0.75rem;
`

// Section2
export const About = styled.div`
    max-width: 100vw;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 60px;
    position: relative;
    overflow: hidden;
    color: #333232;

    a {
        svg {
            color: #000;

            &:hover {
                color: #fcdcbc;
                }
            }
    }

    @media (max-width: 1400px) {
        align-items: center;
    }

    @media (max-width: 860px) {
        padding: 40px 10px;
    }
`

export const AboutEllipse = styled(Ellipse)`
    width: 400px;
    height: 200px;
    top: 25%;
    left: 10%;
    animation: none;
    transform: rotate(35deg);
    border-color: rgba(235, 152, 152, 0.5);

    @media (max-width: 1400px) {
        width: 700px;
        height: 350px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(35deg);
    }
`

export const AboutEllipse2 = styled(Ellipse)`
    width: 400px;
    height: 200px;
    top: 25%;
    left: 60%;
    animation: none;
    transform: rotate(35deg);
    border-color: rgba(235, 152, 152, 0.5);

    @media (max-width: 1400px) {
        width: 700px;
        height: 350px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(20deg);
    }
`

const Ability = styled.section`
    padding: 20px 30px;
    position: relative;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    flex-direction: column;

    @media (max-width: 1400px) {
        width: 100%;
        padding: 20px;
    }

    @media (max-width: 500px) {
        padding: 5px 20px;
    }
`

export const FeatureContainer = styled.div`
    padding: 20px;
    margin-right: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1400px) {
        margin: 0;
    }

    @media (max-width: 860px) {
        padding: 10px;
    }
`

export const FeatureTitle = styled.h3`
    font-size: 1.5em;
    margin: 0;
    padding-bottom: 10px;
    color: #F08080;
    font-family: 'Freesentation-9Black';

    @media (max-width: 500px) {
        font-size: 1.25rem;
    }
`

export const FeatureContent = styled.div`
    flex: 1;
    border: 2px solid #757575;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;

    @media (max-width: 860px) {
        width: 100%;
    }
`

export const FeatureDescription = styled.p`
    line-height: 1.5;
    margin: 0;
    font-family: 'Freesentation-9Black';
    font-size: 1.2rem;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

export const CheckIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #F08080;
    margin-right: 30px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 860px) {
        display: none;
    }
`

export const CheckIcon = styled.span`
    color: #fff;
    font-size: 1.5em;
    width: 30px;
    height: 30px;

    @media (max-width: 860px) {
        font-size: 1em;
    }
`

const Introduction = styled.section`
    width: 40%;
    padding: 20px 30px;
    font-weight: 900;
    opacity: 0;
    font-size: 1.2rem;
    font-family: 'Freesentation-9Black';

    h2 {
        font-size: 2rem;
        color: #F08080;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 10px;
        border: none;
        font-size: 1.25rem;

        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }

    tr {
        border-bottom: 1px solid rgb(0, 0, 0, 0.15);
    }

    td {
        padding: 10px;
    }

    @media (max-width: 1400px) {
        width: 100%;
        padding: 20px;
    }

    @media (max-width: 500px) {
        padding: 5px 20px;
    }
`

export const AnimatedAbility = styled(Ability)`
    animation: ${(props) => props.$isVisible ? css`${fadeIn} 1s forwards` : 'none'};
    animation-delay: 0.3s;
`

export const Info = styled.div`
    margin-bottom: 50px;

    .simpleWords {
        margin: 30px 0;
    }

    p {
        margin: 5px 0;

        span {
            font-weight: 600;
            color: #000;
        }

        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
`

export const AnimatedIntroduction = styled(Introduction)`
    animation: ${(props) => props.$isVisible ? css`${slideInLeft} 1s forwards` : 'none'};
`

// Section3
export const Project = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    background-color: rgb(0, 0, 0, 0.6);

    @media (max-width: 860px) {
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: center;
    }
`

export const ProjectItemContainer = styled.div`
    background-color: none;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s;
    box-sizing: border-box;
    width: 100%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    &:hover .content {
        opacity: 1;
    }

    &:hover .button-container {
        opacity: 1;
    }

    &:hover img {
        filter: brightness(0.2);
    }

    @media (max-width: 1200px) {
        height: 300px;
    }

    @media (max-width: 860px) {
        height: auto;
    }
`

export const ProjectItemImage = styled.img`
    margin-right: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 860px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`

export const ProjectContent = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 15px;
    opacity: 0;
    transition: opacity 0.3s;
    color: #fff;
    
    ${ProjectItemContainer}:hover & {
        opacity: 1;
    }
    
    .role {
        font-size: 0.8rem;
    }

    .tag {
        font-size: 0.8rem;
    }

    p {
        margin: 5px 0 0;
    }

    @media (max-width: 860px) {
        margin-top: 20px;
        max-width: 400px;
    }
`

export const ProjectTitle = styled.h3`
    margin: 0;
`

export const ProjectLinkContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 5px;
    opacity: 0;
    color: #fff;

    ${ProjectItemContainer}:hover & {
        opacity: 1;
    }

    a {
        padding: 3px 7px;
        border: 1px solid #F08080;
        border-radius: 5px;
        text-decoration: none;
        color: #fff;
        font-weight: 500;
        font-size: 1.3rem;
        margin: 0.5rem;

        &:hover {
            background-color: #F08080;
            color: #fff;
        }

        @media (max-width: 860px) {
            font-size: 1rem;
        }
    }
`

// Section4
export const Contact = styled.div`
    max-width: 100vw;
    align-items: center;
    background-color: #fff;
    padding: 40px 50px;
    margin: 0 auto;
    font-family: 'Freesentation-9Black';
    
    @media (max-width: 1200px) {
        padding: 30px;
    }
`

export const ContactTitle = styled.h1`
    color: #F08080;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 10px 50px;

    @media (max-width: 1200px) {
        padding: 2px 0;
    }
`

export const LinksContainer = styled.div`
    margin-top: 20px;
    padding: 10px 50px;

    a {
        display: block;
        font-size: 16px;
        margin: 5px 0;
        color: #333;
        text-decoration: none;
        width: 10%;
        
        &:hover {
            text-decoration: underline;
            color: #F08080;
        }
    }

    @media (max-width: 1200px) {
        padding: 2px 0;
    }
`

// PreFooter(Only in mobile)
export const PreFooter = styled.div`
    position: relative; 
    width: 100vw;
    height: 500px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    @media (max-width: 860px) {
        height: 200px;
        background-size: cover;
        background-position: center;
        background-image: url(${night});
    }
`

// Footer
export const Footer = styled.div`
    max-width: 100vw;
    height: 30vh;
    background-color: #000;
    color: #d9c3c3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: relative;

    p {
        position: absolute;
        font-size: 14px;
        bottom: 0;
    }

    .socialLink {
        position: absolute;
        bottom: 20%;

        .snsIcon {
            margin: 10px 20px;

            svg {
                color: #fff;
            }

            &:hover svg {
                color: #F08080;
            }
        }
    }

    @media (max-width: 500px) {
        p {
        font-size: 10px;
        }
    } 
`

export const FooterCross = styled(Cross)`
    & .vertical {
        height: 80px;
        top: -40px;
        background-image: linear-gradient(#000, #c7b658, #000);
    }

    & .horizontal {
        width: 60px;
        background-image: linear-gradient(#000, #c7b658, #000);
    }
`

export const FooterCross2 = styled(Cross2)`
    & .vertical {
        height: 60px;
        top: -30px;
        background-image: linear-gradient(#000, #94a8a8, #000);
    }

    & .horizontal {
        width: 60px;
        background-image: linear-gradient(#000, #94a8a8, #000);
    }
`