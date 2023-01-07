/**
 * 노드에서 파일 단위로 코드를 모듈화해서 관리할 수 있다.
 */
function 노드에서_모듈_export_require_하는_방법() {
  const count = require('./8_모듈.js'); // require 함수의 매개변수에 경로를 입력해서 해당 파일에서 export 해준 코드들을 import 할 수 있다.

  count.plus(5);
  count.이름이_getCount_가_아니라도_쓸_수_있다();
}
// 노드에서_모듈_export_require_하는_방법();

// ---------------------------

import { plus2, getCount2 } from './8_모듈_최신_문법.js'; // import 는 최상위 스코프에서만 사용할 수 있다. 확장자명(.js) 꼭 붙여주자
function 최신_문법의_import_export() {
  plus2(10);
  getCount2()
}
최신_문법의_import_export()