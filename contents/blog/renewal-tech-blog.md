---
date: '2023-03-14'
title: '기술 블로그 리뉴얼'
categories: ['Blog', 'Diary']
summary: 'jekyll에서 Gatsby로'
thumbnail: '../images/thumbnail/cheeseball.webp'
---

## jekyll에서 Gatsby로

아주 오래전에 개인 기술블로그를 만들어놓고 지금껏 방치해두다가 다시 필요성을 느껴서 리뉴얼을 하게 되었다.  
사실 리뉴얼까지 안하더라도 이미 github.io로 배포까지 완료된 블로그라 게시글만 올려도 되지만, 기존 페이지 디자인이 마음에 들지 않았다.  
그당시 jekyll로 다른 사람이 만들어놓은 테마를 갖다 쓰기만 했어서 커스터마이징이 어려웠고, 현재 리액트 공부중인데 마침 리액트 기반의 개츠비로 블로그를 만드는 강의가 있길래 이참에 내가 직접 처음부터 다시 만들어야겠다고 결심했다.  
  
이 게시글을 올린 시점엔 아래의 참고 강의를 완강하여 간단한 SPA 블로그 개발, 배포 및 웹 마스터 도구 등록까지 마친 상태이다.  
강의를 통해 기본적인 **리액트 Hooks 사용 방법**과 **개츠비를 통한 정적 사이트 개발** 방법 뿐 아니라,  
리액트에 **TypeScript** 를 적용하는 방법, **Styled Component** 사용법, **GraphQL 쿼리**, **SEO 적용** 등등 많은 것들을 배울 수 있었다.  
  강의 마지막쯤 검색 엔진 최적화를 위해 Meta Tag를 추가하고 웹 마스터 도구에 블로그를 등록할 때, 강의에서는 react-helmet 을 사용했지만 해당 플러그인은 구글 서치 콘솔에 등록이 되지 않아서, **react-helmet-async**를 사용했더니 문제없이 등록이 되었다.  
또한 강의에서는 사이트맵 생성을 위해 sitemap 플러그인을 사용했지만, 구글 사이트맵 등록에 실패해서 **advanced-sitemap** 플러그인으로 바꿔서 등록했더니 성공했다.  
  이렇게 직접 블로그 만드는 법을 친절하게 정리해주신, 심지어 무료로 강의를 배포해주신 강사님께 감사드리며 이제 블로그 디자인을 시작해야겠다..!  
피그마 배운걸 여기서 써먹을줄이야😆

---

### 참고 강의

(인프런) React 기반 Gatsby로 기술 블로그 개발하기   
[<https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/dashboard>](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/dashboard)
