/*
    child_process
    >노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용
    ㄴ 현재 노드 프로세스 외에 새로운 프로세스를 띄워서 명령을 수행함
    ㄴ 명령 프롬프트의 명령어인 dir을 노드를 통해 실행(리눅스라면 ls를 대신 적을 것)
*/

const exec = require('child_process').exec;

var process = exec('ls');

process.stdout.on('data',function(data){
    console.log(data.toString());
}); //실행 결과

process.stderr.on('data',function(data){
    console.error(data.toString());
});