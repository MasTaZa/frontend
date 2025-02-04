import React, { useState, useEffect } from "react";
import "./TypingPractice.css";

const TypingPractice = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [typedValue, setTypedValue] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time = 0) => { 
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const seconds = String(time % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    // Handle input change and update the typed value
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypedValue(event.target.value); // 입력값 추적
    };

    // Check if a key is active based on the typed value
    const isKeyActive = (key: string) => {
        return typedValue.includes(key); // 입력값에 해당 키가 포함되어 있는지 확인
    };

    return (
        <div className="fullScreen">
            <div className="leftPanel">
                <h3>낱말연습</h3>
                <p>진행시간 : {formatTime(elapsedTime)}</p><br></br>
                <h4>전체</h4>
                <p>평균타수 : 100</p>
                <p>정확도 : 100.00%</p><br></br>
                <h4>현재</h4>
                <p>최고타수 : 300</p>
                <p>평균타수 : 200</p>
                <p>정확도 : 40.00%</p><br></br>
                <img src="/img/mirim.png" alt="Mirim Logo"></img>
            </div>
            <div className="VLine"></div>
            <div className="taza">
                <div className="Ex">
                    <p>public class Main{'{'}</p>
                    <p className="HLine"></p>
                    <input
                        type="text"
                        className="typingInput"
                        value={typedValue}
                        onChange={handleInputChange} // Handle input change
                    />
                </div>
                <div className="NextTaza">
                    <p>public static void main{'{'}String args[]{'}'}{'{'}</p>
                    <p>int a = 1; int b = 2; int c = 3;</p>
                    <p>System.out.println(a + b + c);</p>
                </div>
                <div className="Keyboard">
                    <p className="progress"></p>
                    <div className="keyboard-row">
                        <p className={`key ${isKeyActive("`") ? "active" : ""}`}>`</p>
                        <p className={`ckey ${isKeyActive("1") ? "active" : ""}`}>1</p>
                        <p className={`ckey ${isKeyActive("2") ? "active" : ""}`}>2</p>
                        <p className={`ckey ${isKeyActive("3") ? "active" : ""}`}>3</p>
                        <p className={`ckey ${isKeyActive("4") ? "active" : ""}`}>4</p>
                        <p className={`ckey ${isKeyActive("5") ? "active" : ""}`}>5</p>
                        <p className={`ckey ${isKeyActive("6") ? "active" : ""}`}>6</p>
                        <p className={`ckey ${isKeyActive("7") ? "active" : ""}`}>7</p>
                        <p className={`ckey ${isKeyActive("8") ? "active" : ""}`}>8</p>
                        <p className={`ckey ${isKeyActive("9") ? "active" : ""}`}>9</p>
                        <p className={`ckey ${isKeyActive("0") ? "active" : ""}`}>0</p>
                        <p className={`key ${isKeyActive("-") ? "active" : ""}`}>-</p>
                        <p className={`key ${isKeyActive("=") ? "active" : ""}`}>=</p>
                        <p className={`backspace-key ${isKeyActive("Backspace") ? "active" : ""}`}>Backspace</p>
                    </div>
                    <div className="keyboard-row">
                        <p className={`tab-key ${isKeyActive("Tab") ? "active" : ""}`}>Tab</p>
                        <p className={`ckey ${isKeyActive("Q") ? "active" : ""}`}>Q</p>
                        <p className={`ckey ${isKeyActive("W") ? "active" : ""}`}>W</p>
                        <p className={`ckey ${isKeyActive("E") ? "active" : ""}`}>E</p>
                        <p className={`ckey ${isKeyActive("R") ? "active" : ""}`}>R</p>
                        <p className={`ckey ${isKeyActive("T") ? "active" : ""}`}>T</p>
                        <p className={`ckey ${isKeyActive("Y") ? "active" : ""}`}>Y</p>
                        <p className={`ckey ${isKeyActive("U") ? "active" : ""}`}>U</p>
                        <p className={`ckey ${isKeyActive("I") ? "active" : ""}`}>I</p>
                        <p className={`ckey ${isKeyActive("O") ? "active" : ""}`}>O</p>
                        <p className={`ckey ${isKeyActive("P") ? "active" : ""}`}>P</p>
                        <p className={`ckey ${isKeyActive("[") ? "active" : ""}`}>[</p>
                        <p className={`ckey ${isKeyActive("]") ? "active" : ""}`}>]</p>
                        <p className={`b-key ${isKeyActive("\\") ? "active" : ""}`}>\\</p>
                    </div>
                    <div className="keyboard-row">
                        <p className={`caps-key ${isKeyActive("CapsLock") ? "active" : ""}`}>CapsLock</p>
                        <p className={`ckey ${isKeyActive("A") ? "active" : ""}`}>A</p>
                        <p className={`ckey ${isKeyActive("S") ? "active" : ""}`}>S</p>
                        <p className={`ckey ${isKeyActive("D") ? "active" : ""}`}>D</p>
                        <p className={`ckey ${isKeyActive("F") ? "active" : ""}`}>F</p>
                        <p className={`ckey ${isKeyActive("G") ? "active" : ""}`}>G</p>
                        <p className={`ckey ${isKeyActive("H") ? "active" : ""}`}>H</p>
                        <p className={`ckey ${isKeyActive("J") ? "active" : ""}`}>J</p>
                        <p className={`ckey ${isKeyActive("K") ? "active" : ""}`}>K</p>
                        <p className={`ckey ${isKeyActive("L") ? "active" : ""}`}>L</p>
                        <p className={`ckey ${isKeyActive(";") ? "active" : ""}`}>;</p>
                        <p className={`ckey ${isKeyActive("‘") ? "active" : ""}`}>‘</p>
                        <p className={`enter-key ${isKeyActive("Enter") ? "active" : ""}`}>Enter</p>
                    </div>
                    <div className="keyboard-row">
                        <p className={`shift-key ${isKeyActive("Shift") ? "active" : ""}`}>Shift</p>
                        <p className={`ckey ${isKeyActive("Z") ? "active" : ""}`}>Z</p>
                        <p className={`ckey ${isKeyActive("X") ? "active" : ""}`}>X</p>
                        <p className={`ckey ${isKeyActive("C") ? "active" : ""}`}>C</p>
                        <p className={`ckey ${isKeyActive("V") ? "active" : ""}`}>V</p>
                        <p className={`ckey ${isKeyActive("B") ? "active" : ""}`}>B</p>
                        <p className={`ckey ${isKeyActive("N") ? "active" : ""}`}>N</p>
                        <p className={`ckey ${isKeyActive("M") ? "active" : ""}`}>M</p>
                        <p className={`ckey ${isKeyActive(",") ? "active" : ""}`}>,</p>
                        <p className={`ckey ${isKeyActive(".") ? "active" : ""}`}>.</p>
                        <p className={`ckey ${isKeyActive("/") ? "active" : ""}`}>/</p>
                        <p className={`shift-key ${isKeyActive("Shift") ? "active" : ""}`}>Shift</p>
                    </div>
                    <div className="keyboard-row">
                        <p className={`key ${isKeyActive("Ctrl") ? "active" : ""}`}>Ctrl</p>
                        <p className={`key ${isKeyActive("Fn") ? "active" : ""}`}>Fn</p>
                        <p className={`key ${isKeyActive("Window") ? "active" : ""}`}>Window</p>
                        <p className={`key ${isKeyActive("Alt") ? "active" : ""}`}>Alt</p>
                        <p className={`space-key ${isKeyActive("Space") ? "active" : ""}`}>Space</p>
                        <p className={`key ${isKeyActive("한/영") ? "active" : ""}`}>한/영</p>
                        <p className={`hanja-key ${isKeyActive("한자") ? "active" : ""}`}>한자</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypingPractice;
