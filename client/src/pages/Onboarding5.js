import React from "react";
import { Answer, ProgressBar, Question } from "../components"; //index.js에 모아두었기 때문에 한번에 받을 수 있다. index는 생략 가능하므로 한 폴더에 딱 하나만 생성 해야 한다

function Onboarding5() {
  return (
    <div className="main-app">
      <ProgressBar step={5} />
      <Question imgUrl="https://kakaofriendsmbti.netlify.app/images/05-01.png" />
      <Answer
        text="그래! 역시 사람 많고 유명한 벚꽃 명소가 예쁘겠지 어디로 갈까?"
        value="E"
      />
      <Answer text="그래! 사람 적은 벚꽃 명소 한 번 찾아볼까?" value="I" />
    </div>
  );
}

export default Onboarding5;
