# Quest 06. 인터넷의 이해

## Introduction
* 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics
* 서버와 클라이언트, 그리고 웹 브라우저
* 인터넷을 구성하는 여러 가지 프로토콜
  * IP
  * TCP
  * HTTP
* DNS

## Resources
* [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
* [IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  * [Online service Traceroute](http://ping.eu/traceroute/)
* [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  * [Wireshark](https://www.wireshark.org/download.html)
* [HTTP](https://ko.wikipedia.org/wiki/HTTP)
  * Chrome developer tool, Network tab
* [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
  * [Web-based Dig](http://networking.ringofsaturn.com/Tools/dig.php)

## Checklist
* 인터넷은 어떻게 동작하나요? Internet Protocol Suite의 레이어 모델에 입각하여 설명해 보세요.
- 인터넷에 접근할 때 인터넷 영역에서의 수많은 라우팅을 관리하는 Hob(Default Gateway)가 필요하며, 최종적으로 인터넷 사이트에 해당하는 라우터에 접근한다.

  * 근거리에서 서로 떨어진 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?
  - 보통 정적 라우팅을 통해 연결하며, 라우팅테이블에 저장된 두 기기의 IP와 PORT 정보를 통해 데이터 전달이 이루어진다.

  * 근거리에 있는 여러 대의 전자기기가 서로 통신하는 프로토콜은 어떻게 동작할까요?
  - 와이파이를 통해 통신한다면 무선 공유기를 통한 라우팅 진행, 
  블루투스를 통해 통신한다면 BLE stack 프로토콜을 기반으로 통신 진행.

  * 아주 멀리 떨어져 있는 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?
  - 보통 멀리 떨어져 있는 기기기의 경우엔 근거리 대역의 네트워크가 없어 라우팅 테이블 작성이 어려우므로, 인터네소가 같이 Hob(지역 통신사)를 통한 데이터 전달이 이루어진다.

  * 두 전자기기가 신뢰성을 가지고 통신할 수 있도록 하기 위한 프로토콜은 어떻게 동작할까요?
  -웹과 사용자간의 대표적인 통신규약인 HTTP는 SSL 인증을 적용한 HTTPS 프로토콜을 사용한 것이 가장 대표적인 보안적용의 예시이다.
  HTTP프로토콜을 통한 데이터통신 과정에 SSL/TLS 암호화 방식(양방향 암호화)을 적용하여 상대적으로 안전한 데이터 전달이 가능하도록 한 방식이다.

  * HTTP는 어떻게 동작할까요?
  -개발자가 구성한 알고리즘 및 문서구성(HTML)에 따라 데이터 및 헤더에 데이터를 저장하고, request/response를 기반으로 웹사이트 동작이 이루어진다.

* 우리가 브라우저의 주소 창에 www.knowre.com 을 쳤을 때, 어떤 과정을 통해 서버의 IP 주소를 알게 될까요?
- DNS 서버들을 검색해서 해당 사이트의 IP 주소를 찾을 때까지 DNS query를 날린다. (클라이언트 - 서버 를 여러번 오가는 과정을 거친다.)
- TCP로 연결이 되면 브라우저는 GET 요청을 통해 서버에게 www.knowre.com의 웹페이지를 요구한다.


## Quest
* tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.

=> windows powershell을 통해 명령어 실행 (tracert www.google.com)
  (사진 참조)
  약 14번의 라우팅을 거쳐서 마지막에 구글에 도달함.

  * 어떤 IP주소들이 있나요?
  통신사(LG), 구글 등?

  * 그 IP주소들은 어디에 위치해 있나요? 

  * Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  => (google ping 확인 직후)
    PSH,ACK 패킷, ACK 패킷 등이 오간다.

  * TCP 패킷을 주고받는 과정은 어떻게 되나요?
  => 

  * 각각의 패킷에 어떤 정보들이 담겨 있나요?
  => 목적지의 ip주소, 보내는 곳의 ip 주소, IP의 타입(IPv4), 
    포트번호, 시퀀스넘버 등등

  * telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  => telnet www.google.com 80 명령어 실행 (무한로딩)
  (검색에 따르면) GET /HTTP/1.1 을 통해 HTTP 요청 보내줌.

  * 어떤 헤더들이 있나요?
  (출처 : https://velog.io/@sms8377/TIL-25-%ED%85%94%EB%84%B7Telnet%EB%AA%85%EB%A0%B9%EC%9D%84-%ED%86%B5%ED%95%B4-HTTP-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0) 

  Date : HTTP 메세지 생성 일자
  
  Connection : Server / Clinet 간의 연결 옵션
  
  Cache-Control : 쿠키/캐시 관련 정보
  
  Content - Type : 미디어 타입 정보
  
  Expires : 리소스가 지정된 일시까지 유효함을 나타냄.
  
  Server : 서버의 정보
  
  X-XSS-Protection : 특정 브라우저에서 제공하는 기능, XSS공격을 감지 할 때 페이지 로드를 중지 시킬 수 있음

  X-Frame-Options : 해당 페이지를 <frame> 또는 <iframe> , <object> 에서 렌더링 할 수 있는지 여부를 나타내는데 사용 됨

  Set-Cookie : 서버측에서 클라이언트측으로부터 세션 쿠기 정보를 설정 함

  Accept-Ranges : 부분 요청에 지원을 알리기 위해 서버에 의해 사용되는 표식. 이 헤더가 존재하면 브라우저는 처음부터 다시 다운로드를 시작하지 않고, 중단된 다운롣를 재개하려고 함.

  Vary : 캐시 된 응답을 향후 요청들에서 오리진 서버로 새로운 요청 헤더를 요청하는 대신 사용할 수 있는지 여부를 결정함.

  Tranfer-Encoding : 사용자에게 entitiy를 안전하게 전송하기 위해 사용하는 인코딩 형식을 지정함.

  * 그 헤더들은 어떤 역할을 하나요?
  - 어...

## Advanced
* HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
* TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
