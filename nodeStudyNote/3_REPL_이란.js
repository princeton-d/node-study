/**
 * REPL: R(read 인풋(정보)을 받아서)E(eval 연산을 한 후에)P(print 연산한 결과를 출력하고 나서)L(loop 반복해준다.)
 */
function REPL_노드로_간단하게_살펴보기() {
  console.log(`
터미널에서 $ node 를 입력하면 브라우저 환경이 아닌 터미널에서 javascript 환경을 만들어줄 수 있다.
터미널에서 $ node 를 입력하면 코드를 입력할 수 있게 되는데 간단하게
console.log('hello world') 를 입력해보자. 그렇다면 기존에 자바스크립트 파일에서 콘솔을 입력해서 브라우저 환경에서 콘솔이 출력되는 것과 동일하게 hello world 라는 출력 결과를 확인해볼 수 있다.
또한 변수나 함수도 동일하게 만들어서 확인해볼 수 있다.
노드 환경을 종료하기 위해서는 control c 를 두번 누르면 다시 터미널로 돌아올 수 있다.
간단하게 노드 환경을 봤지만 여기에서 정보를 받아서 연산을 하고 결과를 출력해주고 이를 무한히 반복해서 사용할 수 있는 REPL 을 모두 경험해볼 수 있다.
`)
}