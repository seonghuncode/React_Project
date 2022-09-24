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
    mbti: "ENFJ", //문자열 반복문은 for 대부분은 for of 반복문을 사용한다
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
  const mbti = req.query.mbti; // ==> json형태
  // 객체나 배열로 바꾸는 방법 : const mbti2 = mbti.map(())
  const mbti2 = mbti.map((item) => {
    return JSON.parse(item);
  });
  console.log(mbti2);
  // console.log(mbti2[0]["I"]);

  //클라이언트 에서 값을 가지고 와서 mbti유형중 3개 이상만 겹치면 해당 결과의 mbti를 보내주는 알고리즘======================================================================
  //방법1 : console.log(mbti2[0]["I"]); 하나씩 빼서 if문으로 큰것을  let ResultMbti = ''를 만들어서 추가시켜준다 --> 코드가 너무 길어진다

  //방법2
  let mbtiStr = "";
  let 추천캐릭터 = "";
  mbti2.forEach((item) => {
    console.log(item);
    //{ I: 3, E: 3 } : i = key, 3 : 값
    // console.log(Object.keys(item)); // :key값만 모아서 배열로 바꾸어주는 자바스크립트 문법
    // console.log(item, Object.values(item)); //item의값들을 모아 배열로 만들어 준다
    // console.log(keys[0], keys[1]);

    const keys = Object.keys(item);
    const values = Object.values(item);
    const maxStr = values[0] >= values[1] ? keys[0] : keys[1];
    mbtiStr += maxStr;
    console.log(mbtiStr);
  });

  //위에서 뽑은 값들이 위의 characters의 어떤것과 동일하는지 찾는 알고리즘
  let countArray = [];
  characters.forEach((item, key) => {
    // const name = "성민";
    // for (let X of name) {
    //   console.log(name);
    // }
    let index = 0;
    let count = 0;
    for (let x of item.mbti) {
      if (mbtiStr[index] === x) {
        console.log(mbtiStr[index], x);

        count++; //같으면 올려준다
      }
      index++;
    }
    countArray.push({
      key: key,
      count: count,
    });
  });
  console.log(countArray);

  //최종 결과를 계산하는 알고리즘
  let maxValue = 0;
  let maxKey = null;

  countArray.forEach((item) => {
    if (item.count > maxValue) {
      maxValue = item.count;
      maxKey = item.key;
    }
  });

  let 최종캐릭터 = characters[maxKey];
  console.log(최종캐릭터);

  res.send(최종캐릭터);
});
