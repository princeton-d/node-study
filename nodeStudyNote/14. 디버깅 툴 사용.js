function 디버깅_툴_사용() {
  function forLoop() {
    console.log('for loop 에 오신 여러분을 환영합니다~')
    for (let i = 0; i < 10; i++) {
      console.log(`${i + 1}번째 loop 에요~`);
    };
  };

  function calc(x, y) {
    console.log('안녕하세요?');
    const result = x + y;
    console.log('result: ' + result);
    forLoop();
    return result;
  };

  calc(5, 10);
};
디버깅_툴_사용()