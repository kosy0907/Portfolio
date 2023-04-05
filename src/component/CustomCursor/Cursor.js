import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const mainCursorRef = useRef(null);
    const subCursorRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            const { clientX, clientY } = e

            mainCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            subCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            subCursorRef.current.style.transition = `all 0.15s`;
        }
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <div>
            <div className='mainCursor' ref={mainCursorRef} />
            <div className='subCursor' ref={subCursorRef} />
        </div>
    );
}

export default Cursor;
