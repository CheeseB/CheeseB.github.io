---
date: '2023-11-01'
title: '[소소한 개발팁] git add . VS git add *'
categories: ['Git', 'Memo']
summary: '내가 안 까먹으려고 바로 적어두는 개발 팁'
thumbnail: '../images/thumbnail/git.webp'
---

## git add . 과 git add * 명령어의 차이

두 명령어 모두 **현재 디렉토리 안의 모든 파일을 add** 시키지만,   
.gitignore 를 반영하느냐 안하느냐의 차이가 있다.

- `git add *` : gitignore에 명시된 파일까지 전부 add시킴
- `git add .` : gitignore에 명시된 파일은 **제외하고** add시킴

> 결론: git add . 을 쓰자

난 지금껏 github desktop을 주로 사용했고, 명령어를 쓰더라도 alias로만 계속 써왔어서 두개의 차이를 모르고있었다.. <small>(이제보니 git add . 명령어를 alias로 등록해놨어서 지금까지 문제가 없었던 것 같다)</small>   
가끔 명령어를 입력할 땐 아무 생각없이 git add * 을 사용했었는데, 웬만해선 git add . 으로 사용하는 것이 좋을것 같다. ~~gitignore를 ignore 해버릴 순 없으니까~~