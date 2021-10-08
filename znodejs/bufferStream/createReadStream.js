/*
    파일 읽는 스트림 사용하기
    >fs.createReadStream
    ㄴ createReadStream에 인자로 파일 경로와 옵션 객체 전달
    ㄴ highWaterMark 옵션은 버퍼의 크기(바이트 단위, 기본값 64KB)
    ㄴ data(chunk 전달),end(전달완료),error(에러 발생) 이벤트 리스터와 같이 사용
*/

const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt',{ highWaterMark: 16 });
const data = [];

readStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

readStream.on('end',()=>{
    console.log('end : ',Buffer.concat(data).toString());
});

readStream.on('error',(err)=>{
    console.error('error : ',err);
});