/*
    require의 특성
    몇 가지 알아둘만한 특성
    ㄴ require가 제일 위에 올 필요는 없음
    ㄴ require.cache에 한번 require한 모듈에 대한 캐슁 정보가 들어있음
    ㄴ require.main은 노드 실행 시 첫 모듈을 가리킴.
*/

console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요!';

require('./var'); //이 파일을 가져와 쓰지않고 실행만 한다.

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
//다양한 방법으로 접근가능 활용방법도 무궁무진할듯....
console.log(require.main === module);
console.log(require.main.filename);