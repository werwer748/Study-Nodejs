/*
    fs로 파일 만들기
    >파일을 만드는 예제
*/

const fs = require('fs').promises;

fs.writeFile('./writeme.txt','덮어써지나요?')
.then(()=>{
    return fs.readFile('./writeme.txt');
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
});