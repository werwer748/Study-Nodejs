/*
    프로미스의 에러
    >프로미스의 에러는 따로 처리하지 않아도 됨
    ㄴ 버전이 올라가면 동작이 바뀔 수 있음
*/

const fs = require('fs').promises;

setInterval(()=>{
    fs.unlink('./abcdefg.js')
},1000);