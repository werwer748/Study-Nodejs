/*
    querystring
    >기존 노드 방식에서는 url querystring을 querystring모듈로 처리
    ㄴ querystring.parse(쿼리): url의 query 부분을 자바스크립트 객체로 분해해 준다.
    ㄴ querystring.stringify(객체): 분해된 query 객체를 문자열로 다시 조립해 준다.
*/

const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parseUrl.query)
console.log('querystring.parse()',query)
console.log('querystring.stringify()',querystring.stringify(query));