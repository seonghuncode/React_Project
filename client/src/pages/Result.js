import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  //state값을 서버에서 받아온다
  const { state } = useLocation();

  const sendMbti = () => {
    console.log(state);
  };
  React.useEffect(() => {
    //Result파일로 오면 useEffect가 실행되게
    sendMbti(); //서버로 정보를 보내는 함수
  }, []);
  return <div>Result</div>;
}

export default Result;
