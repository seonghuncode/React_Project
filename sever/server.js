const express = require("express");
const app = express();

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
