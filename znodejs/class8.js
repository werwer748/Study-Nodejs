//TODO Promise, async/await

/*
    Promise? 내용이 실행 되었지만 결과를 아직 반환하지 않은 객체
    then을 붙이면 결과를 반환함
    실행이 완료되지 않았으면 완료된 후에 then 내부함수가 실행됨

    resolve(성공리턴값) -> then으로 연결
    reject(실패리턴값) -> catch로 연결
    finally 부분은 무조건 실행됨
*/
const condition = true; //true면 resolve, false면 reject
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }
    else {
        reject('실패');
    }
});
//다른 코드가 들어갈 수 있음
promise
.then((message)=>{
    console.log(message); // 성공(resolve)한 경우 실행
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('무조건');
});