/*
    pbkdf2
    >컴퓨터의 발달로 기존 암호화 알고리즘이 위협받고 있음
    ㄴ sha512가 취약해지면 sha3으로 넘어가야함
    ㄴ 현재는 pbkdf2나, bcrypt,scrypt 알고리즘으로 비밀번호를 암호화
    ㄴ Node는 pbkdf2와 scrypt 지원

    >컴퓨터의 발달로 기존 암호화 알고리즘이 위협받고 있음
    ㄴ crypto.randomBytes로 62바이트 문자열 생성 -> salt 역할
    ㄴ pbkdf2 인수로 순서대로 비밀번호, salt, 반복횟수, 출력 바이트, 알고리즘
    ㄴ 반복 횟수를 조정해 암호화하는데 1초 정도 걸리게 맞추는 것이 권장됨
*/

const crypto = require('crypto');

crypto.randomBytes(64,(err,buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호',salt,100000, 64, 'sha512', (err,key)=>{
        console.log('password:', key.toString('base64'));
    })
});