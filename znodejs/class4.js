//TODO 템플릿 문자열,객체 리터럴

var won = 1000;
//var result = '이 과자는' + won + '원입니다.'

const result = `이 과자는 ${won}원 입니다.`;

function a(){}
a();
a``; //태그드 템플릿 리터럴


//ES5
var sayNode = function(){
    console.log('Node');
};
var es='ES';
var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); //Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //Fantastic

const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode(); //Node
newObject.sayJS(); //JS
console.log(newObject.ES6); //Fantastic

/*
    객체의 메서드에 :function을 붙이지 않아도 됨
    { sayNode:sayNode }와 같은 것을 { sayNode }로 축약 가능
    [변수 + 값] 등으로 동적 속성명을 객체 속성 명으로 사용 가능
*/

