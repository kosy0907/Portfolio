import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Section1 from './component/Section1/Section1';
import Section2 from './component/Section2/Section2';
import Section3 from './component/Section3/Section3';
import Section4 from './component/Section4/Section4';
import Navbar from './component/Navbar/Navbar';
import Cursor from './component/CustomCursor/Cursor';
import Footer from './component/Footer/Footer';
import Dots from './component/Dots';

const DIVIDER_HEIGHT = 5;

function App() {
  const [scrollIndex, setScrollIndex] = useState(1);
  const [navState, setNavState] = useState(1);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    if (navState === 1) {
      setScrollIndex(1);
    } else if (navState === 2) {
      setScrollIndex(2);
    } else if (navState === 3) {
      setScrollIndex(3);
    } else if (navState === 4) {
      setScrollIndex(4);
    }
  }, [navState])

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const scrollPositionDown = window.scrollY;
      const scrollPositionUp = window.scrollY - 100;
      const pageHeight = window.innerHeight;

      // Scroll Down
      if (deltaY > 0) {
        if (scrollPositionDown >= 0 && scrollPositionDown < pageHeight) {
          window.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollPositionDown >= pageHeight && scrollPositionDown < pageHeight * 2) {
          window.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollPositionDown >= pageHeight && scrollPositionDown < pageHeight * 3) {
          window.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } // Scroll Up
      else {
        if (scrollPositionUp >= 0 && scrollPositionUp < pageHeight) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollPositionUp >= pageHeight && scrollPositionUp < pageHeight * 2) {
          window.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollPositionUp >= pageHeight && scrollPositionUp < pageHeight * 3) {
          window.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };

    document.addEventListener("wheel", wheelHandler);
    return () => {
      document.removeEventListener("wheel", wheelHandler);
    };

  }, []);

  return (
    <div className="App">
      <Cursor />
      <Navbar aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef}
        setNavState={setNavState} />
      {navState}
      <div className='section'>
        <Dots scrollIndex={scrollIndex} />
        <Section1 />
        <div className="divider" />
        <Section2 ref={aboutRef} />
        <div className="divider" />
        <Section3 ref={skillRef} />
        <div className="divider" />
        <Section4 ref={projectRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;