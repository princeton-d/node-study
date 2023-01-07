let count = 0;

// package.json 에 "type": "module" 을 입력해주면 최신 문법의 import, export 를 사용할 수 있다.
export const plus2 = (num) => count += num;
export const getCount2 = () => console.log(count);