/*
 노드로 http 요청에 응답하는 노드 서버
 ㄴ createServer로 요청 이벤트에 대기
 ㄴ req 객체는 요청에 관한 정보가, res 객체는 응답에 관한 정보가 담겨있음
*/

const http = require('http');

http.createServer((req,res)=>{
    //여기에 어떻게 응답할지를 적는다.
});