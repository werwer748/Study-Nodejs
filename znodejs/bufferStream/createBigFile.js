/*
    큰  파일 만들기
    >1GB 정도의 파일을 만들어 봄
    ㄴ createWriteStream으로 만들어야 메모리 문제가 생기지 않음
*/

 const fs = require('fs');
 const file = fs.createWriteStream('./big.txt');

 for(let i = 0; i<=10000000;i++){
     file.write('안녕하세요. 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요!\n');
 };
 file.end();