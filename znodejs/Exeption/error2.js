/*
    노드 비동기 메서드의 에러
    >노드 비동기 메서드의 에러는 따로 처리하지 않아도 됨
    ㄴ 콜백 함수에서 에러 객체 제공
*/

const fs = require('fs');

setInterval(()=>{
    fs.unlink('./abcdefg.js',(err) => {
        if(err){
            console.log(err);
        }
    });
},1000);