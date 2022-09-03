import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //react-router-dom라이브러리 에서 가지고 온다.

//라우터 : 페이지 이동에 관련
// <BrowserRouter> APP을 감싼다 : 래액트 내에서 페이지 이동을 도와주는 라이브러리

//HasjRouter
//BrowserRouter
//둘의 차이점 공부 : 대부분 BrowerRouter을 사용

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
