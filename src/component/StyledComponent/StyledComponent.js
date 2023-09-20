import Styled, { keyframes } from "styled-components";
import homeBg from '../../images/background/sec1_sky.jpg';
import aboutBg from '../../images/background/stars.png'

// Animation
export const starMove = keyframes`
    0% {
        transform: translateY(-2000px);
    }
    100% {
        transform: translateY(0px);
    }
`

// Navbar
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

    img {
        margin: 15px auto;
        display: block;
        width: 120px;
        border: 8px solid #2c2f3f;
        border-radius: 50% !important;
        max-width: 100%;
        height: auto;
    }

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
        background: rgba(5, 13, 24, 0.3);
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
    
        .star {
                animation: ${starMove} 100s linear infinite;
                width: 2px;
                height: 2px;
                background: transparent;
                box-shadow: 278px 339px #FFF , 1040px 1984px #FFF , 1936px 633px #FFF , 1300px 420px #FFF , 745px 725px #FFF , 71px 1023px #FFF , 714px 1940px #FFF , 426px 918px #FFF , 1609px 1690px #FFF , 569px 874px #FFF , 816px 915px #FFF , 1330px 376px #FFF , 647px 637px #FFF , 1456px 450px #FFF , 1680px 1247px #FFF , 1523px 1021px #FFF , 294px 1158px #FFF , 1053px 537px #FFF , 320px 1114px #FFF , 390px 1505px #FFF , 832px 1132px #FFF , 1503px 351px #FFF , 857px 1455px #FFF , 1791px 1766px #FFF , 602px 362px #FFF , 1605px 1077px #FFF , 96px 759px #FFF , 1572px 1051px #FFF , 60px 993px #FFF , 1447px 550px #FFF , 152px 176px #FFF , 1724px 178px #FFF , 244px 183px #FFF , 1614px 1438px #FFF , 819px 1843px #FFF , 770px 1055px #FFF , 1915px 399px #FFF , 1458px 192px #FFF , 1851px 1688px #FFF , 1925px 1704px #FFF , 
                            454px 696px #FFF , 385px 575px #FFF , 1040px 1747px #FFF , 1121px 1039px #FFF , 990px 1019px #FFF , 792px 586px #FFF , 214px 893px #FFF , 837px 812px #FFF , 285px 418px #FFF , 619px 77px #FFF , 564px 1939px #FFF , 1262px 1567px #FFF , 64px 753px #FFF , 882px 90px #FFF , 1513px 1544px #FFF , 122px 1567px #FFF , 500px 913px #FFF , 380px 1414px #FFF , 1574px 1647px #FFF , 911px 503px #FFF , 882px 1484px #FFF , 851px 1521px #FFF , 239px 1368px #FFF , 19px 1908px #FFF , 690px 1953px #FFF , 749px 804px #FFF , 1183px 683px #FFF , 34px 1182px #FFF , 1855px 566px #FFF , 1593px 749px #FFF , 1456px 962px #FFF , 1638px 1762px #FFF , 517px 1204px #FFF , 1604px 178px #FFF , 1352px 1101px #FFF , 1819px 542px #FFF , 726px 1503px #FFF , 1555px 1815px #FFF , 4px 89px #FFF , 1041px 1833px #FFF , 92px 1422px #FFF , 541px 346px #FFF , 1772px 1197px #FFF , 391px 1117px #FFF , 
                            286px 785px #FFF , 1285px 1398px #FFF , 1737px 1658px #FFF , 1368px 853px #FFF , 763px 1876px #FFF , 1435px 1690px #FFF , 1607px 165px #FFF , 1430px 678px #FFF , 911px 571px #FFF , 787px 217px #FFF , 1374px 641px #FFF , 1146px 1974px #FFF , 825px 1827px #FFF , 135px 1323px #FFF , 779px 996px #FFF , 1827px 213px #FFF , 491px 1782px #FFF , 1077px 656px #FFF , 934px 394px #FFF , 1702px 472px #FFF , 833px 146px #FFF , 204px 1826px #FFF , 748px 1630px #FFF , 880px 50px #FFF , 114px 558px #FFF , 1821px 6px #FFF , 1160px 1273px #FFF , 1159px 287px #FFF , 1480px 1391px #FFF , 1445px 551px #FFF , 622px 555px #FFF , 728px 1014px #FFF , 626px 189px #FFF , 951px 1407px #FFF , 1694px 750px #FFF , 301px 1358px #FFF , 660px 206px #FFF , 997px 1898px #FFF , 132px 555px #FFF , 448px 1338px #FFF , 1808px 382px #FFF , 129px 19px #FFF , 188px 118px #FFF , 1468px 437px #FFF , 460px 754px #FFF , 1807px 557px #FFF , 1399px 1508px #FFF , 1071px 1279px #FFF , 1930px 521px #FFF , 910px 1913px #FFF , 963px 1677px #FFF , 844px 1652px #FFF , 1228px 686px #FFF , 264px 722px #FFF , 1113px 1165px #FFF , 1264px 769px #FFF , 566px 1196px #FFF , 1037px 493px #FFF , 373px 1949px #FFF , 268px 1876px #FFF , 700px 1321px #FFF , 935px 1602px #FFF , 1747px 1988px #FFF , 1481px 1834px #FFF , 658px 1712px #FFF , 1025px 866px #FFF , 1080px 667px #FFF , 1200px 1433px #FFF , 99px 963px #FFF , 91px 662px #FFF , 854px 234px #FFF , 30px 1255px #FFF , 1110px 1447px #FFF , 1807px 1159px #FFF , 987px 1379px #FFF , 1250px 82px #FFF , 1276px 1653px #FFF , 963px 458px #FFF , 1192px 160px #FFF , 954px 43px #FFF , 1524px 102px #FFF , 1127px 1019px #FFF , 759px 1687px #FFF , 122px 1868px #FFF , 433px 6px #FFF , 1352px 1786px #FFF , 625px 417px #FFF , 1360px 1898px #FFF , 2px 499px #FFF , 429px 871px #FFF , 119px 1552px #FFF , 1626px 1314px #FFF , 1678px 610px #FFF , 97px 1850px #FFF , 330px 1656px #FFF , 1326px 1667px #FFF , 843px 1351px #FFF , 1724px 1708px #FFF , 375px 1618px #FFF , 1699px 1650px #FFF , 1491px 1521px #FFF , 1293px 1003px #FFF , 1987px 358px #FFF , 49px 1702px #FFF , 242px 4px #FFF , 479px 348px #FFF , 1022px 1176px #FFF , 804px 954px #FFF , 1039px 490px #FFF , 1866px 635px #FFF , 492px 1037px #FFF , 53px 145px #FFF , 1979px 1907px #FFF , 627px 259px #FFF , 1184px 1601px #FFF , 1673px 984px #FFF;
            
                &::after {
                    content: " ";
                    position: absolute;
                    top: 2000px;
                    width: 2px;
                    height: 2px;
                    background: transparent;
                    box-shadow: 278px 339px #FFF , 1040px 1984px #FFF , 1936px 633px #FFF , 1300px 420px #FFF , 745px 725px #FFF , 71px 1023px #FFF , 714px 1940px #FFF , 426px 918px #FFF , 1609px 1690px #FFF , 
                                569px 874px #FFF , 816px 915px #FFF , 1330px 376px #FFF , 647px 637px #FFF , 1456px 450px #FFF , 1680px 1247px #FFF , 1523px 1021px #FFF , 294px 1158px #FFF , 1053px 537px #FFF , 320px 1114px #FFF , 390px 1505px #FFF , 832px 1132px #FFF , 1503px 351px #FFF , 857px 1455px #FFF , 1791px 1766px #FFF , 602px 362px #FFF , 1605px 1077px #FFF , 96px 759px #FFF , 1572px 1051px #FFF , 60px 993px #FFF , 1447px 550px #FFF , 152px 176px #FFF , 1724px 178px #FFF , 244px 183px #FFF , 1614px 1438px #FFF , 819px 1843px #FFF , 770px 1055px #FFF , 1915px 399px #FFF , 1458px 192px #FFF , 1851px 1688px #FFF , 1925px 1704px #FFF , 454px 696px #FFF , 385px 575px #FFF , 1040px 1747px #FFF , 1121px 1039px #FFF , 990px 1019px #FFF , 792px 586px #FFF , 214px 893px #FFF , 837px 812px #FFF , 285px 418px #FFF , 619px 77px #FFF , 564px 1939px #FFF , 1262px 1567px #FFF , 64px 753px #FFF , 882px 90px #FFF , 1513px 1544px #FFF , 122px 1567px #FFF , 500px 913px #FFF , 380px 1414px #FFF , 1574px 1647px #FFF , 911px 503px #FFF , 
                                882px 1484px #FFF , 851px 1521px #FFF , 239px 1368px #FFF , 19px 1908px #FFF , 690px 1953px #FFF , 749px 804px #FFF , 1183px 683px #FFF , 34px 1182px #FFF , 1855px 566px #FFF , 1593px 749px #FFF , 1456px 962px #FFF , 1638px 1762px #FFF , 517px 1204px #FFF , 1604px 178px #FFF , 1352px 1101px #FFF , 1819px 542px #FFF , 726px 1503px #FFF , 1555px 1815px #FFF , 4px 89px #FFF , 1041px 1833px #FFF , 92px 1422px #FFF , 541px 346px #FFF , 1772px 1197px #FFF , 391px 1117px #FFF , 286px 785px #FFF , 1285px 1398px #FFF , 1737px 1658px #FFF , 1368px 853px #FFF , 763px 1876px #FFF , 1435px 1690px #FFF , 1607px 165px #FFF , 1430px 678px #FFF , 911px 571px #FFF , 787px 217px #FFF , 1374px 641px #FFF , 1146px 1974px #FFF , 825px 1827px #FFF , 135px 1323px #FFF , 779px 996px #FFF , 1827px 213px #FFF , 491px 1782px #FFF , 1077px 656px #FFF , 934px 394px #FFF , 1702px 472px #FFF , 833px 146px #FFF , 204px 1826px #FFF , 748px 1630px #FFF , 880px 50px #FFF , 114px 558px #FFF , 1821px 6px #FFF , 1160px 1273px #FFF , 
                                1159px 287px #FFF , 1480px 1391px #FFF , 1445px 551px #FFF , 622px 555px #FFF , 728px 1014px #FFF , 626px 189px #FFF , 951px 1407px #FFF , 1694px 750px #FFF , 301px 1358px #FFF , 660px 206px #FFF , 997px 1898px #FFF , 132px 555px #FFF , 448px 1338px #FFF , 1808px 382px #FFF , 129px 19px #FFF , 188px 118px #FFF , 1468px 437px #FFF , 460px 754px #FFF , 1807px 557px #FFF , 1399px 1508px #FFF , 1071px 1279px #FFF , 1930px 521px #FFF , 910px 1913px #FFF , 963px 1677px #FFF , 844px 1652px #FFF , 1228px 686px #FFF , 264px 722px #FFF , 1113px 1165px #FFF , 1264px 769px #FFF , 566px 1196px #FFF , 1037px 493px #FFF , 373px 1949px #FFF , 268px 1876px #FFF , 700px 1321px #FFF , 935px 1602px #FFF , 1747px 1988px #FFF , 1481px 1834px #FFF , 658px 1712px #FFF , 1025px 866px #FFF , 1080px 667px #FFF , 1200px 1433px #FFF , 99px 963px #FFF , 91px 662px #FFF , 854px 234px #FFF , 30px 1255px #FFF , 1110px 1447px #FFF , 1807px 1159px #FFF , 987px 1379px #FFF , 1250px 82px #FFF , 1276px 1653px #FFF , 963px 458px #FFF , 1192px 160px #FFF , 954px 43px #FFF , 1524px 102px #FFF , 1127px 1019px #FFF , 759px 1687px #FFF , 122px 1868px #FFF , 433px 6px #FFF , 1352px 1786px #FFF , 625px 417px #FFF , 1360px 1898px #FFF , 2px 499px #FFF , 429px 871px #FFF , 119px 1552px #FFF , 1626px 1314px #FFF , 1678px 610px #FFF , 97px 1850px #FFF , 330px 1656px #FFF , 1326px 1667px #FFF , 843px 1351px #FFF , 1724px 1708px #FFF , 375px 1618px #FFF , 1699px 1650px #FFF , 1491px 1521px #FFF , 1293px 1003px #FFF , 1987px 358px #FFF , 49px 1702px #FFF , 242px 4px #FFF , 479px 348px #FFF , 1022px 1176px #FFF , 804px 954px #FFF , 1039px 490px #FFF , 1866px 635px #FFF , 492px 1037px #FFF , 53px 145px #FFF , 1979px 1907px #FFF , 627px 259px #FFF , 1184px 1601px #FFF , 1673px 984px #FFF;
                }
        }
    }
`

// Section2
export const About = Styled.div`
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
      
    .fadeIn {
        animation-name: fadeIn;
        animation-duration: 1s;
    }
      
    @media screen and (max-width: 1024px) {
        .aboutBanner {
          font-size: 0.8rem;
          
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
                font-size: 0.6rem;
    
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
`

// Section3
export const Project = Styled.div`
    background-color: #e7e7e7;
    font-family: 'Rajdhani', sans-serif;
    min-height: 100vh;

    @media screen and (max-width: 767px) {
        .project {
          padding-top: 3rem;
        }
    }

    .fadeIn {
        animation-name: fadeIn;
        animation-duration: 1s;
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
    border-radius: 50px;
    padding: 2px 15px;
    text-transform: uppercase;
    display: flex;

    & li {
        flex: 1;
        transition: all 0.3s ease-in-out;
        display: inline-block;
        padding: 10px 15px 8px 15px;
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #272829;

        &:hover {
            color: #149ddd;
        }
    }

    .tab {
        width:100% auto;
        padding: 15px 10px;
    }

    .focused {
         background-color: rgb(209, 209, 209);
         color: #149ddd;
    }
`;

export const ProjectList = Styled.div`
    margin-top: -0.75rem;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: -0.75rem auto;

    .projectItem {
        display: flex;
        flex-direction: column;
        padding: 0.75rem;
        width: 100%;

        .itemContainer {
            overflow: hidden; 
            flex: 1 1 0%; 
            border-radius: 0.5rem;
            background-color: rgb(255,255,255, 0.3);
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
                            font-size: 1.25rem;
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