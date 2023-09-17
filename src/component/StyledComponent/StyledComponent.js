import Styled, { keyframes } from "styled-components";
import homeBg from '../../images/background/sec1_sky.jpg';

// Navbar
export const Header = Styled.header`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;
`

export const ProfileImg = Styled.img`
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid #2c2f3f;
    border-radius: 50% !important;
    max-width: 100%;
    height: auto;
`

export const Profileh1 = Styled.h1`
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    text-align-last: center;
`

export const SocialLink = Styled.div`
    text-align: center;
    margin: 2rem 3rem;
    display: flex;
    justify-content: space-evenly;
`

export const SocialLinka = Styled.a`
    font-size: 18px;
    display: inline-block;
    background: #212431;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
`

export const Navbar = Styled.nav`
    padding: 30px 0 0 0;
`

export const NavbarUl = Styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

export const NavbarLi = Styled.li`
    position: relative;
    white-space: nowrap;
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
`

export const starMove = keyframes`
    0% {
        transform: translateY(-2000px);
    }
    100% {
        transform: translateY(0px);
    }
`

export const Star = Styled.div`
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
`

export const HomeContainer = Styled.div`
    position: relative;
    z-index: 2;
    min-width: 300px;
`

export const Homeh1 = Styled.h1`
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;

    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 36px;
    }
`

export const Homep = Styled.p`
    margin-bottom: 50px;
    font-size: 26px;
`

export const ToAboutBtn = Styled.div`
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
`

export const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-2rem);}
    60% {transform: translateY(-1rem);}
`

// Section3
export const TabMenu = Styled.ul`
    width: 200px;
    padding: 0;
    margin: 0 auto 35px auto;
    list-style: none;
    text-align: center;
    background: #fff;
    border-radius: 50px;
    padding: 2px 15px;
    text-transform: uppercase;

    & li {
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
    display: flex;
    justify-content: center;
`

export const ProjectItem = Styled.div`
    border: 1px solid gray;
`

export const MockupImg = Styled.img`
    width: 300px;
`