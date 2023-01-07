function 콘솔() {
  // 로그들이 지저분하게 쌓여 있다면 클리어로 깨끗하게 지워보세요~
  function 콘솔과_클리어() {
    console.log('This is console log') // 말하지 않아도 콘솔 로그는 다 알겠지
    console.clear(); // 기존에 찍어뒀던 모든 콘솔 로그들을 지워준다.
    console.log('This is console log') // 그래서 지금처럼 두개의 로그를 입력해줬지만 터미널에는 지금 이 로그만 출력이 된답니다.
  }
  // 콘솔과_클리어()

  // -----------------------------

  // 로그의 심각성에 따라서 각각 다른 레벨의 로그를 남길 수 있다.
  function 로그들() {
    console.log('그냥 로그') // 개발중에 사용하면 꿀이죠?
    console.info('이건 나도 처음 사용해봐요.') // 개발자들에게 알려주면 좋은 정보를 로그로 남기면 좋다고 하는데 보통 주석을 많이 사용하지 않나요?
    console.warn('경고 경고!!') // 치명적인 에러는 아니지만 주의를 요할때 경보!
    console.error('이건 사용해보신 분들이 좀 많죠? 에러가 생겼어요~~') // 에러! 사용자 에러! 시스템 에러!!
  }
  // 로그들()

  // -----------------------------

  // assert -> 첫번째 인자가 false 일때만 출력이 된다.
  function 어썰트() {
    console.assert('web' === 'steak', 'not same!') // web 은 steak 가 아니니까 false 라서 not same! 가 출력이 되겠군요
    console.assert('web' === 'web', 'same!') // web 은 web 이니까 same! 는 출력이 되지 않을거같네요
  }
  // 어썰트()

  // -------------------------

  // 객체를 조금 더 보기 좋게 다듬어서 로그로 보고싶다면 table 를 사용해보자.
  function 테이블() {
    const name = { firstName: 'web', lastName: 'steak', 특징: { 성별: '남자', 나이: 29 } } // 객체를 하나 선언해주고

    console.log(name) // 우리가 평소에 자주 보던 모습의 로그가 나올것이다.
    console.table(name) // 테이블 형식으로 잘 정리된 로그가 나온다.
    console.dir(name, { // 다양한 속성을 추가한 로그를 볼 수 있다.
      showHidden: true,
      colors: false, // 값의 색깔이 변하지 않음
      depth: 2 // 0으로 하면 객체 안의 객체의 디테일을 보지 않을 수 있고 1, 2 이렇게 증가할 때마다 객체안의 객체 1개, 2개 까지의 디테일을 보도록 설정할 수 있음
    })
  }
  // 테이블()

  // ----------------------------

  // 코드의 실행이나 연산시간을 파악해볼 수 있는 코드도 있다. 성능을 확인해볼때 유용해보인다.
  function time_과_timeEnd() {
    console.time('숫자연산') // 시작!
    for (let i = 0; i < 9000000000; i++) {

    }
    console.timeEnd('숫자연산') // 90억번의 연산을 하려면 얼마나 걸릴까요?
  }
  // time_과_timeEnd()

  // ---------------------------

  // 특정 함수가 몇번이나 호출되는지 카운트해볼 수 있는 console.count
  function 카운트_하기() {
    function countFunc() {
      console.count('카운트') // countFunc가 몇번 실행되는지 확인해볼 수 있다.
    }

    function forLoop(num) { // 이 함수는 신경쓰지 않으셔도 됩니다.
      for (let i = 0; i < num; i++) {
        countFunc()
      }
    }
    forLoop(5) // 숫자를 바꿔보세요
  }
  // 카운트_하기()

  // --------------------------

  // 디버깅 할 때 유용하다고 하는 console.trace
  function 디버깅_할_때_유용한_trace() {
    function one() {
      two()
    }

    function two() {
      three()
    }

    function three() {
      console.log('three')
      console.trace() // 나를 어디서 호출하였는가? 관련 경로를 볼 수 있다.
    }

    one()
  }
  // 디버깅_할_때_유용한_trace()
}
콘솔()