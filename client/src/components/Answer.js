import React from "react";
import { StoreContext } from "../App";

function Answer(props) {
  //다른 파일의 함수, 변수 사용할때 im[prt사용]
  const { setDispatchType } = React.useContext(StoreContext);
  return (
    <button
      className="btn"
      onClick={() => {
        setDispatchType({
          code: "답변",
          params: {
            //params를 객체로 만들었다.
            mbti: props.value, //E인지 I인지 어떤것을 클릭했는지 넘겨준다??
          },
        }); //여기서 실행되면 서버의 App.js에서 dispathtype이 변경된다 , useEffect가 샐행된다(서버의 App.js)
      }}
    >
      {props.text}
    </button>
  );
}

export default Answer;
