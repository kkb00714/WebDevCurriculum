# Quest 00. 형상관리 시스템

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources
* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist
* 형상관리 시스템은 왜 나오게 되었을까요?

  - 무형물인 소프트웨어를 잘 관리하기 위해 (가시성의 결핍)
  - 눈에 보이지 않는 상품의 제작은 통제하기 어려우기 때문에(통제의 어려움)
  - 프로젝트 중간 목표들을 연결시키고 개발 과정을 추적하기 어렵기 때문에(추적의 어려움)
  - 가시성과 추적성의 결핍은 프로젝트 진행의 감시를 어렵게 하기 때문에(감시의 미비)
  - 통제되지 않고 관리되지 않는 소프트웨어의 무절제한 변경이 발생하기 때문에(무절제한 변경)
  
  => 형상관리 시스템 : '형상 식별', '형상 통제', '형상 감사', '형상 기록' 4가지 요소를 토대로 관리하는 것으로, 변경사항을 체계적으로 추적하고 통제하는 시스템이다.
  

* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?

- git은 로컬 관리와 중앙 관리가 모두 가능한 분산형 형상관리 시스템이라는 특징이 있다.

- 분산형 형상관리 시스템 (Distributed Version Control System, DVCS) : 소스를 버전별로 관리할 수 있는 시스템이다.


* git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?

- git은 크고 작은 프로젝트를 빠르고 효율적으로 처리하기 위해 고안된 분산형 형상관리 시스템이다. 클라이언트가 마지막 스냅샷을 받아오지 않고 저장소를 전부 복제할 수 있고, 서버에 문제가 생기면 아무 클라이언트의 복제물로 서버를 복원할 수 있다. 


* git과 GitHub은 어떻게 다를까요?
- git은 소프트웨어 자체이지만 GitHub는 나의 git 파일을 업로드하는 저장소이다. (git의 웹 호스팅 제공)

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

1. git add <파일명 or 경로> 사용
현재 파일경로 => (git add Quest00/sandbox/example.txt)
Hello World! => 처음부터 있던 거 커밋해보기 (수정?)

2. git reset <파일명 or 경로> 사용 
git add 된 특정 파일 취소하기 (stage에서 내리기?)

3. git pull
원격저장소에 있는 프로젝트의 변경사항을 그대로 로컬저장소에 옮겨와 자동으로 병합
=> 단, 변경사항을 가져옴과 동시에 자동병합이 되기 때문에 추가 및 변경사항을 알 수 없음

4. git commit -m "메시지"
add 된 파일을 깃허브에 커밋 메시지와 함께 커밋하는 명령어.
(알맞은 메시지나 변경사항 등 설명을 추가)

5. git push <원격저장소 이름> <컴퓨터의 브랜치 이름> (걍 git push해도 됨)
=> 현재 내 로컬 브랜치 (origin/master)
stage에 대기중인 커밋 파일을 깃허브에 최종으로 올림.

6. git pull 
다른 사람이 코드를 업데이트 했거나 깃허브를 통해 commit했을 때
그 내용을 클라이언트로 내려받는 명령어. 
ex) git pull origin master 하면 origin의 내용이 master로 복사됨.

7. git branch 
자신의 branch에 각각 맡은 부분의 개발을 진행할 수 있음.
나중에 branch끼리 merge를 통해 코드를 합칠 수 있음.
=> 대부분 프로젝트나 팀플에서 사용?

branch는 본래 하나의 이슈당 하나의 branch에서 해결?하고 
나중에 main branch에 merge하는 것. 이후 기능을 다하면 삭제하는 방식으로 관리함.
신기하당 어케쓰는지 모르겠지만 좋은듯 bb 

8. git stash
위의 branch 설명처럼, 하나의 이슈에 대한 branch를 만들게 되었다고 가정하자.
이슈에 대한 branch를 진행하는 중 다른 branch로 이동해야 할 때가 있는데,
다른 branch로 변경하기 위해서는 꼭 commit을 해야한다.
마무리되지 않은 작업을 commit할 수는 없으니까
'임시저장' 용도로 git stash가 필요하다.

☆ git stash 명령어 정리

[
    git stash : git stash 변경 내용 임시저장하기

    git stash apply : 가장 최근 stash 가지고 오기

    git stash apply stash@{1} : 특정 stash 가지고 오기 (stash 명은 stash list 참고) 

    git stash drop : 가장 최근 stash 지우기

    git stash drop stash@{1} : 특정 stash 지우기
    
    git stash clear : 한번에 stash 모두 지우기
]


* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?

1. Object는 blob(파일 내용)과 tree(디렉터리와 blob의 정보(파일명))와 commit이 있다.
2. Commit은 소프트웨어 버전의 의미있는 변화를 기록하는 것이다.
3. Head는 현재 브랜치를 의미한다.
4. Branch는 프로젝트에서 팀원들이 각자 branch를 통해 소스코드를 변경할 수 있고, 원래 버전과 비교하여 새로운 버전을 생성할 수 있다. 
5. Tag는 특정 커밋을 표시해두기 위한 태깅 기능이다.

- 히스토리 : -

* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요? 

- git reset --cached <파일명>


## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.

* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.

* 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.

* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.

* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?
