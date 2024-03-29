import { forwardRef } from "react";

const Dot = ({ num, scrollIndex }) => {
    return (
        <div
            style={{
                width: 10,
                height: 10,
                border: "1px solid #0e8388",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "#03d2e0" : "transparent",
                transitionDuration: 1000,
                transition: "background-color 0.5s",
            }}
        ></div>
    );
};

const Dots = ({ scrollIndex }) => {
    return (
        <div style={{ position: "fixed", top: "50%", right: 100, zIndex: 20 }} className="dots">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 20,
                    height: 100
                }}
            >
                <Dot num={1} scrollIndex={scrollIndex} />
                <Dot num={2} scrollIndex={scrollIndex} />
                <Dot num={3} scrollIndex={scrollIndex} />
            </div>
        </div>
    );
};

export default forwardRef(Dots);