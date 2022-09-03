import "./App.css";
import React from "react";
import AppIndex from "./AppIndex";

//1. import : 외부에 있는 모듈(함수나 변수)를 가져올때 사용
//2. export : 내부에 있는 모듈을 외부로 이동할때 사용

//라이브러리 설정은 App에서
function App() {
  return <AppIndex />;
}

export default App;
