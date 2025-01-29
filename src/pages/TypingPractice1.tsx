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
            <div className="taza">
                <div className="Ex">
                    <p>public class Main{'{'}</p> {/* "{" 를 쓰려면 이렇게 해야된다는 사실....... 귀한자식이구나 너 */}
                    <p>public class Ms</p>
                </div>
                <div className="NextTaza">
                    <p>pubic static void main{'{'}String args[]{'}'}{'{'}</p>
                    <p>int a = 1; int b = 2; int c = 3;</p>
                    <p>System.out.println(a + b + c);</p>
                </div>
            </div>
        </div>
    )
}

export default TypingPractice1;