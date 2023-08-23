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

✅ Parallax Scroll

✅ Full Page Scroll

✅ Responsive web

## What I learned
1. useRef를 사용한 Custom Cursor
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
2. Parallax Scroll 적용 방법
    - 사용자가 페이지를 스크롤할 때마다 스크롤 위치에 따라 여러 개의 배경 이미지가 움직이는 효과를 구현한 코드입니다.
    - Scoll 이벤트가 발생할 때마다 스크롤 위치를 업데이트하고, 이를 기반으로 여러 개의 Pixel 배경 이미지의 backgroundPositionY 값을 계산하여 조정합니다.
    - **useState**: 현재 스크롤 위치를 저장합니다.
    - **useEffect**: scroll 이벤트를 등록합니다.  
    <br>
    
    ```
    function Section1(props) {
        const [position, setPosition] = useState(0);
        const onScroll = () => {
            setPosition(window.scrollY);
        }

        ...

        useEffect(() => {
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            }
        }, []);

        return (
            <div className='home2'>
                <div className='customCircle' />
                <div className='pixelContainer'>
                    <div className='intro bg1' style={{ backgroundPositionY: position / 8 }} />
                    <div className='intro bg2' style={{ backgroundPositionY: position }} />
                    <div className='intro bg3' style={{ backgroundPositionY: position / 2 }} />
                    <div className='intro bg4' style={{ backgroundPositionY: position / 2 }} />
                    <div className='intro bg5' style={{ backgroundPositionY: position / 2 }} />
                    <div className='intro bg6' style={{ backgroundPositionY: position / 10 }} />
                </div>
                <div className='homeContainer'>

                    ...
                
                </div>
            </div>
        );
    }
    ```
