/*
    순환참조
    - 두개의 모듈이 서로를 require하는 상황을 조심해야 함
    ㄴ dep1이 dep2를 require하고, dep2가 dep1을 require함
    ㄴ dep1의 module exports가 함수가 아니라 빈 객체가 됨(무한 반복을 막기 위해 의도 됨)
    ㄴ 순환참조하는 상황이 나오지 않도록 하는 게 좋음.
*/

const dep2 = require('./dep2');
console.log('require dep2',dep2);

module.exports = () => {
    console.log('dep2',dep2);
}