/*
    양방향 암호화
    >대칭형 암호화(암호문 복호화 가능)
    ㄴ key가 사용됨
    ㄴ 암호화할 때와 복호화 할 때 같은 key를 사용해야 함

    >crypto.createCipheriv(알고리즘,키,iv): 암호화 알고리즘과 키, 초기화벡터를 넣어줍니다.
    ㄴ 암호화 알고리즘은 aes-256-cbc를 사용했습니다. 다른 알고리즘도 사용 가능
    ㄴ 사용가능한 알고리즘 목록은 crypto.getCiphers()를 하면 볼 수 있습니다.
    ㄴ 키는 32바이트, 초기화벡터(iv)는 16바이트로 고정입니다.

    >cipher.update(문자열,인코딩,출력 인코딩): 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어줍니다.
    ㄴ 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용합니다.

    >cipher.final(출력 인코딩): 출력 결과물의 인코딩을 넣어주면 암호화가 완료됩니다.

    >crypto.createDecipheriv(알고리즘,키,iv): 복호화할 때 사용합니다.
    암호화할 때 사용했던 알고리즘과 키, iv를 그대로 넣어주어야 합니다.

    >decipher.update(문자열, 인코딩, 출력 인코딩): 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣어줍니다.
    ㄴ createCipher의 update()에서 utf8, base64 순으로 넣었다면 createDeciper의 update()에서는
    base64m utf8 순으로 넣으면 됩니다.

    >decipher.final(출력 인코딩): 복호화 결과물의 인코딩을 넣어줍니다.
*/

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm,key,iv);
let result = cipher.update('암호화할 문장','utf8','base64');
result += cipher.final('base64');
console.log('암호화', result);

const decipher = crypto.createDecipheriv(algorithm,key,iv);
let result2 = decipher.update(result,'base64','utf8');
result2 += decipher.final('utf8');
console.log('복호화',result2);