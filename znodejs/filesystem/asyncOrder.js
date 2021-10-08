/*
    비동기 메서드로 순서 유지하기
    >콜백 형식 유지
    ㄴ 코드가 우측으로 너무 들어가는 현상 발생(콜백 헬)
*/

const fs = require('fs');

console.log('시작');

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./writeme.txt',(err,data)=>{
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./writeme.txt',(err,data)=>{
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝')
        });
    });
});