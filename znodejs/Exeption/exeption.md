예외 처리
>예외(Exeption):  처리하지 못한 에러
ㄴ 노드 프로세스/스레드를 멈춤
ㄴ 노드는 기본적으로 싱글 스레드라 스레드가 멈춘다는 것은 프로세스가 멈추는 것
ㄴ 에러 처리는 필수

프로세스 종료하기
>윈도
netstat -ano | findstr 포트
taskkill /pid 프로세스아이디 /f

>맥/리눅스
lsof -i tcp:포트
kill -9 프로세스아이디