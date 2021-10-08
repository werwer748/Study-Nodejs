/*
    동기 메서드 사용하기
*/

const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());

console.log('끝');