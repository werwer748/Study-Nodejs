타이머 메서드

>set 메서드에 clear 메서드가 대응됨
- set 메서드의 리턴 값(아이디)을 clear메서드에 넣어 취소

- setTimeout(콜백 함수,밀리초): 주어진 밀리초(1000분의 1초) 이후에 콜백 함수를 실행
- setInterval(콜백 함수,밀리초): 주어진 밀리초마다 콜백 함수를 반복 실행합니다.
- setImmediate(콜백 함수): 콜백 함수를 즉시 실행

clearTimeout(아이디): setTimeout을 취소
clearInterval(아이디): setInterval을 취소
clearImmediate(아이디):setImmediate를 취소