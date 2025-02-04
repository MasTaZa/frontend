import React, { useState } from "react";
import "./TypingPractice.css";

const TypingPractice = () => {
    return (
        <div className="fullScreen">
            <div className="leftPanel">
                <h3>낱말연습</h3>
                <p>진행시간 : 00:00</p><br></br>
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
                    <input type="text" className="typingInput" />
                </div>
                <div className="NextTaza">
                    <p>public static void main{'{'}String args[]{'}'}{'{'}</p>
                    <p>int a = 1; int b = 2; int c = 3;</p>
                    <p>System.out.println(a + b + c);</p>
                </div>
                <div className="Keyboard">
                    <p className="progress"></p>
                    <div className="keyboard-row">
                        <p className="key">`</p>
                        <p className="ckey">1</p>
                        <p className="ckey">2</p>
                        <p className="ckey">3</p>
                        <p className="ckey">4</p>
                        <p className="ckey">5</p>
                        <p className="ckey">6</p>
                        <p className="ckey">7</p>
                        <p className="ckey">8</p>
                        <p className="ckey">9</p>
                        <p className="ckey">0</p>
                        <p className="key">-</p>
                        <p className="key">=</p>
                        <p className="backspace-key">Backspace</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="tab-key">Tab</p>
                        <p className="ckey">Q</p>
                        <p className="ckey">W</p>
                        <p className="ckey">E</p>
                        <p className="ckey">R</p>
                        <p className="ckey">T</p>
                        <p className="ckey">Y</p>
                        <p className="ckey">U</p>
                        <p className="ckey">I</p>
                        <p className="ckey">O</p>
                        <p className="ckey">P</p>
                        <p className="ckey">[</p>
                        <p className="ckey">]</p>
                        <p className="b-key">\</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="caps-key">CapsLock</p>
                        <p className="ckey">A</p>
                        <p className="ckey">S</p>
                        <p className="ckey">D</p>
                        <p className="ckey">F</p>
                        <p className="ckey">G</p>
                        <p className="ckey">H</p>
                        <p className="ckey">J</p>
                        <p className="ckey">K</p>
                        <p className="ckey">L</p>
                        <p className="ckey">;</p>
                        <p className="ckey">‘</p>
                        <p className="enter-key">Enter</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="shift-key">Shift</p>
                        <p className="ckey">Z</p>
                        <p className="ckey">X</p>
                        <p className="ckey">C</p>
                        <p className="ckey">V</p>
                        <p className="ckey">B</p>
                        <p className="ckey">N</p>
                        <p className="ckey">M</p>
                        <p className="ckey">,</p>
                        <p className="ckey">.</p>
                        <p className="ckey">/</p>
                        <p className="shift-key">Shift</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="key">Ctrl</p>
                        <p className="key">Fn</p>
                        <p className="key">Window</p>
                        <p className="key">Alt</p>
                        <p className="space-key">Space</p>
                        <p className="key">한/영</p>
                        <p className="hanja-key">한자</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypingPractice;