/*
    스레드풀 알아보기
    >fs. crypto, zlib 모듈의 메서드를 실행할 때는 백그라운드에서 동시에 실행됨
    ㄴ 스레드풀이 동시에 처리해줌

    > UV_THREADPOOL_SIZE = 개수
*/

const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('1: ',Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('2: ', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('3: ', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('4: ', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('5: ', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('6: ', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('7: ', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512',()=>{
    console.log('8: ', Date.now() - start);
});