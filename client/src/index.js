import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //react-router-dom라이브러리 에서 가지고 온다.

//라우터 : 페이지 이동에 관련
// <BrowserRouter> APP을 감싼다 : 리액트 내에서 페이지 이동을 도와주는 라이브러리

//HashRouter
//BrowserRouter
//둘의 차이점 공부 : 대부분 BrowerRouter을 사용

const root = ReactDOM.createRoot(document.getElementById("root")); //index.html의 root안으로 보내서 쌓는다.(append의 개념),
//브라우저는 우리가 사용하는 리액트를 모르기 때문에 다 보내주어 html코드로 변환해 준다??
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
