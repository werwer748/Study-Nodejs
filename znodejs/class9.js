//TODO async/await
/*
 class8의 프로미스 패턴코드
 async/await으로 한번 더 축약 가능
*/

function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name = 'hugo';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'});
    })
    .then((user)=>{
        //생략
    })
    .catch(err => {
        console.error(err);
    });
}

//! async function의 도입
//* 변수 = await 프로미스;인 경우 프로미스가 resolve된 값이 변수에 저장
//* 변수 await값; 인 경우 그 값이 변수에 저장
//* 에러 처리를 위해 try catch로 감싸주어야함(각각의 프로미스 에러처리르 위해서는 각각을 try,catch로 감싸주어야 함)

// async function findAndSaveUser(Users){
const findAndSaveUser = async (Users) =>{ //화살표 함수도 가능
    try{
        let user = await Users.findOne({});
        user.name = 'hugo';
        user = await user.save();
        user = await Users.findOne({ gender:'m' });
        //생략
    }
    catch(error){
        console.error(error);
    }
}

//! async 함수는 항상 promise를 반환(return)
//* then이나 await를 붙일 수 있음
findAndSaveUser().then(()=>{/* 생략 */});
//또는
async function other(){
    const result = await findAndSaveUser()
}

//! for await of
//* 노드 10부터 지원
//* for await(변수 of 프로미스배열)
//* resolve된 프로미스가 변수에 담겨 나옴
//* await을 사용하기 떄문에 async 함수 안에서 해야함

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await(promise of [propmise1, promise2]){
        console.log(promise);
    }
})();