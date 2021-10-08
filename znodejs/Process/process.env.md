process.env
>시스템 환경 변수들이 들어있는 객체
ㄴ 비밀키(데이터베이스 비밀번호, 서드파티 앱 키 등)를 보관하는 용도로도 쓰임
ㄴ 환경 변수는 process.env로 접근 가능

ex)
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

ㄴ 일부 환경 변수는 노드 실행 시 영향을 미침
ex) NODE_OPTIONS(노드 실행 옵션), UV_THREADPOOL_SIZE(스레드풀 개수)
* max-old-space-size는 노드가 사용할 수 있는 메모리를 지정하는 옵션

NODE_OPTIONS = --max-old-space-size=8192
UV_THREADPOOL_SIZE=8