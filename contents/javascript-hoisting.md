---
date: '2021-08-17'
title: '[자바스크립트] 자바스크립트 코드 해석 순서, 호이스팅'
categories: ['Javascript']
summary: '자바스크립트 문법 공부'
thumbnail: './images/thumbnail/javascript.jpg'
---

## 자바스크립트 코드 해석 순서

예시

```js
debugger;
var title = "js";
function getTitle() {
  return title;
}
var readTitle = function () {};
getTitle();
```

기본 순서는 위에서 아래로!

1. 함수 선언문 해석 (getTitle)
2. 변수 undefined로 초기화 (title, readTitle)
3. 코드 실행 (debugger - title 할당 - readTitle 할당 - getTitle 실행)

1번 과정을 다 거친 후 다시 코드 맨 처음으로 돌아와서 2번, 그다음 다시 코드 처음부터 3번 과정을 거침.
<br> 이로 인해 변수와 함수의 호이스팅이 가능한 것.
<br>
<br> 주의할 점: 초기화 단계(2단계)에서 이미 값이 있는 변수는 초기화하지 않음
<br> 이미 함수 선언문으로 작성한 함수와 같은 이름의 함수를 함수 표현식으로(readTitle처럼) 작성한 경우
<br> 2단계에서 undefined로 초기화하지 않고 기존의 값을 유지함.
<br> 그 후 3단계에서 비로소 재정의 됨.

## 호이스팅 예시

```js
console.log(getBook()); // 2

function getBook() {
  return "1";
}

console.log(getBook()); // 2

function getBook() {
  return "2";
}

console.log(getBook()); // 2
```

```js
console.log(getBook()); // 1

function getBook() {
  return "1";
}

console.log(getBook()); // 1

var getBook = function () {
  return "2";
};

console.log(getBook()); // 2
```

```js
console.log(getBook()); // 2

var getBook = function () {
  return "1";
};

console.log(getBook()); // 1

function getBook() {
  return "2";
}

console.log(getBook()); // 1
```

```js
console.log(getBook); // undefined

var getBook = function () {
  return "1";
};

console.log(getBook()); // 1

var getBook = function () {
  return "2";
};

console.log(getBook()); // 2
```
