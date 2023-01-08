function os_정보() {
  const os = require('os');

  console.log(os.EOL === '\n'); // 맥 os 줄바꿈
  console.log(os.EOL === '\r\n'); // window os 줄바꿈
  console.log(os.cpus()); // 해당 os 의 cpu 정보
};
// os_정보();

function process_정보() { // 다양한 process 의 정보를 받아올 수 있다.
  const process = require('process');

  console.log(process.execPath); // 현재 실행되고 있는 노드의 위치
  console.log(process.version); // 버전 정보
  console.log(process.pid); // 프로세스의 아이디
  console.log(process.ppid); // 프로세스 부모의 아이디
  console.log(process.platform); // 플렛폼 정보
  console.log(process.env); // 컴퓨터에 저장된 환경 변수의 정보
  console.log(process.uptime());
  console.log(process.cwd()); // 현재 실행하고 있는 노드의 경로
  console.log(process.cpuUsage()); // cpu 사용량

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  /**
   * 현재 수행된 코드들이 전부 실행된 다음에 이 콜백 함수를 테스크 큐에 전달해달라는 의미
   * 테스크 큐에 다른 콜백 함수가 들어있다고 하더라도 nextTick 가 제일 우선적으로 1순위로 테스크 큐에서 실행이 된다 
   */
  process.nextTick(() => {
    console.log('nextTick');
  });
};
process_정보()