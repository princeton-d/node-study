function path() {
  const path = require('path');

  console.log(__dirname); // 디렉토리(폴더) 경로
  console.log(__filename); // 현제 파일 경로
  console.log(path.basename(__filename)); // 현제 파일 이름
  console.log(path.basename(__filename, '.js')); // 확장자명 제거한 현제 파일 이름

  const parsed = path.parse(__filename); // 파일의 루트, 경로, 이름 등을 객체에 담아서 반환
  console.log(parsed);
}
path()