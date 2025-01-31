import React from "react";
import "./TypingPractice.css";

const TypingPractice: React.FC = () => {
  return (
    <div className="container">
      <div className="main-box">
        {/*왼쪽*/}
        <div className="info-panel">
          <h2 className="title">낱말연습</h2>
          <p>진행시간 : 00:00</p>
          <h3>전체</h3>
          <p>평균타수 : 100</p>
          <p>정확도 : 100.00%</p>
          <h3>현재</h3>
          <p>최고타수 : 300</p>
          <p>평균타수 : 200</p>
          <p>정확도 : 40.00%</p>
          <div className="logo-container">
          <img src="/img/mirim.png" alt="Mirim Logo" className="logo" />
          </div>
        </div>

        {/*오른쪽*/}
        <div className="typing-area">
          <div className="code-box">
            <p className="code">public class Main{'{'}</p>
            <p className="code error">public class <span className="highlight">Ms</span></p>
          </div>

          <div className="code-box">
            <pre className="code">
{`public static void main(String[] args){
    int a = 1; int b = 2; int c = 3;
    System.out.println(a + b + c);
}`}
            </pre>
          </div>

          <div className="keyboard-box">
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingPractice;
