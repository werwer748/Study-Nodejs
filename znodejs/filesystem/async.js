/*
    동기 메서드와 비동기 메서드
    >노드는 대부분의 내장 모듈 메서드를 비동기 방식으로 처리
    ㄴ 비동기는 코드의 순서와 실행 순서가 일치하지 않는다
    ㄴ 일부는 동기 방식으로 사용 가능
    ㄴ 우측 코드 콘솔 예측해보기
*/

const fs = require('fs');

console.log('시작');

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
});

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});

fs.readFile('./writeme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝')