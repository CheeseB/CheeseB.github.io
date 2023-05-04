---
date: ''
title: 'Jest 와 React Testing Library로 리액트 테스트 코드 작성하기 - 아직 작성중'
categories: ['React']
summary: ''
thumbnail: '../images/thumbnail/react.webp'
---

## 테스트 코드 작성법

리액트 테스트 코드는 일반적으로 컴포넌트와 같은 디렉토리에 위치시키는 것이 좋습니다. 테스트 파일의 이름은 해당 컴포넌트의 이름과 같게 하되, .test.js 또는 .spec.js 확장자를 사용하여 테스트 파일임을 나타냅니다. 예를 들어, MyComponent.js라는 컴포넌트가 있다면 테스트 파일의 이름은 MyComponent.test.js 또는 MyComponent.spec.js로 지정하면 됩니다.

테스트를 실행시키려면, 다음 단계를 따르세요.

테스트 라이브러리 설치: 테스트를 실행하려면 Jest를 사용하는 것이 좋습니다. 리액트 프로젝트에서 Jest를 사용하려면, 필요한 패키지를 설치해야 합니다. 아래의 명령어로 패키지를 설치할 수 있습니다.

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

테스트 스크립트 작성: MyComponent.test.js 파일을 생성하고 테스트 코드를 작성하세요. 예를 들어:

```jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent without crashing', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/Hello, world!/i);
  expect(linkElement).toBeInTheDocument();
});
```

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

## 테스트 실행

테스트 실행: package.json 파일에 테스트 스크립트를 추가합니다. scripts 섹션에 다음을 추가하세요:

```json
"scripts": {
  "test": "jest"
}
```

테스트 실행: 터미널에서 다음 명령어를 입력하여 테스트를 실행합니다.

```bash
npm test
```

테스트 결과 출력은 일반적으로 아래와 같은 형식으로 나타납니다. 여기서는 MyComponent라는 컴포넌트의 테스트 결과를 예로 들겠습니다.

```yaml
PASS src/MyComponent.test.js
  ✓ renders MyComponent without crashing (25ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.145s, estimated 3s
Ran all test suites.
```

이 출력에서 주요한 정보는 다음과 같습니다:

PASS src/MyComponent.test.js: 테스트 파일이 성공적으로 통과했음을 나타냅니다.
✓ renders MyComponent without crashing (25ms): 개별 테스트 케이스의 결과와 실행 시간을 보여줍니다. 여기서는 "renders MyComponent without crashing"이라는 테스트 케이스가 25ms 만에 성공적으로 실행되었습니다.
Test Suites: 1 passed, 1 total: 전체 테스트 스위트의 수와 통과한 스위트의 수를 보여줍니다.
Tests: 1 passed, 1 total: 전체 테스트 케이스의 수와 통과한 케이스의 수를 보여줍니다.
Snapshots: 0 total: 스냅샷 테스트의 전체 개수를 보여줍니다.
Time: 2.145s, estimated 3s: 테스트 실행에 걸린 시간과 예상 시간을 보여줍니다.
Ran all test suites.: 모든 테스트 스위트가 실행되었음을 나타냅니다.
테스트가 실패한 경우, 오류 메시지와 함께 실패한 테스트 케이스에 대한 정보가 출력됩니다. 이를 통해 문제를 해결할 수 있습니다.