//* 예제
function oneMore(){
    console.log('one more');
}
function runs(){
    console.log('run run');
    setTimeout(()=>{
        console.log('wow');
    },0)
    new Promise((resolve)=>{
        resolve('hi');
    })
    .then(console.log);
    oneMore();
}

setTimeout(runs,5000);

/*
    호출스택
    1. anonymous
    2. setTimeout(run,5000) -> 백그라운드로 보냄
    3. anonymous 사라짐
    4. 백그라운드에서 5초 후 -> 테스크 큐로 보냄
    5. 호출스택이 비었으므로 테스크큐에서 호출스택으로 run을 보냄
    6. console.log('run run') 실행
    7. setTimeout(익명,0초) -> 백그라운드로
    8. new Promise(promise + then => 비동기) -> 백그라운드로 then console.log('hi')
    9. oneMore
    10. runs가 호출스택에서 사라짐
    11. 테스크큐로 익명,console.log(hi)넘어옴 (테스크큐에 같이 있어도 우선순위에서 프로미스가 앞서기 떄문에 먼저 후출)
    -promise then/catch,process.nextTick우선순위 앞서는 애들
    12. promise인 hi가 먼저 후출
    13. 그후 익명함수  wow찍힘
*/

//! 이 컨텍스트가 진짜 중요하다 인간 자바스크립트 엔진이 됩시다.