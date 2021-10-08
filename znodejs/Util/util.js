/*
    util
    > 각종 편의 기능을 모아둔 모듈
    ㄴ deprecated 와 promisify가 자주 쓰임 
*/

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y)=>{
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);
/*
    util.depreacte: 함수가 deprecated 처리되었음을 알려줍니다.
    ㄴ 첫번째 인자로 넣은 함수를 사용했을 때 경고 메시지가 출력됩니다.
    ㄴ 두번째 인자로 경고 메시지 내용을 넣으면 됩니다.
    함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용합니다.
*/
//! deprecated는 프로그래밍 용어로 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 것이라는 뜻
//! 새로운 기능이 나와서 기존 기능보다 더 좋을 때, 기존 기능을 deprecated 처리하곤 합니다.
//! 이전 사용자를 위해 기능을 제거하지는 않지만 곧 없앨 예정이므로 더 이상 사용하지 말라는 의미입니다.

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((err)=>{
    console.error(err);
});
/*
    util.promisify: 콜백 패턴을 프로미스 패턴으로 바꿔줍니다.
    ㄴ 바꿀 함수를 인자로 제공하면 됩니다. 이렇게 바꾸어두면 async/await 패턴까지 사용할수 있어
    좋습니다.
    ㄴ 3.5.5.1절의 randomBytes와 비교해 볼 것,
    프로미스를 콜백으로 바꾸는 util.callbackify도 있지만 자주 사용되지는 않습니다.
*/