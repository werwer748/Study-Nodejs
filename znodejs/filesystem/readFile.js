/*
    fs
    >파일 시스템에 접근하는 모듈
    ㄴ 파일/폴더 생성,삭제,읽기,쓰기 가능
    ㄴ 웹 브라우저에서는 제한적이었으나 노드는 권한을 가지고 있음
    ㄴ 파일 읽기 예제
*/

const fs = require('fs');

fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});