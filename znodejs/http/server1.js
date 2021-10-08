const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf=8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello Hugo!</p>');
})
.listen(8080);
// .listen(8080,()=>{
//     console.log('8080번 포트에서 서버 대기 중입니다.');
// });

server.on('listening',()=>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error',(error)=>{
    console.error(error);
});

const server1 = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf=8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello Hugo!</p>');
})
.listen(8081);
// .listen(8080,()=>{
//     console.log('8080번 포트에서 서버 대기 중입니다.');
// });

server1.on('listening',()=>{
    console.log('8081번 포트에서 서버 대기 중입니다.');
});
server1.on('error',(error)=>{
    console.error(error);
});

//2,3,4.... 개 가능함