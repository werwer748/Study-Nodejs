const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

const app = express();
app.set('port', process.env.PORT || 3000);

//미들웨어간에도 순서가 중요함
//서비스에 맞게!
app.use(morgan('combined'));
//개발시 dev 배포시 combined
//app.use('요청경로',express.static(__dirname, '실제경로'));
app.use(cookieParser('hugospassword'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'hugospassword',
    cookie: {
        httpOnly: true,
    },
}));
// app.use('/',(req,res,next)=>{
//     if(req.session.id){
//         express.static(path.join(__dirname, 'public')(req,res,next))
//     }
//     else{
//         next();
//     }
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//true => qs
//false => querystring

app.use((req,res,next)=>{
    req.data = 'hugo비번'
    next();
})


//미들웨어
// app.use((req,res,next)=>{
//     console.log('1모든 요청에 실행하고 싶어요');
//     next();
// });

app.get('/', (req, res, next) => {
    // res.setHeader('Content-Type','text/html')
    
    // req.cookies // { mycookie: 'test'}
    
    // res.cookie('name', encodeURIComponent(name),{
    //     expires: new Date(),
    //     httpOnly: true,
    //     path:'/',
    // })
    
    // res.clearCookie('name', encodeURIComponent(name),{
    //     httpOnly: true,
    //     path:'/',
    // })
    
    // req.body.name
    req.data //hugo비번
    res.sendFile(path.join(__dirname, '/index.html'));
    
    //if로 라우트 제어시에 next 활용법
    // if(false){
    //     next('route');
    // }
    // else{
    //     next();
    // }
    
  //* 경로 처리할때는 확실하게!
  //res.json({hello:'HugoK'});
  //res.render()
}, (req, res) => {
    console.log('실행됨?');
});

app.get('/', (req, res) => {
    console.log('실행된다요!!');
});

app.post('/', (req, res) => {
  res.send('Hello, Express');
});

//와일드카드
// app.get('/category/:name',(req,res)=>{
//     res.send(`hello wildcard`);
//     //라우터는 위에서 아래로 실행되기때문에 순서가 중요함
//     //큰 범위를 묶는 라우터의 경우 아래에 위치하도록 해야한다.
// });

app.get('/about', (req, res) => {
  res.send('Hello, Express');
});


// app.get('*', (req, res) => {
//   res.send('Hello, *');
//   //모든 요청에 반응함
// });

app.use((req,res,next)=>{
    res.status(404).send('404');
});

app.use((err,req,res,next)=>{
    //에러 미들웨어에는 꼭 네가지가 다 포함되어 있어야함.
    console.error(err);
    res.send('에러가 났어용');
});


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});