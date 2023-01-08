function os_정보() {
  const os = require('os');

  console.log(os.EOL === '\n'); // 맥 os 줄바꿈
  console.log(os.EOL === '\r\n'); // window os 줄바꿈
  console.log(os.cpus()); // 해당 os 의 cpu 정보
};
os_정보();