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
        }); //여기서 실행되면 서버의 App.js에서 dispathtype이 변경된다
      }}
    >
      {props.text}
    </button>
  );
}

export default Answer;
