---
date: '2023-05-18'
title: 'React Testing Library 쿼리 함수 모음'
categories: ['Testing', 'React']
summary: 'DOM 요소를 조회하는 함수들'
thumbnail: '../images/thumbnail/testing.webp'
---

## React Testing Library의 DOM 요소 조회 함수

### getByRole

> 역할(role)에 따라 요소를 찾는다.

role 속성을 직접 지정할 수도 있지만, 기본적으로 role을 가지고 있는 요소들이 있으므로   
되도록 기본 role을 갖고있는 요소들은 불필요하게 role을 지정하지 않는 것이 좋다.

```html
<button>버튼</button>
<h1>타이틀</h1>
<div role="test"></div>
```

```js
const button = screen.getByRole('button');
const heading = screen.getByRole('heading');
const div = screen.getByRole('test');
```

이는 접근성을 중심으로 요소를 찾는 가장 권장되는 방법이다.

### getByLabelText

> label 의 텍스트 값으로 label과 연결된 input 태그를 찾는다.

input과 연결되지 않은 label의 텍스트를 사용하면 요소를 찾을 수 없다.

```html
<lable for="id">getByLabelText</label>
<input id="id" />
```

```js
const input = screen.getByLabelText('getByLabelText'); 
```

### getByPlaceholderText

> placeholder 값으로 input 또는 textarea 를 찾는다.

```html
<input placeholder="input password">
```

```js
const input = screen.getByPlaceholderText('input password');
```

### getByText

> 요소가 가진 text 값으로 요소를 찾는다.

```html
<div>getByText</div>
```

```js
const div = screen.getByText('getByText');
```

### getByDisplayValue

> input, textarea, select의 현재 값을 기준으로 요소를 찾는다.

```html
<input value="default-value">
```

```js
const input = screen.getByDisplayValue('default-value');
```

### getByAltText

> 이미지의 alt 속성의 값으로 이미지 요소를 찾는다.

```html
<img src="image.png" alt="이미지">
```

```js
const image = screen.getByAltText('이미지');
```

### getByTitle

> title 속성의 값으로 요소를 찾는다.

title 속성은 툴팁으로 표시되며, 해당 요소에 대한 정보를 나타낼 수 있다.

```html
<div title="tooltip">툴팁</div>
```

```js
const div = screen.getByTitle('tooltip');
```

### getByTestId

> 요소에 testid 속성값을 부여하여 요소를 찾는다.

이 방법은 위에 기술한 모든 쿼리를 사용해서 요소를 찾기 힘든 경우에 최후의 수단으로 사용하는 방법이다.

```html
<div data-testid="testid">Element</div>
```

```js
const div = screen.getByTestId('testid');
```

---

이와 같은 쿼리 함수들은 테스트 시나리오에 따라 적절하게 사용되어야 하며,   
항상 접근성을 중심으로 선택하는 것이 가장 좋다.

## 쿼리함수 더 잘 사용하는 법

### 정규식, exact 옵션 사용

문자열을 사용할 땐 기본적으로 완전히 일치하는 요소만 찾을수 있다.   
하지만 정규식이나 `{ exact: false }` 옵션을 사용하면 더 다양한 조건으로 요소를 찾을 수 있다.

```html
<div>Hello World!</div>
```

```js
screen.getByText('Hello World!'); // 정상
screen.getByText('hello wrold'); // Throw Error
```

```js
screen.getByText(/hello/i); // 정상
screen getByText('hello', { exact: false }); // 정상
```

`{ exact: false }` 옵션 사용 시 해당 문자열과 일부만 일치하는 경우에도 요소를 찾을 수 있으며, 대소문자도 구분하지 않는다.

### 콜백함수 사용

좀더 커스텀하게 요소를 찾고싶은 경우에 사용하며, 찾는요소와 일치하면 true, 그렇지 않으면 false를 반환해주도록 하면 된다.

```html
<div>16</div>
<div>안녕하세요</div>
```

```js
const div = getByText((content, element) => {
	return content && content % 4 === 0;
});
```

여기서 content는 사용하는 쿼리에 따른 content이다.   
즉 getByText 이면 요소의 text값, getByTitle 이면 요소의 title 속성값이 될 수 있다.

### Normalizer

기본적으로 요소를 찾을 땐 값에 trim 을 적용하며, 문자열 사이에 공백이 있을 경우 하나만 적용한다.

```html
<div>    Hello        World       </div>
```

```js
const div = screen.getByText('Hello World'); // 정상
```

만약 이를 적용하고 싶지 않은 경우, option중 normalizer 값을 사용하면 된다.

```js
const div = screen.getByText('    Hello        World       ', {
	normalizer: getDefaultNormalizer({
		trim: false,
		collapseWhitespace: false
	})
}); // 정상
```


## 참고 자료

- [suld2495.log - React Testing Library을 사용하여 테스트2 - Queries](https://velog.io/@suld2495/React-Testing-Library%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%85%8C%EC%8A%A4%ED%8A%B82-Queries)