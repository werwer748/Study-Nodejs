/*
    이벤트 만들고 호출하기
    >event 모듈로 커스텀 이벤트를 만들 수 있음
    ㄴ 스트림에 쓰였던 on('data'), on('end') 등과 비교

    ㄴ on(이벤트명, 콜백): 이벤트 이름과 이벤트 발생 새의 콜백을 연결해줍니다.
    이렇게 연결하는 동작을 이벤트 리스팅 이라고 부릅니다. event2처럼 이벤트 하나에 여러개를 달아줄 수도 있습니다.

    ㄴ addListener(이벤트명, 콜밸): on과 기능이 같습니다.

    ㄴ emit(이벤트명): 이벤트를 호출하는 메서드입니다. 이벤트 이름을 인자로 넣어주면
    미리 등록해뒀던 이벤트 콜백이 실행 됩니다.

    ㄴ once(이벤트명,콜백): 한 번만 실행되는 이벤트입니다.
    myEvent.emit('event3')을 두 번 연속 호출했지만 콜백이 한 번만 실행 됩니다.

    ㄴ removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거합니다.
    역시 event5의 콜백도 호출되지 않습니다.

    ㄴ removeListener(이벤트명,리스너): 이벤트에 연결된 리스너를 하나씩 제거합니다.
    역시 event5의 콜백도 호풀되지 않습니다.

    ㄴ off(이벤트명,콜백): 노드 10버전에서 추가된 메서드로, removeListener와 기능이 같습니다.

    ㄴ listenerCount(이벤트명): 현재 리스너가 몇개 연결되어 있는지 확인합니다.
*/

//* 커스텀 이벤트 예제

const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1',()=>{
    console.log('이벤트 1');
});
myEvent.on('event2',()=>{
    console.log('이벤트 2');
});
myEvent.on('event2',()=>{
    console.log('이벤트 2 추가');
});
myEvent.once('event3',()=>{
    console.log('이벤트 3');
});//한번만 실행 됨

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.once('event4',()=>{
    console.log('이벤트 4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4'); //실행 X

const listener = () => {
    console.log('이벤트 5')
};
myEvent.on('event5',listener);
myEvent.removeListener('event5',listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));