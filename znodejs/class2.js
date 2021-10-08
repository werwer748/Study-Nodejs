//호출 스택

//*동기코드
function first(){
    second();
    console.log("첫 번째");
}

function second(){
    third();
    console.log("두 번째");
}

function third(){
    console.log("세 번째");
}
first();

/*
Anonymous는 가상의 전역 컨텍스트(항상 있다고 생각하는게 좋음)
함수 호출 순서대로 쌓이고, 역순으로 실행됨
함수 실행이 완료되면 스택에서 빠짐
LIFO 구조라서 스택이라고 불림
*/

//* 비동기코드
function run(){
    console.log("3초 후 실행");
}
console.log("시작");
setTimeout(run,3000);
console.log("끝");
/*
시작 -> 끝 -> 3초후실행 순서로 실행됨
호출스택만으로 설명이 불가능
호출스택 + 이벤트 루프로 설명할 수 있음
*/

/*
이벤트 루프: 이벤트 발생(setTimeout 등)시 호출할 콜백 함수들(ex.run)을 관리하고, 호출할 순서를 결정하는 역할
백그라운드: 타이머나 I/O 작업 콜백 함수들이 순서대로 기다리는 공간
테스크 큐: 이벤트 발생 후 호출되어야 할 콜백 함수들이 순서대로 기다리는 공간
-- 이 세 개념의 사이클을 이해해야 한다. --

메모리(run)
*/