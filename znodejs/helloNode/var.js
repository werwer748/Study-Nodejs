//TODO 모듈!
/*
    노드는 자바스크립트 코드를 모듈로 만들 수 있음
    ㄴ 모듈: 특정한 기능을 하는 함수나 변수들의 집합
    ㄴ 모듈로 만들면 여러 프로그램에서 재사용 가능
*/

const odd ="홀수입니다.";
const even = "짝수입니다.";

//! module.exports === exports === { 빈객체 }
//* 두가지 이상을 exports하고 싶을때

/*
exports.odd = odd;
exports.even = even;
*/

module.exports = {
    odd, //odd: odd
    even //even: even
    //[odd,even] -> '홀수입니다.','짝수입니다.'
};

/*
    exports와 module.exports를 같이 쓸수없다
    참조관계라 끊긴다
*/