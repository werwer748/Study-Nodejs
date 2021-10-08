/*
    process.exit(코드)
    > 현재의 프로세스를 멈춤
    ㄴ 코드가 없거나 0이면 정상 종료
    ㄴ 이외의 코드는 비정상 종료를 의미함
*/

let i = 1;
setInterval(()=>{
    if(i===5){
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i+=1;
},1000);