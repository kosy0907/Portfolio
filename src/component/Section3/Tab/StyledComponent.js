import Styled from 'styled-components';

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