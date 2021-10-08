/*
 Promise.resolve(성공리턴값): 바로 resolve하는 프로미스
 Promise.reject(실패리턴값): 바로 reject하는 프로미스
*/

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1,promise2])
.then((result)=>{
    console.log(result); //['성공1','성공2']
})
.catch((error)=>{
    console.error(error);
});

/*
 Promise.all(배열): 여러개의 프로미스를 동시에 실행
 하나라도 실패하면 catch로 감
 allSettled로 실패한 것만 추려낼 수 있음
*/