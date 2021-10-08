//TODO 구조분해 할당

const example = {a:123, b:{c:135,d:146}}
// const a = example.a;
// const d = example.b.d;

const { a,b:{d}} = example;
console.log(a); //123
console.log(d); //146

arr = [1,2,3,4,5];
// const x = arr[0]
// const y = arr[1]
// const z = arr[4]
const [x,y,,,z] = arr;

var candyMachine1 = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine1.getCandy;
var count = candyMachine1.status.count;
console.log(getCandy,count)

const candyMachine2 = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
}
// const {getCandy, status:{ count }} = candyMachine2;
// console.log(candyMachine2)