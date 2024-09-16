import React, { useRef } from 'react';
import Navbar from './component/Navbar/Navbar';
import Section1 from './component/Section1/Section1';
import Section2 from './component/Section2/Section2';
import Section3 from './component/Section3/Section3';
import Section4 from './component/Section4/Section4';
import Paint from './component/Paint/Paint';
import FooterSection from './component/FooterSection/FooterSection';
import Cursor from './component/CustomCursor/Cursor';
import { StackSection } from './component/StyledComponent/StyledComponent';

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const navbarMenu = [
    { name: 'Home', link: '#home', ref: section1Ref },
    { name: 'About', link: '#about', ref: section2Ref },
    { name: 'Project', link: '#project', ref: section3Ref },
    { name: 'Contact', link: '#contact', ref: section4Ref }
  ];

  return (
    <>
      <Cursor />
      <Navbar navbarMenu={navbarMenu} />
      <StackSection>
        <Section1 ref={section1Ref} section2Ref={section2Ref} />
      </StackSection>
      <StackSection>
        <Section2 ref={section2Ref} />
        <Section3 ref={section3Ref} />
        <Section4 ref={section4Ref} />
        <Paint />
        <FooterSection />
      </StackSection>
    </>
  );
}

export default App;
