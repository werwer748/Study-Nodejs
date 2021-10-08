const {odd,even} = require('./var');
//구조분해할당

function checkOddOrEven(number){
    if(number % 2){
        return odd;
    }
    else{
        return even;
    }
}

module.exports = checkOddOrEven;

//! module.exports(함수일경우) !== exports === {};
//* 함수일경우 객체 참조가 끊긴다.