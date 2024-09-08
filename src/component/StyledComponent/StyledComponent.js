import Styled from "styled-components";
import homeBg from '../../images/background/sec1_sky.jpg';
import aboutBg from '../../images/background/sec2_stars.png'

// Navbar
// mobile-web navbar Button
export const NavbarToggle = Styled.div`
    .navToggle {
        position: fixed;
        left: 15px;
        top: 15px;
        z-index: 9998;
        border: 0;
        font-size: 24px;
        transition: all 0.4s;
        outline: none !important;
        color: rgb(3, 210, 224);
        width: 40px;
        height: 40px;
        line-height: 0;
        border-radius: 50px;
        cursor: pointer;
    }

    .active {
        background-color: rgb(3, 210, 224);
        color: #fff !important;
    }

    @media (min-width: 1380px) {
        display: none!important;
    }
`
// side bar
export const Header = Styled.div`
    font-family: 'Rajdhani', sans-serif;

    h1 {
        font-size: 24px;
        margin: 0;
        padding: 0;
        font-weight: 600;
        text-align-last: center;
    }

    .icon {
        width: 24px;
        color: #6f7180;
        paddingRight: 8px;
        fontSize: 24px;

        &:hover {
            color: rgb(3, 210, 224);
        }
    }

    .active {
        left: 0 ;
    }
`

export const HeaderContainer = Styled.div`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;

    @media (max-width: 1320px) {
        left: -300px;
    }
`

export const Profile = Styled.div`
    text-align: center;
    padding: 5rem 0 0;

    .socialLink {
        text-align: center;
        margin: 2rem 3rem;
        display: flex;
        justify-content: space-evenly;

        a {
            font-size: 18px;
            display: inline-block;
            background: #212431;
            color: #fff;
            line-height: 1;
            padding: 8px 0;
            margin-right: 4px;
            border-radius: 50%;
            text-align: center;
            width: 36px;
            height: 36px;
            transition: 0.3s;

            &:hover {
                background-color: rgb(3, 210, 224);

                svg {
                    color: white;
                }
            }
        }
    }
`

export const NavbarContainer = Styled.nav`
    padding: 30px 0 0 0;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    
        li {
            position: relative;
            white-space: nowrap;
            opacity:0.8;
            filter:blur(0.4px);

            &:hover {
                opacity:1;
                filter:blur(0);
                font-weight: 600;
                color: #fff;

                a {
                    svg {
                        color: rgb(3, 210, 224);
                    }

                    span {
                        &:hover {
                            color: #fff;
                        }
                    }
                }
            }
        
            a {
                display: flex;
                align-items: center;
                color: #a8a9b4;
                padding: 12px 15px;
                margin-bottom: 8px;
                transition: 0.3s;
                font-size: 18px;
                text-transform: uppercase;
            }
        }
    }
`

// Section1
export const Home = Styled.section`
    color: white;
    font-family: 'Pretendard-Regular', 'sans-serif';
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    background-image: url(${homeBg});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &::before {
        content: "";
        background: rgba(5, 13, 24, 0.5);
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .homeContainer {
        position: relative;
        z-index: 2;
        min-width: 300px;
    
        h1 {
            margin: 0 0 10px 0;
            font-size: 64px;
            font-weight: 700;
            line-height: 56px;
        
            @media (max-width: 768px) {
                font-size: 28px;
                line-height: 36px;
            }
        }
    
        p {
            margin-bottom: 50px;
            font-size: 26px;
        }
    
        .toAboutBtn {
            padding: 0.5rem 1rem; 
            font-weight: bold; 
            cursor: pointer; 
            transition: all 0.5s ease 0s; 
            position: relative; 
            display: inline-block; 
            outline: none; 
            border-radius: 10px; 
            z-index: 0; 
            overflow: hidden; 
            border: 2px solid #03d2e0; 
            color: #03d2e0;
        
            &::after {
                content: "";
                position: absolute;
                z-index: -1;
                transition: all 0.3s ease 0s;
                left: 0px;
                top: 0px;
                width: 0px;
                height: 100%;
                background: #03d2e0; 
            }
        
            &:hover {
                color: rgb(255, 255, 255);
        
                &::after {
                    width: 100%;
                }
            }
        }
        }
    }
`

// Section2
export const About = Styled.section`
    background-image: url(${aboutBg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
      
    .aboutBanner {
        padding-top: 6rem 0;
        height: 70%;
        color: #fff;
        font-family: 'Pretendard-Regular', 'sans-serif';
        display: flex;
        align-items: flex-start;

        #aboutContainer {
            display: flex;
            border-radius: 20px;
            background-color: rgb(45, 31, 118, 0.4);
            justify-content: center;
            height: 70%;
            width: 50%;

            .bannerComment, .bannerContent {
                display: flex;
                justify-content: center;
                flex-direction: column;
                width: 50%;
                z-index: 999;
            }

            .bannerComment {
                align-items: center;

                p {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin: 0 2rem 0;
                }
            }

            .bannerContent {
                .row {
                    display: flex;
                    p {
                        color: #03d2e0;
                        margin: 0;
                    }
                    .link {
                        cursor: pointer;
                        font-weight: 900;

                        &:hover {
                            color: #03d2e0;
                        }
                    }
                }
            }
        }
    }

    .aboutSkill {
        background-color: #767AC5;
        color: #fff;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
        height: 10%;

        p {
            margin: 1rem 0; 
        }
    }
      
    @media all and (min-width: 769px) and (max-width: 1024px) {
        .aboutBanner {
          
          #aboutContainer {
            padding: 3rem 0.5rem;
            width: 80% !important;

            .bannerComment {
                padding-bottom: 1rem;
    
                p {
                    margin: 0 0.5rem;  
                }
              }
    
              .bannerContent {
                font-size: 0.8rem;
    
                .row {
                    width: 100%;
                    
                    ul {
                        margin: 0; 
                    }
                }
          }
          
          }
        }

        .aboutSkill {
          font-size: 1rem;
          p {
            margin: 0.5rem 0;
          }
        }
    }

    @media screen and (max-width: 767px) {
        #aboutContainer {
            width: 90% !important;

            .bannerContent {
                font-size: 0.6rem;
            }
        }
    }
`

// Section3
export const Project = Styled.section`
    background-color: #F5F5F5;
    font-family: 'Rajdhani', sans-serif;
    min-height: 100vh;

    @media screen and (max-width: 767px) {
        .project {
          padding-top: 3rem;
        }
    }

    .wrap {
        text-align: center;
        padding-top: 6rem;
    }
`

export const TabMenu = Styled.ul`
    width: 300px;
    padding: 0;
    margin: 0 auto 35px auto;
    list-style: none;
    text-align: center;
    background: #fff;
    border: 2px solid #0abdc9; 
    border-radius: 50px;
    padding: 2px 15px;
    text-transform: uppercase;

    & li {
        flex: 1;
        transition: all 0.3s ease-in-out;
        display: inline-block;
        padding: 10px 15px 8px 15px;
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #03d2e0;

        &:hover {
        background-color: #0abdc9;
        color: #fff;
        }
    }

    .tab {
        width:100% auto;
        padding: 15px 10px;
        border-radius: 10px
    }

    .focused {
         background-color: #0abdc9;
         color: #fff;
    }
`;

export const ProjectList = Styled.div`
    margin-top: -0.75rem;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: -0.75rem auto;
    padding-bottom: 0.75rem;

    .projectItem {
        display: flex;
        flex-direction: column;
        padding: 0.75rem;
        width: 100%;

        .itemContainer {
            overflow: hidden; 
            flex: 1 1 0%; 
            border-radius: 0.5rem;
            background-color: rgb(255,255,255);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

            .itemText {
                padding: 0.75rem;

                h3 {
                    font-weight: 600;
                }
                .itemDesc {
                    font-size: 0.875rem;
                    line-height: 1.25rem;

                    .itemLink {
                        a {
                            text-decoration: none;
                            color: #000;
                            font-weight: 900;
                            font-size: 1rem;
                            margin: 0.75rem;

                            &:hover {
                                color: rgb(3, 210, 224);
                            }
                        }
                    }
                }
            }
        }

        @media (min-width: 640px) { 
            width: 50%; 
           }

        img {
            width: 200px;
        }
    }

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`