---
date: '2023-10-22'
title: '[CSS] CSS의 Cascading 규칙'
categories: ['CSS']
summary: '!important를 남발하지 않기 위해 알아야 할 css의 우선순위 규칙'
thumbnail: '../images/thumbnail/css.webp'
---

## 캐스캐이딩 (Cascading) 이란?

> 하나의 요소에 여러 CSS선언이 영향을 줄 때, 충돌을 방지하기 위한 **CSS 적용 우선순위**

css를 작성할 수 있는 곳이 다양하고, 부모 태그로부터의 스타일 상속 등 여러가지 이유로 하나의 html 태그에 여러개의 css 요소가 영향을 주는 상황이 빈번하게 일어난다. 캐스캐이딩이란 이런 상황에서 **어떤 스타일을 적용받을 지에 대한 우선순위 규칙이다.**

<small style="color: gray; font-style: italic;">cascading 이란 단어 자체는 '위에서 아래로 떨어지는' 이라는 뜻인데 CSS의 약자는 'Cascading Style Sheet'로, 위에서부터 아래로 적용되는 스타일시트란 의미이다. CSS라는 이름 자체가 Cascading으로 시작하는 만큼, CSS에서 cascading 규칙은 매우 중요하다 볼 수 있다.</small>

## 캐스캐이딩 규칙

캐스캐이딩은 다음 세가지 요소로 우선순위를 결정한다.

- 중요도 : CSS가 어디에 선언 되었는지
- 명시도 : 대상을 명확하게 특정했는지
- 선언순서 : 나중에 선언된 스타일을 우선 적용

### 중요도

스타일이 선언된 위치에 따라 우선순위가 결정된다.

1. \<head\> 안의 style 요소
2. \<head\> 안의 style 요소 내의 @import 문
3. \<link\> 로 연결된 CSS 파일
4. \<link\> 로 연결된 CSS 파일 내의 @import 문
5. 브라우저 디폴트 스타일시트

## 참고 자료

- [Inpa Dev - CSS 속성 상속 개념 & 적용 우선순위](https://inpa.tistory.com/entry/CSS-%F0%9F%93%9A-%EC%83%81%EC%86%8D-%EA%B0%9C%EB%85%90-%EC%A0%81%EC%9A%A9-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)
- [밤의 공간 - [CSS] Cascading, 캐스케이딩](https://bamtory29.tistory.com/entry/CSS-Cascading-%EC%BA%90%EC%8A%A4%EC%BA%90%EC%9D%B4%EB%94%A9)