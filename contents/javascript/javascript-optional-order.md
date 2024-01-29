---
date: '2023-07-10'
title: '[소소한 개발팁] Javascript - 리스트에서 특정 요소들만 맨 앞/뒤로 세우기'
categories: ['Javascript']
summary: '내가 안 까먹으려고 바로 적어두는 개발 팁'
thumbnail: '../images/thumbnail/javascript.webp'
---

프론트 개발 하다보면 리스트에서 특정 요소들만 앞에 세우거나 뒤에 세워야 하는 경우들이 꽤 있을 것이다.   
<small>(ex. 투두리스트에서 중요 표시한 항목들을 맨 위로 올리기)</small>

그럴 때 javascript에서 filter 메서드와 spread 연산자를 활용하면 쉽게 해결할 수 있다.

```js
const tasksInOrder = [
	...tasks.filter((t) => t.state === 'TASK_PINNED'),
	...tasks.filter((t) => t.state !== 'TASK_PINNED'),
];
```

위 예시는 Storybook 공식 사이트의 [튜토리얼](https://storybook.js.org/tutorials/intro-to-storybook/react/en/composite-component/)에 나와있다.