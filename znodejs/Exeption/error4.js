/*
    예측 불가능한 에러 처리하기
    >최후의 수단으로 사용
    ㄴ 콜백 함수의 동작이 보장되지 않음
    ㄴ 따라서 복구 작업용으로 쓰는 것은 부적합
    ㄴ 에러 내용 기록용으로만 쓰는 게 좋음
*/

process.on('uncaughtException',(err)=>{
    console.error('예기치 못한 에러',err);
});

setInterval(()=>{
    throw new Error('서버를 고장내주마!');
},1000);

setTimeout(()=>{
    console.log('실행됩니다.')
},2000);