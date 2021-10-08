/*
    기타 fs 메서드
    >파일을 감시하는 방법(변경 사항 발생 시 이벤트 호출)

    그 외 다양한 메서드는 노드 공식 페이지를 통해 확인
*/

const fs = require('fs');

fs.watch('./target.txt',(eventType, filename)=>{
    console.log(eventType, filename);
});