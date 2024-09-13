import React from 'react';
import { Intro, MainContent, Title, Footer, Ellipse, Ellipse2, Ellipse3 } from '../StyledComponent/StyledComponent';

function Section1() {
    return (
        <Intro>
            <MainContent>
                <Title>KO SEUNG YEON</Title>
                <Ellipse />
                <Ellipse2 />
                <Ellipse3 />
            </MainContent>

            <Footer>
                <span>KOSY Made</span>
            </Footer>
        </Intro>
    )
}

export default Section1;
