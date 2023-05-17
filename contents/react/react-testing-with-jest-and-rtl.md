---
date: '2023-05-17'
title: 'Jest 와 React Testing Library로 리액트 테스트 코드 작성하기'
categories: ['React']
summary: '프론트엔드 개발자를 위한 테스트 2편 (실전편)'
thumbnail: '../images/thumbnail/react.webp'
---

이전 포스팅에서 프론트엔드 개발자에게 필요한 테스트의 종류와 개념에 대해 이론적인 측면에서 다뤄 보았다. 이번 시간에는 실제로 리액트에서 Jest 와 React Testing Library 를 활용해서 테스트 코드를 작성하는 방법과 몇가지 예시를 알아보려 한다.

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

