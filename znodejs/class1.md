1. 노드란? 
-자바스크립트 런타임(실행기?) 
-서버의 역할도 수행할 수 있다. 
-자바스크립트로 작성된 서버를 실행할 수 있다.
-http/https/http2 모듈을 제공

2. 내부구조?
V8: 오픈소스 자바스크립트엔진
libuv: 비동기 I/O를 가능하게 한다.(C++)

3. 특성?
-이벤트 기반(이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식)
-논블로킹: 오래걸리는 함수를 백그라운드로 보내서 다음코드가 먼저 실행되게 하고 나중에 오래 걸리는 함수를 실행
(순차적 실행이아니다 like비동기식)

4. 프로세스와 스레드
개념이 좀 어려움
프로세스라는 큰 박스안에 스레드라는 작은 박스가 정렬되어있다.
{
   프로세스: 운영체제에서 할당하는 작업의 단위, 프로세스간 자원 공유 X
   스레드: 프로세스 내에서 실행되는 작업의 단위, 부모 프로세스 자원 공유
}
중요한 점!
노드 프로세스는 멀티 스레드이지만 직접 다룰 수 있는 스레드는 하나이기 때문에 싱글 스레드라고 표현
근데 엄밀히말하면 싱글은아니고...때문에 노드는 주로 멀티 스레드 대신 멀티 프로세스를 활용한다.

5. 서버로서의 노드
노드는 서버가 아니지만 서버를 구성할 수 있게하는 모듈을 제공!

-노드 서버의 장점 {
   멀티 스레드 방식에 비해 컴퓨터 자원을 적게 사용함,
   I/O 작업이 많은 서버로 적합,
   멀티 스레드 방식보다 쉬움,
   웹 서버가 내장되어 있음,
   자바스크립트를 사용함,
   JSON 형식과 호환하기 쉬움
}

-노드 서버의 단점 {
   싱글 스레드라서 CPU 코어를 하나만 사용함,
   CPU 작업이 많은 서버로는 부적합,
   하나뿐인 스레드가 멈추지 않도록 관리해야함,
   서버 규모가 커졌을 때 서버를 관리하기 어려움,
   어중간한 성능(언어의 한계?)
}