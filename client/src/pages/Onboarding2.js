import React from "react";
import { useLocation } from "react-router-dom";
import { Answer, ProgressBar, Question } from "../components"; //index.js에 모아두었기 때문에 한번에 받을 수 있다. index는 생략 가능하므로 한 폴더에 딱 하나만 생성 해야 한다

function Onboarding2() {
  return (
    <div className="main-app">
      <ProgressBar step={2} />
      <Question imgUrl="	https://kakaofriendsmbti.netlify.app/images/02-01.png" />
      <Answer text="영화 완전 재미었어! 너도 한번 봐봐!" value="S" />
      <Answer
        text="좀비가 너무 리얼했어. 실제 상황이면 난 바로 죽었을거야..."
        value="N"
      />
    </div>
  );
}

export default Onboarding2;
