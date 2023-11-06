---
date: '2023-11-06'
title: '자바스크립트의 slice, splice와 substring'
categories: ['Javascript']
summary: '내가 쓸때마다 매번 헷갈려서 정리해둔 글'
thumbnail: '../images/thumbnail/javascript.webp'
---

이번 글에서는 자바스크립트에서 배열의 일부를 추출 혹은 삭제하는 slice와 splice, 그리고 문자열의 부분 문자열을 추출하는 substring에 대해 헷갈리는 부분들 위주로만 간략하게 정리하려 한다.

## 배열 - slice / splice

### slice

> 원본 배열은 보존하고, 추출한 요소를 **새로운 배열에 반환**함<br>_*문자열에도 slice 메서드가 존재함 (배열의 slice와 동일하게 작동)_

```txt
arr.slice(startIndex [, endIndex])
```

**startIndex 부터 (endIndex - 1) 까지 추출**

- <mark>startIndex</mark>
  - 음수 -> 배열 끝에서부터 셈 (배열 길이를 넘어가는 음수는 0으로 세팅됨)
  - 배열 길이보다 큰 수 -> 빈 배열 반환
- <mark>endIndex</mark>
  - 생략 or 배열 길이보다 큰 수 -> 배열 끝까지 추출
  - 음수 -> 배열 끝에서부터 셈
  - startIndex보다 작거나 같은 수 -> 빈 배열 반환

### splice

> **원본 배열 자체를 수정**함. 반환값은 제거한 요소를 담은 배열 (없으면 빈 배열)

```txt
array.splice(startIndex [, deleteCount [, item1 [, item2 [, ...]]]])
```

**startIndex 부터 deleteCount 개 만큼 삭제한 후, startIndex 에 item 들을 추가**

- <mark>startIndex</mark>
  - 음수 -> 배열 끝에서부터 셈 (배열 길이를 넘어가는 음수는 0으로 세팅됨)
  - 배열 길이보다 큰 수 -> 삭제는 하지 않음. 추가할 아이템은 배열 마지막에 추가함

- <mark>deleteCount</mark>
  - 생략 or (배열 길이 - startIndex) 보다 큰 수 -> start부터 끝까지 삭제
  - 음수 or 0 -> 삭제하지 않음

## 문자열 - substring

> 문자열을 추출한 결과를 **새로운 문자열**로 반환

```txt
str.substring(startIndex [, endIndex])
```

**startIndex 부터 (endIndex - 1) 까지 추출**

- <mark>startIndex</mark>
  - 음수 -> 0으로 세팅
  - 문자열 길이보다 큰 수 -> 빈 문자열 반환
- <mark>endIndex</mark>
  - 생략 or 문자열 길이보다 큰 수 -> 문자열 끝까지 추출
  - startIndex보다 작은 수 -> endIndex부터 (startIndex - 1) 까지 추출
    - 여기서 endIndex가 음수라면 0으로 세팅
    - startIndex와 같다면 빈 문자열 반환

## 참고사항

- slice/splice/substring 모두 파라미터 없이 사용한다면, 원본 배열이나 문자열을 그대로 유지한다. ~~(근데 그럴거면 뭐하러 씀)~~
- 문자열 추출 메서드 중, 마치 splice처럼 일정 길이만큼 자르는 substr도 있지만 현재는 deprecated 되어서 따로 정리하지 않았다.

## 참고 사이트

- [Code Playground - [JS/Array] slice()와 splice()의 차이점](https://im-developer.tistory.com/103)
- [DaleSeo - 자바스크립트 문자열 자르기: substr()과 substring() 함수](https://www.daleseo.com/js-substr-substring/)
- MDN web docs