/*
    비동기 메서드로 순서 유지하기
    >프로미스로 극복
*/

const fs = require('fs').promises;
/*
console.log('시작');
fs.readFile('./readme.txt')
.then((data)=>{
    console.log('1번', data.toString());
    return fs.readFile('./readme.txt');
})
.then((data)=>{
    console.log('2번', data.toString());
    return fs.readFile('./readme.txt');
})
.then((data)=>{
    console.log('3번', data.toString());
    console.log('끝');
})
.catch((err)=>{
    console.error(err);
});
*/
async function main(){
    let data = await fs.readFile('./writeme.txt');
    console.log('1번', data.toString());

    data = await fs.readFile('./writeme.txt');
    console.log('2번', data.toString());

    data = await fs.readFile('./writeme.txt');
    console.log('3번', data.toString());
}
main();