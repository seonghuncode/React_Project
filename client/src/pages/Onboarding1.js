import React from "react";
import { useNavigate } from "react-router-dom";
import { Answer, ProgressBar, Question } from "../components"; //index.js에 모아두었기 때문에 한번에 받을 수 있다. index는 생략 가능하므로 한 폴더에 딱 하나만 생성 해야 한다

//현재 데이터를 프론트에서 정의 했지만 -> 서버에서 정의 하도록 변경(node.js)
function Onboarding1() {
  const navigation = useNavigate();

  const goNextPage = () => {
    navigation("/on2", {
      //주소 ,객체(객체 안에서 또 객체로 원하는 값을 넘겨준다)
      state: {
        name: "kevin",
      },
    });
  };

  return (
    <div className="main-app">
      <ProgressBar step={1} />
      <Question imgUrl="https://kakaofriendsmbti.netlify.app/images/01-01.png" />
      <Answer
        text="당연하지! 어디서 할지 고민 중이야!"
        goNextPage={goNextPage}
      />
      <Answer
        text="그냥 맛있는거 먹으러 갈까 생각 중이야!"
        goNextPage={goNextPage}
      />
    </div>
  );
}

export default Onboarding1;
