let count = 0;

const plus = (num) => count += num;

const getCount = () => console.log(count);

// 모듈 파일에서 만들어준 함수를 
module.exports.plus = plus;
module.exports.이름이_getCount_가_아니라도_쓸_수_있다 = getCount;