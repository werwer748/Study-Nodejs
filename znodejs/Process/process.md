process
>현재 실행중인 노드 프로세스에 대한 정보를 담고 있음
ㄴ 컴퓨터마다 출력값이 PPT와 다를 수 있음

process.version //설치된 노드의 버전

process.arch //프로세서 아키텍처 정보. arm, ia32등의 값일 수도 있습니다.

process.platform //운영체제 플랫폼 정보. linux나 darwin, freebsd 등의 값일 수도 있습니다.

process.pid // 현재 프로세스의 아이디. 프로세스를 여러 개 가질 때 구분할 수 있습니다.

process.uptime() // 프로세스가 시작된 후 흐른 시간. 단위는 초입니다.

process.execPath //노드의 경로

process.cwd() //현재 프로세스가 실행되는 위치

process.cpuUsage() // 현재 cpu 사용량