import React from 'react';
import './Cursor.css';

const Cursor = () => {
    const mainCursorRef = React.useRef(null);
    const subCursorRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;

            mainCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            subCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            subCursorRef.current.style.transition = `all 0.15s`;
        })
    }, [])

    return (
        <div>
            <div className='mainCursor' ref={mainCursorRef} />
            <div className='subCursor' ref={subCursorRef} />
        </div>
    );
}

export default Cursor;
