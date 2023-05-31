---
date: '2023-05-17'
title: '프론트엔드 개발자를 위한 테스트(2) - 기본적인 테스트 코드 작성법'
categories: ['Testing', 'React']
summary: 'Jest 와 React Testing Library로 리액트 테스트 코드 작성하기'
thumbnail: '../images/thumbnail/testing.webp'
---

[이전 포스팅](https://cheeseb.github.io/testing/test-for-frontend/)에서 프론트엔드 개발자에게 필요한 테스트의 종류와 개념에 대해 이론적인 측면에서 다뤄 보았다. 이번 시간에는 실제로 리액트에서 Jest 와 React Testing Library 를 활용해서 테스트 코드를 작성하는 방법을 알아보려 한다.

## 테스팅 라이브러리 설치 및 세팅

### Jest

> CRA 환경에선 Jest는 기본적으로 포함되어 있기 때문에 별도로 설치 및 세팅을 할 필요 없다.

CRA를 사용하지 않는 환경에서는 아래 명령어로 Jest를 설치한 후, Babel 설정을 해주어야 한다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```bash
# npm
npm install --save-dev jest

# yarn
yarn add --dev jest
```

Jest 는 JavaScript 코드를 실행하지만, 기본적으로 최신 JavaScript 문법이나 JSX 를 이해하지 못한다.   
따라서 Babel을 사용해서 Jest가 이해할 수 있는 문법으로 변환해 주어야 한다.

먼저 Babel과 필요한 플러그인을 설치한다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```bash
# npm
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react

# yarn
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react
```

그 다음, 프로젝트 루트에 '.babelrc' 파일을 생성하고 아래와 같이 작성한다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

이렇게 하면 Jest는 Babel을 사용하여, 테스트 코드를 실행하기 전에 코드를 변환한다.

### React Testing Library

리액트 테스팅 라이브러리는 CRA 환경에 포함되지 않기 때문에, 별도로 설치를 해야한다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```bash
# npm
npm install --save-dev @testing-library/react @testing-library/jest-dom

# yarn
yarn add --dev @testing-library/react @testing-library/jest-dom
```

## 기본적인 테스트 코드 작성법

### 테스트파일 생성

Jest는 기본적으로 .test.js 또는 .spec.js 확장자를 가진 파일, 또는 \__tests__ 디렉토리 내의 모든 JavaScript 파일을 테스트 파일로 인식한다. 따라서 **컴포넌트와 동일한 경로**에 **컴포넌트명.test.js** 파일을 만들고 테스트 코드를 작성하면 된다.

```js
test('Render add button', () => {
  // blabla..
});

test('Given score is 0, When click +, Then score is 5', () => {
	// blabla..
});

test('취소 버튼이 클릭되면 onCancel 함수가 호출되야 한다.', () => {
	// blabla..
});
```

위와 같이 test() 함수 내부에 각 테스트를 작성하면 된다.   
여기서 첫번째 인자로 들어가는 문자열은 각 테스트의 이름이 되며, 테스트 실행 시 아래와 같이 테스트 이름과 성공 여부가 나타난다.

```bash
PASS  ./MyButton.test.js
  ✓ Render add button (5ms)
  ✓ Given score is 0, When click +, Then score is 5 (1ms)
  ✓ 취소 버튼이 클릭되면 onCancel 함수가 호출되야 한다. (1ms)
```

### 컴포넌트 렌더링 (Given)

React Testing Library의 **render 함수**를 사용하면 테스트 환경에서 컴포넌트를 렌더링할 수 있다. render 함수는 렌더링된 결과를 반환하며, 이 결과를 통해 DOM 요소를 조회하거나 사용자 이벤트를 시뮬레이션할 수 있다.

```js
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
});

```

### DOM 요소 조회 (When)

React Testing Library는 **DOM 요소를 조회**할 수 있는 여러 가지 쿼리 함수를 제공하며, 크게 다음과 같이 세가지 형태로 제공된다.

|getBy|queryBy|findBy|
|---|---|---|
|해당 요소가 **화면에 존재해야 할 때** 사용하며, 그렇지 않을 경우 테스트는 실패함|요소가 화면에 **존재하지 않아야 할 때** 사용하며, 요소가 존재하면 테스트는 실패함|**비동기적으로 로딩**되는 요소를 찾을 때 사용|
|요소를 찾을 수 없으면 오류를 던짐|요소를 찾을 수 없으면 null을 반환|요소를 찾을 수 없으면 Promise를 반환하며, 이 Promise는 reject 됨|

각 형태는 getByText, getByRole 등 여러 종류의 쿼리로 사용될 수 있다.

- [리액트 쿼리 함수 모음집](https://cheeseb.github.io/react/react-testing-library-query-functions/)
- [React Testing Library 공식문서](https://testing-library.com/docs/queries/about/)

```js
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders hello message', () => {
  render(<MyComponent />);

  const helloElement = screen.getByText('Hello');
});
```

### 렌더링 결과 검증 (Then)

Jest 에서 제공하는 expect 함수와, 다양한 매쳐(matcher) 함수로 테스트 결과를 검증할 수 있다.

```js
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders hello message', () => {
  render(<MyComponent />);

  const helloElement = screen.getByText('Hello');

  expect(helloElement).toBeInTheDocument();
});
```

#### expect

> 테스트의 기대값을 지정하는데 사용된다.

Jest에서 제공하는 함수로,   
테스트하려는 값을 인자로 제공하고 이 값에 대해 특정 조건을 검사할 수 있도록 다양한 매쳐 함수를 연결할 수 있게 한다.

```js
expect(sum(1, 2)).toBe(3);
```

여기서 .toBe() 는 jest 에서 제공하는 매쳐 함수로, expect 함수에 제공된 값이 toBe 함수에 제공된 값과 정확히 같은지 검사한다.

### Matcher 함수

> 기대한 값이 실제 반환된 값과 일치하는 지 확인하는 함수이다.

Jest 에서 제공하는 기본 매쳐 함수 뿐 아니라, React Testing Library 의 Jest-dom 에서 DOM 에 특화된 추가적인 매쳐를 제공한다.

- [매쳐 함수 모음집](https://cheeseb.github.io/react/jest-matchers-dom/)


## 테스트 실행

다음 명령어를 입력해서 테스트를 실행할 수 있다.

```bash
// npm
npm test

// yarn
yarn test
```

이 명령어는 package.json 파일에 정의된 test 스크립트를 실행하며, 일반적으로 CRA 환경에서는 Jest가 테스트 실행기로 설정되어 있다.

테스트를 실행하면 각 테스트가 통과했는지 실패했는지에 따라 표시되는 메세지가 다르다.

#### 테스트가 성공했을 때

```bash
PASS  src/App.test.js
✓ renders learn react link (31ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.357s
```

#### 테스트가 실패했을 때

```bash
FAIL  src/App.test.js
✕ renders learn react link (36ms)

● renders learn react link

  expect(received).toBeInTheDocument()

  received value must be an HTMLElement or an SVGElement.
  Received has value: null

    4 | test('renders learn react link', () => {
    5 |   render(<App />);
  > 6 |   const linkElement = screen.getByText(/non-existent element/i);
      |                               ^
    7 |   expect(linkElement).toBeInTheDocument();
    8 | });

  at Object.<anonymous> (src/App.test.js:6:31)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.602s
```

---

[다음 포스팅](https://cheeseb.github.io/testing/react-testing-with-jest-and-rtl-advanced/)은 테스트 코드에서 유저 이벤트를 발생시키는 방법, 다른 모듈을 Mocking 하는 법 등 더 심화된 테스트 코드 작성법에 대해 다룰 예정이다.

## 참고 자료

- [Jest 공식 웹사이트](https://jestjs.io/)
- [React Testing Library 공식문서](https://testing-library.com/docs/react-testing-library/intro/)