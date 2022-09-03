import React from "react";
import { useNavigate } from "react-router-dom";
//에인 화면을 만들기 위한 파일

//함수 이름은 파일 이름이랑 통일 : 개발자간의 약속
function Main() {
  const navigation = useNavigate(); //버튼을 눌러서 화면을 이동하기 위해서

  return (
    <div className="main-app">
      <img
        src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
        alt="메인이미지"
      />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("on1"); //AppIndex에 정의되어 있는 주소를 적어주면 된다. (새로고침잉 되지 않고 이동한다) -> 온보딩
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
