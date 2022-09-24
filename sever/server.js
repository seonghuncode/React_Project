const express = require("express");
const cors = require("cors"); //cors에러 뜰때 사용
const app = express();

app.use(cors()); //cors에러 뜰때 사용

//클라이언트 에서 정보를 받아서 결과를 보내주기 위해 서버를 만들었다.
//노드몬 서버를 수정해도 자동으로 반영 되는 것

const characters = [
  {
    name: "콘",
    content: "https://kakaofriendsmbti.netlify.app/images/ENFJ.png",
    mbti: "ENFJ",
  },
  {
    name: "빠냐",
    content: "https://kakaofriendsmbti.netlify.app/images/ESTJ.png",
    mbti: "ESTJ",
  },
  {
    name: "앙몬드",
    content: "https://kakaofriendsmbti.netlify.app/images/INFP.png",
    mbti: "INFP",
  },
  {
    name: "어피치",
    content: "https://kakaofriendsmbti.netlify.app/images/ENTP.png",
    mbti: "ENTP",
  },
  {
    name: "죠르디",
    content: "https://kakaofriendsmbti.netlify.app/images/ISFJ.png",
    mbti: "ISFJ",
  },
];

app.get("/", function (req, res) {
  res.send("Hello Node.js");
});

app.listen(5000, function () {
  console.log("Start Node Server!");
});

//받아주는 역할 , 요청주는 : mbti
//post방식으로 받기때문에 app.get
app.post("/mbti", function (req, res) {
  // console.log(req.query); //서버 터미널에 나온다
  // console.log(req.query);
  const mbti = req.query.mbti; // ==> json형태
  // 객체나 배열로 바꾸는 방법 : const mbti2 = mbti.map(())
  const mbti2 = mbti.map((item) => {
    return JSON.parse(item);
  });
  console.log(mbti2);
  console.log(mbti2[0]["I"]);
  res.send("");
});
