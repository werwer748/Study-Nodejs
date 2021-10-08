/*
    try catch문
    >기본적으로 try catch문으로 예외를 처리
    ㄴ 에러가 발생할 만한 곳을 try catch로 감쌈
*/

setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('서브를 고장내주마!');
    }
    catch(err){
        console.error(err);
    }
},1000);
