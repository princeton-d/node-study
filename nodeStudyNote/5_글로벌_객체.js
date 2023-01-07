/**
 * 노드 환경에서의 global 은 브라우저 환경에서의 window 와 같은 전역 객체이다.
 */
function 글로벌_객체() {
  const fs = require('fs'); // 노드 모듈을 import 해오는것임

  console.log(global);

  global.webSteak = (str) => { // 글로벌 전역 객체에 webSteak 라는 함수를 정의하게 된다면 전역적으로 webSteak 함수를 사용할 수 있다.
    console.log(`${str} webSteak!`);
  };

  global.webSteak('글로발'); // global 전역 객체에 있는 webSteak 함수를 실행해줄 수 있다.
  webSteak('글로발을 생략한'); // 물론 우리가 브라우저 환경에서 window.어쩌구저쩌구 이런 형식으로 함수를 호출하지 않고 window 를 생략하는것처럼 global 도 생략해줄 수 있다.
};

글로벌_객체();