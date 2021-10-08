/*
    path
    > 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
    ㄴ 운영체제별로 경로 구분자가 다름(Window:'\', POSIX:'/');

    path 모듈 메서드
    path.sep: 경로의 구분자입니다. Window는 \, POSIX는 /입니다.
    path.delimiter: 환경 변수의 구분자입니다. process.env.PATH를 입력하면 여러개의 경로가
    이 구분자로 구분되어 있습니다. Window는 세미콜론(;)이고  POSIX는 콜론(:)입니다.
    path.dirname(경로): 파일이 위치한 폴더 경로를 보여줍니다.
    path.extname(경로): 파일의 확장자를 보여줍니다.
    path.basename(경로,확장자): 파일의 이름(확장자 포함)을 보여줍니다. 
    파일의 이름만 표시하고 싶다면 basename의 두번째 인자로 파일의 확장자를 넣어주면 됩니다.
    path.parse(경로): 파일 경로를 root,dir,base,ext,name으로 분리합니다.
    path.normalize(경로):/나 \를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환해 줍니다.
    path.isAbsolute(경로): 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려줍니다.
    path.relative(기준경로, 비교경로): 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려줍니다.
    path.join(경로,.. .): 여러 인자를 넣으면 하나의 경로로 합쳐줍니다. 상대경로인 ..(부모디렉터리)과
    .(현 위치)도 알아서 처리해줍니다.
    path.resolve(경로,.. .): path.join()과 비슷하지만 차이가 있습니다.
    
    > join과 resolve의 차이: resolve는 /를 절대경로로 처리, join은 상대경로로 처리
    ㄴ 상대경로: 현재 파일 기준. 같은 경로면 점 하나(.), 한단계 상위 경로면 점 두개(..)
    ㄴ 절대경로는 루트 폴더나 노드 프로세스가 실행되는 위치가 기준
    ex)
    path.join('/a','/b','/c'); 결과: /a/b/c
    path.resolve('/a','/b','/c'); 결과 /b/c

    >\\와 \ 차이: \는 윈도경로 구분자, \\는 자바스크립트 문자열 안에서 사용(\가 특수문자라 \\로 이스케이프 해준 것);
    >윈도에서 POSIX path를 쓰고 싶다면: path.posix 객체 사용
    ㄴ POSIX에서 윈도 path를 쓰고 싶다면: path.win32
*/

const path = require('path');

const string = __filename;

console.log('path.sep',path.sep);
console.log('path.delimiter',path.delimiter);
console.log('--------------------------------------------');
console.log('path.dirname()',path.dirname(string));
console.log('path.extname()',path.extname(string));
console.log('path.basename()',path.basename(string));
console.log('path.basename - extname',path.basename(string, path.extname(string)));
console.log('--------------------------------------------');
console.log('path.parse()',path.parse(string));
console.log('path.format()',path.format({
    dir:'/Users/hugo/Desktop/Nodejs/znodejs/OS',
    name:'path',
    ext:'.js'
}));
console.log('path.normalize()',path.normalize('/Users/hugo/Desktop//Nodejs///znodejs///OS'))
console.log('--------------------------------------------');
console.log('path.isAbsolute("/Users")',path.isAbsolute("/Users"))


