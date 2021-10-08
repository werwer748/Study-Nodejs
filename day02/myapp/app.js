const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
//{ extended: true } : nested object 를 지원한다.

app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());
app.get('/',(req,res)=>res.send('Hello World!'));

app.listen(3000,()=>console.log('Example app listening on port 3000!'));