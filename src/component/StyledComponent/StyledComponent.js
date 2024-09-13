import styled, { keyframes } from "styled-components";

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
        color: #94a8a8;
        width: 40px;
        height: 40px;
        line-height: 0;
        border-radius: 50px;
        cursor: pointer;
    }

    .active {
        background-color: #94a8a8;
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
    background-color: rgba(0, 0, 0, 0.8);
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
                color: #fff; // 링크 색상
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color: rgb(3, 210, 224); // 호버 색상
                }
            }
        }
    }
    &.active {
        transform: translateY(0);
    }

    @media (max-width: 1080px) {
        ul {
            flex-direction: column; // 세로로 배치
            align-items: center; // 중앙 정렬
            padding: 10px 0; // 세로 메뉴의 패딩 조정
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
    font-size: 4rem;
    letter-spacing: 5px;
    margin: 0;
    color: #94a8a8;
`;

export const Ellipse = styled.div`
    width: 600px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%; // 화면의 중앙에 위치
    left: 50%; // 화면의 중앙에 위치
    transform: translate(-50%, -50%);
    animation: spin 10s ease-in-out infinite;
    
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
    width: 600px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin2 10s ease-in-out infinite;
    
    @keyframes spin2 {
        0% {
            transform: translate(-50%, -50%) rotate(-10deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(-10deg);
        }   
        100% {
            transform: translate(-50%, -50%) rotate(-10deg);
        }
    }
`

export const Ellipse3 = styled.div`
    width: 600px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    animation: spin3 10s ease-in-out infinite;
    
    @keyframes spin3 {
        0% {
            transform: translate(-50%, -50%) rotate(-40deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(-40deg);
        }   
        100% {
            transform: translate(-50%, -50%) rotate(-40deg);
        }
    }
`

export const Footer = styled.footer`
    padding-bottom: 20px;
    color: #94a8a8;
    font-size: 1rem;
`;

// Section2
