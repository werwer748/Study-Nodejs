/*
    파일을 복사하는 방법
*/

const fs = require('fs').promises;

fs.copyFile('readme2.txt', 'writeme2.txt')
.then(()=>{
    console.log('복사 완료');
})
.catch((err)=>{
    console.error(err);
});