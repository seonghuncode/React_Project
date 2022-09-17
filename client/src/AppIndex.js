import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Onboarding4,
  Onboarding5,
  Result,
} from "./pages"; // "./pages/index" : index는 생략 가능 그래서 하나만 존재 해야 한다
//페이지 목차만 만들기 위해 만들었다. , pages들을 불러와야 한다

//전역상태관리 React.Context(리액트내 라이브러리), Redux, Recoil

//함수 이름은 파일명과 같게 : 개발자들간 약속
//컴포넌트 만들고 페이지 설정
function AppIndex() {
  return (
    //페이지 설정, 온보딩이 5개를 의미, 결과를 알기 위해서는 각 온보딩의 어떠한 값을 결정했는지 기억했다가 서버에 보내야 한다
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/on1" element={<Onboarding1 />} />
      <Route exact path="/on2" element={<Onboarding2 />} />
      <Route exact path="/on3" element={<Onboarding3 />} />
      <Route exact path="/on4" element={<Onboarding4 />} />
      <Route exact path="/on5" element={<Onboarding5 />} />
      <Route exact path="/result" element={<Result />} />
    </Routes>
  );
}

export default AppIndex;
