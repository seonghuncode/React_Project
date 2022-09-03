import "./App.css";
import React from "react";
import Name from "./Name"; //import받는 연습
import { name2 as name3 } from "./Name"; //import 받는 연습

//1. import, export
//export는 하나의 파일(모듈 에서)

//1.로그인 정보는 모든 페이지 에서 다 사용 한다. ==> 전역상태관리를 사용하면 편하다 (Redux(가장 유명), Recoil(요즘 핫함,페이스북에서 만듬)을 사용해서 사용한다.)

//컴포넌트 : 결과값을 내는것이 아니라 Header를 가지고 오고 싶은것 들 , html태그를 리턴하는 얘들을 부름
function Header() {
  return <div>Header</div>;
}
function Body(props) {
  //매개변수로 받아서 컴포넌트를 넘겨주고 싶을 경우
  return <div>이름은 {props.name1}입니다.</div>;
}

function App() {
  // return (
  //   <div>
  //     {Name} {name3}
  //   </div>
  // );

  const [name, setName] = React.useState("kevin");
  React.useEffect(() => {}, []);
  return (
    //컴포넌트 불러오는 방법, 컴포넌튼느 항상 대문자로 시작
    <div>
      <Header />
      <Body name1={name} />
    </div>
  );
}

export default App;
