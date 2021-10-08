/*
    fs 프로미스
    >콜백 방식 대신 프로미스 방식으로 사용 가능
    ㄴ require('fs').promises
    ㄴ 사용하기 훨씬 더 편해서 프로미스 방식을 추천
*/
const fs = require('fs').promises;

fs.readFile('./readme.txt')
.then((data)=>{
    console.log(data);
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
});