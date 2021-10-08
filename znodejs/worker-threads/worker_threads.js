/*
    worker_threads
    >노드에서 멀티 스레드 방식으로 작업할 수 있음
    ㄴ isMainThread: 현재 코드가 메인 스레드에서 실행되는지, 워커 스레드에서 실행되는지 구분
    ㄴ 메인 스레드에서는 new Worker를 통해 현재파일(__filename)을 워커 스레드에서 실행시킴
    ㄴ worker.postMessage로 부모에서 워커로 데이터를 보냄
    ㄴ parentPort.on('message')로 부모로부터 데이터를 받고, postMessage로 데이터를 보냄
*/

const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if(isMainThread){ // 부모일 떄
    const threads = new Set();
    threads.add(new Worker(__filename,{
        workerData:{ start: 1 },
    }));
    threads.add(new Worker(__filename,{
        workerData:{ start: 2 },
    }));
    for(let worker of threads){
        worker.on('message',message => console.log('워커로부터', message));
        worker.on('exit',()=>{
            threads.delete(worker);
            if(threads.size === 0){
                console.log('워커 끝~')
            }
        });
    }
}
else {
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}