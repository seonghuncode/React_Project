# React_Project
프론트앤드4-5수업 내용 부터,(래액트로 mbti만들기 연습)
<br><br><br>


프론트앤드5일차 수업(22.09.03)

지난시간 복습
1. useState [데이터 저장소]

2.React.useEffect(()=>{
},[])

3.컴포넌트 사용법


현 수업 내용 [https://kakaofriendsmbti.netlify.app/ ==> 클론 코딩 참고 싸이트]
SPA(Single Page App)를 만드는 그냥 라이브러리 일뿐 : SPA를 만드는 라이브러는 뷰, 엘귤러, 리액트 가 있다, 리액트가 가장 유명하다
(주소는 바뀌는데 새로고침은 되지 않고 화면이 변하는 것)

4.React router dom : 리액트에서 SPA를 만드는데 사용 하는 것

5. mbti(react, node.js사용)
<br><br><br>

--개념 찾아서 보기(프론트앤드를 하기 위해 필수로 알아야 하는 개념)--
-SPA란?
==>어떤 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하는 것이 SPA이다. 뭔가를 클릭하거나 스크롤하면, 상호작용하기 위한 최소한의 요소만 변경이 일어난다. 페이지 변경이 일어난다고 보여지는 것 또한 최초 로드된 자바스크립트를 통해 미리 브라우저에 올라간 템플릿만 교체되는 것이다.
-javascript import, export란?
-Ajax란?
-get, post 차이점

<br><br><br>
[Step1]
프로젝트 만들기
1.client, server폴더를 따로 만든다
2.clinet클릭후 통합 터미널을 연다
3.터미널에 npx create-react-app mbti : 리액트 환경 자동으로 구축 해준다
4.다운받아진 모든 폴더 client로 옮기고 mbti는 삭제 한다
5. npm install axios, npm install react-router-dom

참고
axios : 브라우저나 node.js에서 비동기로 http 통신을 하기 위한 도구
react-router-dom : 페이지 이동
라우팅 : 사용자가 요청한 url에 따라 해당 url에 맞는 페이지를 보여주는 것
리액트 라우터 : 사용자가 입력한 주소를 감지 하는 역할을 하며, 여러 환경에서 동작하도록 라우터 컴포넌트 제공
(BrowserRouter, HashRouter로 나뉨)

explorer 확장에서 ESLint다운로드 : 에러같은것 미리 보여주고 에러에 대한 설명이 나오게 해주는 기능
(프리티어 ESLint거의 사용)

<br><br><br>

React Router 
React SPA구현에 가장 많이 사용되고 있는 react-router-dom
기존 방식의 <a href=""></a>를 사용하여 url 변경시 새로고침 하여 모든 페이지를 reload하면 시간이 걸리는 것에 반해
React는 SPA 체제로 새로고침 대신 Router를 사용하여 변경된 소스만 바꾸어 속도가 더 빠르다

<br><br><br>
[브라우저의 url과 컴포넌트를 연결하는 작업]
<Routes>
	<Route exact path="/" element="<Memeber />">
	</Route>
</Routes>
명시적으로 해당 url에만 접근가능하도록 위해 exact는 필수였다. 

종류
react-router-dom : web에서 사용
react-router-native : app에서 사용
react-router : app, web 둘다 사용

BrowerRouter
HTML5의 history API를 활용하여 UI를 업데이트
동적 페이지에 적합
<Link>태그를 통해 to속성에 이동할 경로를 추가하여 이동 시킨다.
EX
<BrouserRouter>
	<Link to="/"></Link>
</BrouserRouter>
새로고침 하면 경로를 찾지 못 해 에러 발생 -> 추가적인 세팅이 필요
새로고침시 해당 url을 바탕으로 페이지를 불러 온다

HashRouter
url의 hash를 활용한 라우터
주소에 #이 붙는다
주로 정적인 페이지 에서 사용
EX
<HashRouter>
	<Route path="/" />
</HashRouter>
새로고침 해도 에러 발생X

<br><br><br>

온보딩이란?

<br><br><br>

chrome 웹 스토어 -> ColorZilla 다운 : 크론코딩 할때 해당 마우스커서가 있는 것에서 색을 따준다
클론코딩 할때 : 작업자 도구로 구조를 파악하는게 중요

<br><br><br>

CSS개념 

  display: flex;
  flex-direction: column;   //화면 구성이 세로로
  align-items: center;  //정중앙
  justify-content: center; //정중앙
  height: 100vh; //화면 크기에 따라 자동으로 따라가서 늘려주는 기능

<br><br><br>

ctrl + t : 같은 것들 동시 수정 하는 방법

<br><br><br>

react.router.dom사용법을 배움

리액트 중요 순서
리액트 : useState -> useEffect -> component -> React router dom -> 전역상태관리(Redux, Recoil)


<br><br><br>



프론트앤드4-6(22.09.17)

[지난 시간 복습]
리액트 만들때 
1.npx create react-app [프로잭트 이름] : 리액트 환경 구축 하기 위해서는 어렵지만 npx가 자동으로 해준다
	(중요한 개념)
	-useState
	-useEffect
	-Component(컴포넌트)

(install받은 것에 대한 설명)
axios : 제이쿼라 에서 ajax로 서버에 요청 보낼때 하는 개념 이라고 생각
react-router-dom : 페이지 이동을 위해 필요한 라이브러리

<br><br><br>

서버는 node.js?? node.js에 대해

<br><br><br>

리액트는 단방향에 대한 개념 (하나의 방향으로 흘러야 한다), 하나의 로직에서 돌아가야 좋은 코드이다.

<br><br><br>

서버 만드는 방법
server 폴더 -> sever.js만들기
npm init (다 엔터 치기)

(server -> 우클릭 -> open터미널)
다운받아야할 라이브러리
npm install nodemon
npm install express
npm install  cors


서버끄는 것 : ctrl + c
서버키는 것 : npm start
(//  서버를 저장할때 마다 자동으로 껐다 켜지는 기능 nodemon)


<br><br><br>


[root가 있는 이유, 의미]
브라우저에서 인식할 수 있는 언어 : CSS, html, js
=>우리는 리액트를 사용하기 때문에 브라우저는 해당 언어를 모른다.
==>index.js에서 root의 의미는 index.html의 root로 모든 리액트 작업을 보내주어 해당 root안에 쌓아주어 변환해 준다.









<br><br><br>
[리액트에 대한 기본 개념]

1. axios (jquery ajax랑 똑같음)
2. useState, useEffect
const[people, setPeople] = React.useState();

React.useEffect(()=>{

}) ==> 계속 반복
//
React.useEffect(()=>{

},[])  ==> 새로고침 하면 한번만 실행
//
React.useEffect(()=>{

},[people])  ==> 의존성 주입으로 people바뀔때 실행
//

3. 리액트 에서 html코드를 리턴할때는 최상위 부모가 있어야 한다.

//

부족한 개념 이해 하기
Hook이란?
->React 16.8버전에 새로 추가된 기능으로, 클래스형 컴포넌트의 단점을 극복하기 위해 나온 함수형 컴포넌트
EX)클래스형 컴포넌트
class App extends Component{
	render(){
		reuturn;
	}
}

EX) 함수형 컴포넌트
function App() {
	return;
}


함수형 컴포넌트가 나오게 된 이유
1. 클래스 문법이 어렵다
2. 축소가 어렵다
3. reloading신뢰성이 떨어진다.
4. 최신 기술 적용이 효과적이지 않다.
==>하지만 클래스 컴포넌트의 단점을 극복할 수 있지만 클래스 컴포넌트의 장점이 었던 state, life cycle을 직접 다룰 수 없다
==>이를 해결하기 위해 나온것이 Hook이다.


Hook의 특징, 기능
hook은 react 개념에 보다 직관적인 api를 제공, 상태에 관련된 로직을 재사용 하기 쉽다.
함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능



함수형 컴포넌트 에서 state를 사용하려면??
-useState
const [count, setCount] = useState();
useState는 Hook의 기술
setCount로 count state를 변경하면 렌더린이 다시 일어난다

-useEffect(데이터를 받거나, 구독하기, DOM을 직겁 조작할 경우 사용)
 react의 컴포넌트 내에서 데이터를 가져오거나 구독하고, DOM을 조작하는 작업은 effects이다.
이는 다른 컴포넌트에 영향을 줄 수 도 있고 렌더링 과정에서 구현 불가능한 작업 이다.
1.정리가 필요 하지 않는 effects : react가 DOM을 업데이트한 후 추가로 코드를 실행하는 경우
(렌더링 이후 매번 수행 한다)
2.정리가 필요한 effects : 외부 데이터에 구독을 설정해야 하는 경우



useState VS useEffect차이
useState : 상태를 관리

useEffedct :  컴포넌트가 렌더링 된 이후에 수행해야 하는 작업을 의미
[useEffect는 callback함수와 dependency를 받는다 -> callback 함수 Effect를 기억했다가 -> 컴포넌트가 
렌더린 된 이후에 함수를 실행 한다.]
[컴포넌트 갱신 될때 마다 계속 실행]


<br><br><br>
[간단 문법]
Node.js를 위해서 자바스크립트 필수 문법 알아보기
1.템플릿 리터럴(template lliterals)

2.화살표 함수(arrow function)
함수 선언하는 방법 중 하나 아래의 형식 (일반 함수로 선언한 함수 안에 여러 함수가 들어가면 화살표 함수 사용)
(최상단 함수 인지 화살표 함수인지 유추하고 화살표 함수라면 위에 함수가 더 있겠구나 추측)
(개발자간 약속??) (일반 함수와 선언 부분만 다르다)
const getName = () => {
	console.log('')
} 
3. 매개변수 기본 값(degault parameter value)
ex.
const addNumber = (number, number2) => {
	return number + number2;
//100 + undefined = null : 치명적 오류가 생기기 때문에 기본값을 준다.
//const addNumber = (number, number2 = 0) ==> number2의 기본값을 0으로 지정
}
addNumber(100);

4. 스프레이드 문법(spread)
ex.
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
두 배열을 합치고 싶다.
console.log(...arr1);  ==> ...은 안에 있는 것을 밖으로 빼내는 것 버겨내어 number가 된다 [1,2,3,4,5] -> 1,2,3,4,5
console.log(...arr1, ...arr2); 를 하면 두개의 배열이 합쳐진다.
(...이 스프레드 문법이다, 문자열 모두 가능 하다) (배열은 얕은 복사라고 해서 방법이 따로 있다.)


5. 배열 디스트럭처링(array destructuring) == 구조분해 할당
==> 많이 사용한다.
Ex.
let array1 = ["홍길동", 20];
let myName = array1[0];
let age = array1[1];

==>할줄로 처리
let[myName, age] = array1;

6. 자바스크립트 대표 반복문(map, forEach, filter, find, findeIndex // for of, for in)
==>중요!!

[step1 : map 반복문]
--EX1--
const array = [1,2,3,4,5,6,7,8,9,10];  //반복문을 돌리기 위해서는 배열

//반복문을 할때는 함수를 이렇게 선언하는게 더 좋다.
array.map((value, index) => {
	console.log(value);
});

--EX2--

const array = [{
	name : "kvin",
	age : 19,
},{
	name : "kvin",
	age : 19,
},{
	name : "kvin",
	age : 19,
}]

array.map((value, index) => {
	console.log(value);
});

--EX3--
//구조분해 할당 사용
array.map(( {name, age}, index) => {
	console.log(name, age);
});


--EX4-- 나이에 10씩 더해 주는 기능
const newArray = array.map((value, index) => {
	value.age += 10;
	retrun value; //return을 해주면 newArray에 계속 쌓인다.

});

console.log(newArray);

---

[step2 : forEach 반복문]
--EX1-- 

let sum = 0;

배열은 위의 배열을 사용
array.forEach((value, index) => {
	console.log(value, index);
	sum += value.age;
})

//forEach, map의 차이 : forEach는 return이 없다.
나이의 총합을 알고 싶을 경우 -> forEach 를 돌린다 return할 필요가 없는 것.

==>forEach, map을 어떨때 사용할지 판단은 개발 경험을 쌓아야 하기 때문에 사용방법을 우선 숙지

































