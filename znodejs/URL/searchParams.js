/*
    searchParams
    >WHATWG 방식에서 쿼리스트링(search) 부분처리를 도와주는 객체

    getAll(키): 키에 해당하는 모든 값들을 가져옵니다. category 키에는 두 가지 값, 즉 nodejs와 javascript의 값이 들어 있습니다.
    get(키): 키에 해당하는 첫 번째 값만 가져옵니다.
    has(키): 해당 키가 있는지 없는지를 검사합니다.
    keys(): searchParams의 모든 키를 반복기(iterator, ES2015 문법) 객체로 가져옵니다.
    values(): searchParams의 모든 값을 반복기 객체로 가져옵니다.
    append(키, 값): 해당 키를 추가합니다. 같은 키의 값이 있다면 유지하고 하나 더 추가합니다.
    set(키, 값): append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가합니다.
    delete(키): 해당 키를 제거합니다.
    toString(): 조작한 searchParams 객체를 다시 문자열로 만듭니다. 이 문자열을 search에 대입하면 주소 객체에 반영됩니다.
*/

const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript');

console.log('searchParams:', myURL.searchParams);