import "./App.css";
import React, { cloneElement } from "react";
import AppIndex from "./AppIndex";
import { useNavigate } from "react-router-dom";

//전역 변수를 해주기 위한 파일

//1. import : 외부에 있는 모듈(함수나 변수)를 가져올때 사용
//2. export : 내부에 있는 모듈을 외부로 이동할때 사용

//React Context 개념 배우기 (전역 useState 설정) , 컴포넌트가 여러개 있을때 괸리 하기가 쉽지 않기 때문에 사용하는 것이 전역변수 이다.
//사람을 컴포넌트로 추상화 하였다.

//라이브러리 설정은 App에서

//Answer에서 사용하기 위해서 export를 해준다
export const StoreContext = React.createContext({});

function App() {
  //페이지 이동 할때 사용
  const navigation = useNavigate();

  const [dispatchType, setDispatchType] = React.useState({
    code: "",
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
        const clickedMbti = dispatchType.params.mbti;
        // alert(`사용자가 ${clickMbti} 답변을 눌렀습니다.`);

        //카운트를 올려주는 역할
        const cloneMbti = [...mbti];

        const findIndex = cloneMbti.findIndex((value) => {
          console.log(value[clickedMbti]); //자바스크립트의 0은 없는 것을 의미 한다

          //키값이 존재 하는지 확인(구글링) , 0은 없는 값으로 볼 수 있기 때문에 값은 없어도 키만 있으면 판단이 가능하기 때문
          return value.hasOwnProperty(clickedMbti); //배열중 0번째 이기에 0으로 반환??
        });

        cloneMbti[findIndex][clickedMbti]++; //index번호를 찾아 clickedMbti를 넣어 ++해준다
        setMbti(cloneMbti);
        console.log(cloneMbti);

        console.log(cloneMbti);

        //다음 페이지 이동해주는 기능
        const pathname = window.location.pathname; //현재 페이지를 알려준다
        const nextPage = Number(pathname.charAt(pathname.length - 1)) + 1; //pathname은 문자열이기 때문에 문자열의 위치를 가지고 올때 charAt을 사용한다, 문자열 길이 - 1 = 마지말을 의미
        //문자열을 Number로 숫자로 형변환을 해준다 chatAt(0)은 /를 가지고 온다, 숮자로 형변환 후 + 1을 해준다
        console.log(`on${nextPage}`);
        console.log(typeof nextPage);
        if (nextPage === 6) {
          navigation(`/result`, {
            state: {
              mbti: mbti, //result에 값을 주는 것
            },
          });
        } else {
          navigation(`/on${nextPage}`); //직접 원하는 url을 넣어 주면 계속 해당 페이지로 유지 되기 때문에 pathname사용해서 맨 뒷자리 주소를 + 1씩해서 넘어가게 해준디
        }

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
