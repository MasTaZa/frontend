import React from "react";
import "./TypingPractice2.css";

const TypingPractice1 = () => {
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
                    <p>public class Main{'{'}</p> {/* "{" 를 쓰려면 이렇게 해야된다는 사실....... 귀한자식이구나 너 */}
                    <p className="HLine"></p>
                    <p>public class Ms</p>
                </div>
                <div className="NextTaza">
                    <p>pubic static void main{'{'}String args[]{'}'}{'{'}</p>
                    <p>int a = 1; int b = 2; int c = 3;</p>
                    <p>System.out.println(a + b + c);</p>
                </div>
                <div className="Keyboard">
                    <br></br>
                    <p className="progress"></p>
                    <div className="keyboard-row">
                        <p className="key">`</p>
                        <p className="key">1</p>
                        <p className="key">2</p>
                        <p className="key">3</p>
                        <p className="key">4</p>
                        <p className="key">5</p>
                        <p className="key">6</p>
                        <p className="key">7</p>
                        <p className="key">8</p>
                        <p className="key">9</p>
                        <p className="key">0</p>
                        <p className="key">-</p>
                        <p className="key">=</p>
                        <p className="key">Backspace</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="key">Tab</p>
                        <p className="key">Q</p>
                        <p className="key">W</p>
                        <p className="key">E</p>
                        <p className="key">R</p>
                        <p className="key">T</p>
                        <p className="key">Y</p>
                        <p className="key">U</p>
                        <p className="key">I</p>
                        <p className="key">O</p>
                        <p className="key">P</p>
                        <p className="key">[</p>
                        <p className="key">]</p>
                        <p className="key">\</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="key">CapsLock</p>
                        <p className="key">A</p>
                        <p className="key">S</p>
                        <p className="key">D</p>
                        <p className="key">F</p>
                        <p className="key">G</p>
                        <p className="key">H</p>
                        <p className="key">J</p>
                        <p className="key">K</p>
                        <p className="key">L</p>
                        <p className="key">;</p>
                        <p className="key">‘</p>
                        <p className="key">Enter</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="key">Shift</p>
                        <p className="key">Z</p>
                        <p className="key">X</p>
                        <p className="key">C</p>
                        <p className="key">V</p>
                        <p className="key">B</p>
                        <p className="key">N</p>
                        <p className="key">M</p>
                        <p className="key">,</p>
                        <p className="key">.</p>
                        <p className="key">/</p>
                        <p className="key">Shift</p>
                    </div>
                    <div className="keyboard-row">
                        <p className="key">Ctrl</p>
                        <p className="key">Alt</p>
                        <p className="key">Space</p>
                        <p className="key">Ctrl</p>
                        <p className="key">Alt</p>
                        <p className="key">한자</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypingPractice1;