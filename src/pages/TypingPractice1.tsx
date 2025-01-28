import React from "react";
import "./TypingPractice2.css";

const TypingPractice1 = () => {
    return (
        <div className="fullScreen">
            <div className="leftPanel">
                <h2>낱말연습</h2>
                <p>진행시간 : 00:00</p>
                <h3>전체</h3>
                <p>평균타수 : 100</p>
                <p>정확도 : 100.00%</p>
                <h3>현재</h3>
                <p>최고타수 : 300</p>
                <p>평균타수 : 200</p>
                <p>정확도 : 40.00%</p>
                <img src="/img/mirim.png" alt="Mirim Logo"></img>
            </div>
            <div className="taza">
                <div className="Ex">
                    <p>public class Main{'{'}</p> {/* "{" 를 쓰려면 이렇게 해야된다는 사실....... 귀한자식이구나 너 */}
                    <p>public class Ms</p>
                </div>
                <div className="NextTaza">
                </div>
            </div>
        </div>
    )
}

export default TypingPractice1;