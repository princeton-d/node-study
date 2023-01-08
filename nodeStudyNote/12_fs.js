function 파일_이름_변경하기() {
  const fs = require('fs');

  // 파일 이름을 조작하는 함수
  //fs.renameSync('기존파일이름', '변경할파일이름') 동기 동작방식, try, catch 사용
  try {
    fs.renameSync('./12_module.txt', './12_module_change.txt');
  } catch (error) {
    console.error(error);
  }

  //fs.rename() 비동기 동작방식, 콜백 함수 사용
  fs.rename('./12_module_change.txt', './12_module.txt', error => console.error(error));

  //fs.promises() 프로미스를 활용한 동작방식
  fs.promises.rename('./12_module2.txt', './12_module2_change.txt')
    .then((e) => console.log(e))
    .catch(error => console.error(error))
}
// 파일_이름_변경하기()

// -------------------------------------

function promises__사용한_파일_조작() { // 비동기라서 순서가 정확하지 않을 수 있다.
  const fs = require('fs').promises;

  fs.readFile('./12_module.txt', 'utf8')
    .then((data) => console.log(data))
    .catch(console.error);

  fs.writeFile('./12_module.txt', 'hello, websteak!! hi~!')
    .catch(console.error)

  fs.appendFile('./12_module.txt', '\nhello, websteak!!!')
    .catch(console.error)
}
promises__사용한_파일_조작();