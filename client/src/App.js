import "./App.css";
import React from "react";
import AppIndex from "./AppIndex";

//전역 변수를 해주기 위한 파일

//1. import : 외부에 있는 모듈(함수나 변수)를 가져올때 사용
//2. export : 내부에 있는 모듈을 외부로 이동할때 사용

//React Context 개념 배우기 (전역 useState 설정) , 컴포넌트가 여러개 있을때 괸리 하기가 쉽지 않기 때문에 사용하는 것이 전역변수 이다.
//사람을 컴포넌트로 추상화 하였다.

//==============머리======================
function Head(props) {
  return (
    <div>
      <Eye />
      <Nose />
      <Mouth />
    </div>
  );
}

function Eye() {
  const { 사물을보다, set사물을보다 } = React.useContext(StoreContext);

  return (
    <div>
      {사물을보다 ? "사물을 보고 있습니다" : "사물을 보고 있지 않습니다"}
      <button
        type="button"
        onClick={() => {
          set사물을보다(true);
        }}
      >
        사물보기
      </button>
    </div>
  );
}
function Nose(props) {
  return <div>{props.숨을쉬다 ? "숨을 쉬고 있습니다." : null}</div>;
}
function Mouth(props) {
  // return <div>{props.숨을쉬다 ? "숨을 쉬고 있습니다." : null}</div>; -> 전역변수 StoreContext를 사용하지 않고 직접 받아와 사용할 경우

  // const constextDatea = React.useContext(StoreContext); //이러할때는 props로 받아오는게 아니다
  // console.log(constextDatea);

  const { 숨을쉬다, setDispatchType } = React.useContext(StoreContext); //props를 사용하지 않고 바로 전역으로 사용
  console.log(숨을쉬다);

  return (
    <div>
      {숨을쉬다 ? "숨을 쉬고 있습니다." : "숨을 안쉬고 있습니다"}
      <button
        type="button"
        onClick={() => {
          setDispatchType("숨을쉬다");
        }}
      >
        숨쉬기
      </button>
    </div>
  );
}

//================머리===================

//============몸==================
function Body() {
  return (
    <div>
      {" "}
      <Arm /> <Chest /> <Stomach />{" "}
    </div>
  );
}

function Arm() {
  return <div></div>;
}
function Chest() {
  return <div></div>;
}
function Stomach() {
  return <div></div>;
}

//============몸==================

//===================다리==========
//허벅지
function Thigh() {
  return <div></div>;
}
//종아리
function Calf() {
  return <div></div>;
}
//발
function Foot() {
  return <div></div>;
}

function Leg() {
  return (
    <div>
      <Thigh />
      <Calf />
      <Foot />
    </div>
  );
}

//===================다리==========

//React Context 전역변수
//Recoil, Redux 위의 것보다 업그레이드 된 개념

const StoreContext = React.createContext({
  숨을쉬다: null,
  set숨을쉬다: null,
});

//사람을 여러개로 나눈다
function Person() {
  const [숨을쉬다, set숨을쉬다] = React.useState(false);
  const [사물을보다, set사물을보다] = React.useState(false);
  const [움직이다, set움짇이다] = React.useState(false);
  const [운동을하다, set운동을하다] = React.useState(false);
  const [생각을하다, set생각을하다] = React.useState(false);

  //EX 생각을하다를 바꾸기 위해서는 생각을하다, set생각을하다 둘다 보내주어야 한다. 변수가 여러개 있다면 복작하기 때문에 코드를 더 간단하게 하기 위한 방법
  const [dispatchType, setDispatchType] = React.useState("");

  //위에서 setDispatchType이 있으면 여기가 실행된다
  React.useEffect(() => {
    switch (dispatchType) {
      case "숨을쉬다":
        alert("숨을쉬다");
        set숨을쉬다(true);
        break;

      case "사물을보다":
        break;

      case "움직이다":
        break;

      default:
        break;
    }
  }, [dispatchType]);

  return (
    <div>
      <StoreContext.Provider
        value={{
          숨을쉬다: 숨을쉬다,
          사물을보다: 사물을보다,
          setDispatchType: setDispatchType,
        }}
      >
        <Head />
        <Body />
        <Leg />
      </StoreContext.Provider>
    </div>
  );
}

//라이브러리 설정은 App에서
function App() {
  // return <AppIndex />;
  return <Person />;
}

export default App;
