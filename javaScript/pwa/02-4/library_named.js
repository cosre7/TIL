// 외부와 공유할 conHello와 fnPlusNumbers라는 상수와 함수 선언
const conHello = '안녕하세요!';
const fnPlusNumbers = (pNum1, pNum2) => pNum1 + pNum2;

// 외부에서 사용할 수 있도록 내보내기
export {conHello, fnPlusNumbers};