import "./App.css";
import React from "react";
import AppIndex from "./AppIndex";

//전역 변수를 해주기 위한 파일

//1. import : 외부에 있는 모듈(함수나 변수)를 가져올때 사용
//2. export : 내부에 있는 모듈을 외부로 이동할때 사용

//React Context 개념 배우기 (전역 useState 설정) , 컴포넌트가 여러개 있을때 괸리 하기가 쉽지 않기 때문에 사용하는 것이 전역변수 이다.
//사람을 컴포넌트로 추상화 하였다.

//라이브러리 설정은 App에서

//Answer에서 사용하기 위해서 export를 해준다
export const StoreContext = React.createContext({});

function App() {
  const [dispatchType, setDispatchType] = React.useState({
    code: "",
    page: "",
    params: null,
  });

  //props로 넘겨주면 너무 많기 때문에(코드가 너무 길어진다) React Context를 사용

  //mbti값 정의 -> 실직적으로 사용하는 곳은 오보딩이다??
  const [mbti, setMbti] = React.useState([
    {
      I: 0, //내향형 숫자는 체크하면 숫자를 올리기  위해 사용
      E: 0, //외향형
    },
    {
      S: 0, //현실형
      N: 0, //이상주의형
    },
    {
      T: 0, //이성적
      F: 0, //감성적
    },
    {
      P: 0, //즉흥적
      J: 0, //계획적
    },
  ]);

  React.useEffect(() => {
    switch (dispatchType.code) {
      case "답변":
        alert("사용자가 답변을 눌렀습니다.");
        break;

      default:
        break;
    }
  }, [dispatchType]);

  return (
    <StoreContext.Provider
      value={{
        setDispatchType: setDispatchType, //이걸 바꾸어 useEffect로 가서 한번에 다 처리 할 수 있게?? - Answer에서 바로 사용??
      }}
    >
      <AppIndex />
    </StoreContext.Provider>
  );
}

export default App;
