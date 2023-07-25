---
date: '2023-07-25'
title: 'Javascript - 논리 연산자와 nullish 병합 연산자 "??"'
categories: ['Javascript']
summary: '자바스크립트 연산자로 쉽게 null, undefined 처리하기'
thumbnail: '../images/thumbnail/javascript.webp'
---

## 자바스크립트의 AND, OR 연산

> 자바스크립트의 AND(&&), OR(||) 연산은 피연산자의 값을 그대로 출력하며, 왼쪽 피연산자만으로 연산 결과를 반환할 수 있다면 오른쪽 피연산자는 실행하지 않는다.

- `A && B`: A가 거짓이라면 B는 실행하지 않고 바로 A를 반환한다.
- `A || B`: A가 참이라면 B는 실행하지 않고 바로 A를 반환한다.

위의 특성을 활용해서, 자바스크립트 개발 시 쉽게 조건부 처리가 가능하다.

예를 들어, `&&` 연산자는 리액트에서 컴포넌트를 선택적으로 렌더링 할 때 많이 쓰인다.

```jsx
{isVisible && (
	<div> Visible component! </div>
)}
```

그리고 `||` 연산자는 값이 존재하지 않을 때 대체 값을 넣어주는 용도로 많이 쓴다.

```js
function print(word) {
	const msg = word || 'Hi';
	console.log(msg);
}
```

나도 지금까지 타입스크립트를 사용하면서, undefined일 수 있는 값에 `||` 연산자를 사용해서 빈값 처리를 했다.

```tsx
<Column>
	<HeaderCell>header</HeaderCell>
	<Cell>{rowData[key] || '-'}</Cell>
</Column>
```

하지만 이런 식으로 값을 대체할 때 생기는 문제점이 있다.   
바로, 변수값이 0이거나 빈 문자열일 때 등등 논리적으로 false로 취급되는 값들도 대체된다는 것이다.

나의 경우에는 위의 예시처럼 테이블에 넣을 값이 존재하지 않을때만 `-` 기호를 출력하려 했으나,   
값이 0일 때는 0을 출력해야 하는데 이것마저 `-` 기호로 대체되는 문제를 겪었다.

이를 방지하기 위해서, 값의 존재 유무만 따질 때는 `??` 연산자를 사용하는 것이 좋다.

## nullish 병합 연산자 (??)

`x = a ?? b` 와 같이 사용하며, 이는 다음과 동일한 동작을 한다.

```js
x = (a !== null && a !== undefined) ? a : b;
```

이전에 설명했던 테이블 예시는 아래와 같이 고칠수 있다.

```tsx
<Column>
	<HeaderCell>header</HeaderCell>
	<Cell>{rowData[key] ?? '-'}</Cell>
</Column>
```

이 연산자는 AND, OR 연산자와 마찬가지로 함수에도 사용 가능하며, 연속으로도 사용 가능하다.

```ts
const count = getCount();

printCount(count ?? '-');
```

```js
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛
```

주의할 점은, `??` 연산자는 `&&` 나 `||` 연산자와 함께 사용할 수 없다는 것이다.   
함께 사용하고자 한다면 반드시 괄호`()` 로 구분해 주어야 한다.

![](../images/content/2023-07-25-13-58-51.png)


## 참고 자료

- [모던 JavaScript 튜토리얼 - nullish 병합 연산자 '??'](https://ko.javascript.info/nullish-coalescing-operator)