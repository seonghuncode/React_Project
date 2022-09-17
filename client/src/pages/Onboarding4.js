import React from "react";
import { Answer, ProgressBar, Question } from "../components"; //index.js에 모아두었기 때문에 한번에 받을 수 있다. index는 생략 가능하므로 한 폴더에 딱 하나만 생성 해야 한다

function Onboarding4() {
  return (
    <div className="main-app">
      <ProgressBar step={4} />
      <Question imgUrl="https://kakaofriendsmbti.netlify.app/images/04-01.png" />
      <Answer
        text="지금 PPT 만드는 중이니까 아마 한 2시간 뒤면 끝날거 같아!"
        value="T"
      />
      <Answer text="모르겠어. 근데 지금 PPT 만들고 있어!" value="F" />
    </div>
  );
}

export default Onboarding4;
