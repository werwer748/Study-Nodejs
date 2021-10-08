//TODO 화살표 함수

function add1(x,y){
    return x + y;
}

const add2 = (x,y) => {
    return x+y;
};
//? add2: add1을 함수로 나타낼 수 있음

const add3 = (x,y) => x+y;
//? add3: 함수의 본문이 return만 있는 경우 return 생략

const add4 = (x,y)=> (x+y);
//? add4: return이 생략된 함수의 본문을 소괄호로 감싸줄 수 있음

function not1(x){
    return !x;
}

const not2 = x => !x;
//? not1과 not2도 같은 기능을 함(매개변수 하나일 때 괄호 생략)

var relationship1 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){
        var that = this; //relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend){
            console.log(that.name,friend);
        });
    }
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(friend=>{
            console.log(this.name,friend);
        });
    }
}
relationship2.logFriends();
//? this를 쓸꺼면 function 안쓸꺼면 화살표 함수 구분해서 써야한다.