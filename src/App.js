import React, { useRef } from 'react';
import './App.css';
import Section1 from './component/Section1/Section1';
import Section2 from './component/Section2/Section2';
import Section3 from './component/Section3/Section3';
import Section4 from './component/Section4/Section4';
import Navbar from './component/Navbar/Navbar';
import Cursor from './component/CustomCursor/Cursor';

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <div className="App">
      <Cursor />
      <Navbar aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef} />
      <div className='section'>
        <Section1 />
        <Section2 ref={aboutRef} />
        <Section3 ref={skillRef} />
        <Section4 ref={projectRef} />
      </div>
    </div>
  );
}

export default App;
