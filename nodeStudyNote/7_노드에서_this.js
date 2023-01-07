// 이번에는 함수로 감쌀 수 없답니다. 함수로 감싸면 this 가 global 이 되어버림
// 물론 생성자 함수, 클레스로 감싸면 this 는 생성자 함수가 되어버림
console.log(this) // 브라우저에서는 전역에서의 this 는 global(window) 이다.
console.log(`전역에서의 this 는 global 인가?: ${this === global ? '맞아요' : '아닌데여'}`)
console.log(`전역에서의 this 는 module.exports 인가? ${this === module.exports ? '맞아요' : '아닌데여'}`)