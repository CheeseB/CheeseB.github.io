---
date: '2023-05-02'
title: 'Jest와 React Testing Library 로 리액트 테스트코드 작성하기'
categories: ['React']
summary: '프론트엔드에서 테스트 하는법'
thumbnail: '../images/thumbnail/react.webp'
---

항상 프론트엔드 기능 구현과 수정을 할 때마다 하나하나 클릭하고 입력해 보면서 직접 테스트를 해 왔었는데, 꼼꼼히 테스트를 하려다 보니 개발하는 시간보다 테스트하는 시간이 더 오래 걸렸던 적이 많았다.   
이런 비효율성을 조금이라도 덜어보고자 리액트에서 테스트 코드를 작성하는 법을 알아보았다. 사실 테스트코드니 TDD 니 이런 개념을 공부할 때마다 프론트와는 동떨어져 있는 개념인 것 같았고, 무엇을 어떻게 테스트해야 하는 건지도 몰랐는데, 이번 기회에 테스트코드 작성법을 익히고 실무에도 적용해 보도록 하려 한다.

## 프론트엔드 테스트의 필요성

프론트엔드에서도 테스트 코드 작성이 중요한 이유는 다음과 같습니다.

- 코드의 품질 향상: 테스트를 통해 코드의 견고함을 확인하고, 버그를 사전에 찾아낼 수 있습니다.
- 리팩토링 용이성: 테스트 코드가 있으면 기능 변경이나 코드 개선을 할 때 안전하게 진행할 수 있습니다.
- 개발 생산성 향상: 테스트 코드를 작성하면서 코드를 이해하는데 도움이 되고, 다른 개발자들과의 협업을 원활하게 할 수 있습니다.

## 테스트의 종류

테스트에는 여러 종류가 있습니다. 주요 테스트 종류와 정의는 다음과 같습니다.

- 단위테스트(Unit Test): 개별적인 기능, 함수, 컴포넌트 등을 독립적으로 테스트하는 것입니다.
- 통합테스트(Integration Test): 여러 단위가 결합된 상태에서 올바르게 작동하는지 확인하는 테스트입니다.
- E2E 테스트(End-to-End Test): 사용자 관점에서 애플리케이션의 모든 부분이 잘 작동하는지 확인하는 테스트입니다.

## 각 테스트에 쓰이는 툴들과 각자의 장단점

- 단위테스트 툴: Jest, Mocha, Jasmine 등이 있습니다.
  - 장점: 빠른 테스트 속도, 적은 리소스 사용
  - 단점: 전체 시스템 동작을  확인하기 어려움
- 통합테스트 툴: Jest, Cypress 등이 있습니다.
  - 장점: 여러 컴포넌트 간의 상호작용을 테스트할 수 있음
  - 단점: 설정이 복잡할 수 있고, 테스트 시간이 상대적으로 길어질 수 있음
- E2E 테스트 툴: Cypress, Selenium, Puppeteer 등이 있습니다.
  - 장점: 실제 사용자 시나리오를 가장 잘 반영함
  - 단점: 테스트 작성과 유지보수가 어려울 수 있고, 실행 시간이 길어질 수 있음

### 단위테스트 툴

- **Jest**
  - 장점: 설정이 쉽고, 병렬 테스트 실행 지원, 모의(Mock) 기능이 강력함
  - 단점: 큰 프로젝트에서 실행 속도가 느릴 수 있음
- **Mocha**
  - 장점: 유연한 설정, 각종 플러그인 지원
  - 단점: 모의(Mock) 기능이 부족함, 설정이 복잡할 수 있음
- **Jasmine**
  - 장점: BDD 스타일 테스트 작성, 기본적인 모의(Mock) 기능 제공
  - 단점: 실행 속도가 상대적으로 느림, 병렬 테스트 미지원

### 통합테스트 툴

- **Jest**
  - 장점: 단위테스트와 같은 설정을 사용하여 일관성 유지, 병렬 테스트 실행 지원
  - 단점: 리액트 외의 프로젝트에서 통합 테스트 설정이 복잡할 수 있음
- **Cypress**
  - 장점: 시각적인 테스트 실행 환경 제공, 설정이 간단함
  - 단점: E2E 테스트에 주로 사용되어 통합 테스트를 위한 기능이 부족할 수 있음

### E2E 테스트 툴

- **Cypress**
  - 장점: 사용하기 쉬운 API, 빠른 테스트 실행 속도, 실시간 디버깅 지원
  - 단점: 크로스 브라우저 테스트 지원이 미흡함
- **Selenium**
  - 장점: 다양한 프로그래밍 언어 지원, 크로스 브라우저 테스트 지원
  - 단점: 테스트 작성과 유지보수가 어려움, 실행 속도가 느림
- **Puppeteer**
  - 장점: 크롬 브라우저에서 빠른 테스트 실행, Headless 브라우저 지원
  - 단점: 크로스 브라우저 테스트 미지원, API가 복잡할 수 있음

## Jest 란?

Jest는 페이스북에서 개발한 자바스크립트 테스트 프레임워크로, 리액트 프로젝트에서 주로 사용됩니다. Jest의 주요 특징은 다음과 같습니다.

- 간편한 설정: 설정이 쉽고 기본값이 잘 구성되어 있어, 프로젝트에 빠르게 도입할 수 있습니다.
- 빠른 테스트 실행: 병렬 테스트 실행이 가능하며, 변경된 파일에 대해서만 테스트를 실행할 수 있어 빠른 테스트를 지원합니다.
- 모의(Mock) 기능: 함수, 모듈, 타이머 등을 손쉽게 모의할 수 있어 단위 테스트 작성을 편리하게 합니다.

## React Testing Library 란?

React Testing Library는 리액트 컴포넌트 테스트를 위한 라이브러리로, 사용자 관점에서 테스트를 작성할 수 있게 도와줍니다. 주요 특징은 다음과 같습니다.

- 사용자 중심의 테스트: 사용자가 직접 경험하는 것과 유사한 방식으로 테스트를 작성할 수 있습니다.
- 컴포넌트에 직접 접근하지 않음: 컴포넌트의 내부 구현을 알 필요 없이 테스트를 작성할 수 있어 견고한 테스트를 작성할 수 있습니다.

## 테스트 코드 작성법

Jest와 React Testing Library를 사용해 리액트 컴포넌트의 테스트 코드를 작성하는 예시입니다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button click updates text', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  userEvent.click(buttonElement);

  const updatedText = screen.getByText(/clicked!/i);
  expect(updatedText).toBeInTheDocument();
});
```

이 예시에서는 App 컴포넌트를 렌더링하고, "learn react"라는 텍스트와 "click me"라는 버튼이 있는지 확인합니다.
그다음 버튼을 클릭하여 텍스트가 "clicked!"로 변경되는지 확인합니다.


## 참고 링크

[Jest 공식 문서](https://jestjs.io/)   
[React Testing Library 공식 문서](https://testing-library.com/docs/react-testing-library/intro/)   
[테스트 종류와 정의](https://www.softwaretestinghelp.com/types-of-software-testing/)   
[테스트 도구 비교](https://www.browserstack.com/guide/jest-vs-mocha)
