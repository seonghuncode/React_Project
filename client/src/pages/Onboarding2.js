import React from "react";
import { useLocation } from "react-router-dom";
import { Answer, ProgressBar, Question } from "../components"; //index.js에 모아두었기 때문에 한번에 받을 수 있다. index는 생략 가능하므로 한 폴더에 딱 하나만 생성 해야 한다

function Onboarding2() {
  const { state } = useLocation();
  console.log(state.name);

  return (
    <div className="main-app">
      <ProgressBar step={2} />
      <Question imgUrl="https://kakaofriendsmbti.netlify.app/images/01-01.png" />
      <Answer text="" />
      <Answer text="" />
    </div>
  );
}

export default Onboarding2;