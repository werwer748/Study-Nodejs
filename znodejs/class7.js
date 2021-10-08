//TODO 클래스

//*프로토타입 문법을 깔끔하게 작성할 수 있는 Class 문법
//*Constructor(생성자),Extends(상속) 등을 깔끔하게 처리할 수 있음
//*코드가 그룹화되어 가독성이 향상 됨
//*Class 내부에 관련된 코드들이 묶임
//*Super로 부모 Class 호출
//*Static 키워드로 클래스 메서드 생성

/*
var Human = function(type){
    this.type = type||'human';
};

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breath = function(){
    alert('h-a-a-a-m');
}
*/
class Human {
    constructor(type = 'human'){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breath(){
        alert('h-a-a-a-m');
    }
}
console.log(Human.breath)
/*
var Zero = function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
}

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; //상속하는 부분
Zero.prototype.sayName = function(){
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human','Zero','Cho');
Human.isHuman(oldZero); //true
console.log(oldZero);
*/
class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breath();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human','Zero','Cho');
Human.isHuman(newZero); //true
console.log(newZero);