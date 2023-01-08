function 타이머() {
  let num = 1;
  const interval = setInterval(() => {
    console.log(num++);
  }, 1000);

  setTimeout(() => {
    console.log('timeout!');
    clearInterval(interval);
  }, 6000);
};
// 타이머()