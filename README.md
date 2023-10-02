# 포트폴리오 웹사이트
링크: [Portfolio](https://kosy0907.github.io/Portfolio/)
- Home
- About
- Project

## 📑 역할
- Design
- FrontEnd
- Deploy

## 💬 프로젝트 소개
프로젝트와 소개를 넣은 개인 포트폴리오 웹 사이트 입니다.

## 🕐 개발 기간
2023.03.31 ~ 2023.04.10

## 💻 개발 환경
- React.js

## ✔ 기능
✅ Custom Cursor

✅ Responsive web

## What I learned
### useRef를 사용한 Custom Cursor
    - 커서를 커스텀화하여 구현한 코드입니다. 
    - **useRef**: mainCursorRef와 subCursorRef 초기화
    - **useEffect**: mouseMove event가 발생할 때마다 mainCursorRef와 subCursorRef의 위치를 변경합니다.
    - **onMouseMove**: 이벤트 객체를 받아서 Cursor의 위치를 파악하고, mainCursorRef와 subCursorRef의 'transform' 속성을 변경합니다.   
    <br>
    ```
    function Cursor() {
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
    ```
    <br>