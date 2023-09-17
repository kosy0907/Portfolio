import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Section1 from './component/Section1/Section1';
import Section2 from './component/Section2/Section2';
import Section3 from './component/Section3/Section3';
import Navbar from './component/Navbar/Navbar';
import Cursor from './component/CustomCursor/Cursor';
import Footer from './component/Footer/Footer';
import Dots from './component/Dots/Dots';

function App() {
  const [scrollIndex, setScrollIndex] = useState(1);
  const [navState, setNavState] = useState(1);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const wheelHandler = (e) => {
      const { deltaY } = e;
      const scrollPositionDown = window.scrollY;
      const scrollPositionUp = window.scrollY - 100;
      const pageHeight = window.innerHeight;

      // Scroll Down
      if (deltaY > 0) {
        if (scrollPositionDown >= 0 && scrollPositionDown < pageHeight) {
          setScrollIndex(2);
        }
        else if (scrollPositionDown >= pageHeight && scrollPositionDown < pageHeight * 2) {
          setScrollIndex(3);
        }
      } // Scroll Up
      else {
        if (scrollPositionUp >= 0 && scrollPositionUp < pageHeight) {
          setScrollIndex(1);
        } else if (scrollPositionUp >= pageHeight && scrollPositionUp < pageHeight * 2) {
          setScrollIndex(2);
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
      <Navbar navState={navState} aboutRef={aboutRef} projectRef={projectRef} />
      <div className='section'>
        <Dots scrollIndex={scrollIndex} />
        <Section1 aboutRef={aboutRef} />
        <Section2 ref={aboutRef} />
        <Section3 ref={projectRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;