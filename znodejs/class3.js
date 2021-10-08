//TODO var,let,const

/*
 ES2015부터 const,let!
 가장 큰 차이점: 블록 스코프!(var은 함수스코프)
*/
if(true){
    var x = 3;
}
console.log(x); //3

if(true){
    const y = 3;
}
console.log(y); //undefined
//* 기존: 함수스코프(function(){}이 스코프의 기준점)
//* 다른 언어와는 달리 if나 for,while은 영향을 미치지 못함
//* const와 let은 함수 및 블록({})에도 별도의 스코프를 가짐

//? const
const a = 5;
a = 5 //에러

const b = { name:'zzzz'};
b.name = 'abcd';

let c = 5;
c = 3;
c= 10;