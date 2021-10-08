/*
    파일 쓰는 스트림 사용하기
    >fs.createWriteStream
    ㄴ createReadStream에 인자로 파일 경로 전달
    ㄴ write로 chunk입력, end로 스트림 종료
    ㄴ 스트림 종료시 finish 이벤트 발생
*/

const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish',()=>{
    console.log('파일쓰기 완료');
});

writeStream.write('이 글을 씁니다 \n');
writeStream.write('한번 더 씁니다.');
writeStream.end();