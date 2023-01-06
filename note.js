function package_json_만들기() { // package.json 만들기
  console.log('$ npm init 입력 후 설정을 해주면 내가 npm 에서 다운받은 것들을 한 눈에 보면서 관리할 수 있는 package.json 을 만들 수 있다.')
}

function 패키지_다운로드() { // 패키지 다운로드
  console.log(`
$ npm install (패키지 이름) 을 사용해서 다양한 패키지들을 다운로드 할 수 있다.
만약 해당 프로젝트와 함께 다른 모든 프로젝트에서도 패키지를 전역적으로 사용하고싶다면 $ npm install -g (패키지 이름) 을 입력하면 글로벌하게 전역적으로 패키지를 사용할 수 있다.
맥os 에서 $ npm install -g (패키지 이름) 이 작동이 안된다면 $ sudo npm install -g (패키지 이름) 을 사용하면 다운로드가 가능하다.`)
}

function 패키지_삭제() { // 패키지 삭제
  console.log(`
다운로드 했던 패키지를 삭제하려면 $ npm uninstall (패키지 이름)을 입력해주면 간단하게 삭제할 수 있다.`)
}

function get_메소드() { // get 메소드
  const fs = require('express'); // express 호출
  const app = fs() // 아직 뭔지 잘 모르겠음

  app.listen(3000, () => { console.log('3000번 포트 열었음') }) // 3000번 포트를 열 수 있도록 해줌

  /**
   * get: HTTP 메소드
   * '/': 라우팅
   * (req, res) => {}: 콜백 함수
   */
  app.get('/', (req, res) => { // '/' 은 보통 home 을 가리킨다. home 에 요청(req)과 응답(res)을 가지고 서버와 통신할 수 있도록 한다.
    /**
     * sendFile(): 파일을 호출한다.
     * __dirname: 파일 이름
     * '/index.html/': 파일의 상대경로
     */
    res.sendFile(__dirname + '/index.html')
  })
}