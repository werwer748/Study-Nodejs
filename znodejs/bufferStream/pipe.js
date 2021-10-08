/*
    스트림 사이에 pipe 사용하기
    >pipe로 여러개의 스트림을 이을 수 있음
    ㄴ 스트림으로 파일을 복사하는 예제
*/

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('writeme2.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream)