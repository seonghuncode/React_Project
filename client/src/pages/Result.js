import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

//axios로 서버로 보낼 예정
//서버에다가 데이터 주고 받을때 사용

function Result() {
  //state값을 App.js에서 받아온다??
  const { state } = useLocation(); //{state } => 전체가 아닌 state만 보내기 위해서
  const [캐릭터, set캐릭터] = React.useState({});
  const navigation = useNavigate();
  //async
  const sendMbti = async () => {
    console.log(state);

    console.log("1"); //비동기로 1이 나둥에 실행 된다 -> async, await을 사용하면 동기로 바뀐다.
    await axios({
      method: "post", //get방식도 가능
      url: "http://localhost:5000/mbti",
      params: state, //서버에 보내는 것  data : state -> body : state의 body는 data를 좀더 안전하게 보낼 수 있는 기능
    })
      .then((response) => {
        //요청이 성공했을때 실행 시키는 함수, 성공하면 response를 받는다
        console.log(response);
        const data = response.data;
        set캐릭터(data);
      })
      .catch(() => {
        //요청에 에러가 났을때 실행 되는 함수
      })
      .finally(() => {
        //요청 성공 유무와 상관없이 실행 되는 함수
      });
  };
  React.useEffect(() => {
    //Result파일로 오면 useEffect가 실행되게
    sendMbti(); //서버로 정보를 보내는 함수
  }, []);
  return (
    <div className="result-img-wrap">
      <img className="result-img" src={캐릭터.content} alt={캐릭터.name}></img>
      <button
        className="btn"
        onClick={() => {
          navigation("/");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default Result;
