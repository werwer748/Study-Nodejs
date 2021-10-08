/*
    process.nextTick(콜백)
    > 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리함
    ㄴ 너무 남용하면 다른 콜백 함수들 실행이 늦어짐
    ㄴ 비슷한 경우로 promise가 있음(nextTick처럼 우선순위가 높음)
    ㄴ 아래 예제에서 setImmediate, setTimeout보다 promise와 nextTick이 먼저 실행됨
*/

setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});

setTimeout(()=>{
    console.log('timeout');
},0);

Promise.resolve().then(()=>console.log('promise'));