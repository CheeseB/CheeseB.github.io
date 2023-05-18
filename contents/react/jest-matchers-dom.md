---
date: '2023-05-18'
title: 'Jest와 Jest-DOM 의 Matcher 함수 모음'
categories: ['React']
summary: '테스트 코드에서의 검증을 위한 Matcher 함수들'
thumbnail: '../images/thumbnail/react.webp'
---

## Jest 의 기본 Matcher

### toBe()

> 단순 값 비교

```js
expect(1 + 4).toBe(5);
```

### toMatch()

> toBe 함수의 정규식 버전

```js
test("string", () => {
  expect(getUser(2).email).toMatch(/.*test.com$/);
});
```

### toEqual()

> 객체가 일치하는지 검증

```js
expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
```

### toBeDefined()

> 변수가 정의되어 있는지 여부를 테스트


### toBeTruthy() / toBeFalsy()

> 검증 대상이 true로 간주되는지, false로 간주되는지 테스트

```js
test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy(); // 숫자 0은 false를 의미하기도 하므로 통과
  expect("0").toBeTruthy(); // 문자열은 true를 의미하기도 하므로 통과
});
```

### toBeCalled() / toHaveBeenCalled()

> 함수가 호출되었는지 여부를 테스트

두 함수는 같은 역할을 한다.

```js
function drinkAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

describe('drinkAll', () => {
	test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    
    expect(drink).toHaveBeenCalled(); // 함수 호출 O
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    
    expect(drink).not.toHaveBeenCalled(); // 함수 호출 X
  });
});
```

### toHaveLength()

> 배열의 길이를 체크하는 함수

```js
test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  
  expect(colors).toHaveLength(3); // 배열길이 3
});
```

### toContain()

> 특정 원소가 배열에 들어있는지 테스트

```js
test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  
  expect(colors).toContain("Yellow"); // Yellow 문자열 원소를 가지고 있는지
  expect(colors).not.toContain("Green"); // Green 문자열 원소를 안 가지고 있는지
});
```

### toThrow()

> 예외 발생 여부를 테스트

- 인자 없이 사용: 예외 발생 여부를 체크
- 인자로 문자열을 넘겼을 때: 예외 메세지를 비교
- 인자로 정규식을 넘겼을 때: 예외 메세지를 정규식으로 체크

```js
test("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow(); // 예외가 발생했는지 체크
  expect(() => getUser(-1)).toThrow("Invalid ID"); // 에러 메세지가 "Invalid ID" 인지 체크
});
```

여기서 주의할 점이, expect 함수에 넘기는 검증 대상을 반드시 함수로 한번 감싸줘야 한다는 것이다.   
그렇지 않으면 예외 발생 여부를 체크하는것이 아닌, 테스트 실행도중 예외를 발생시켜 버리기 때문에 테스트는 항상 실패하게 된다.

### toHaveProperty()

> 객체에 해당 key: value 값이 있는지 검사

```js
test("find user property", async () => {
   const user = {
      id : 1,
      name : "Leanne Graham"
   }
   
   expect(user).toHaveProperty("id", 1);
   expect(user).toHaveProperty("name", "Leanne Graham");
 });
```

### toBeCalledTimes()

> 함수가 몇번 호출되었는지 검증

```js
drink("aa");
drink("aa");

expect(drink).toHaveBeenCalledTimes(2); // drink함수가 2번 호출되었는지 검증
```

### toBeCalledWith()

> 함수가 설정한 인자로 호출 되었는지 검증

```js
drink("aa");

expect(drink).toHaveBeenCalledWith("aa"); // drink함수가 "aa" 인자로 호출되었는지 검증
```

### toReturn() / toHaveReturned()

> 함수가 오류 없이 반환되었는지 테스트

### toReturnTimes() / toHaveReturnedTimes()

> 함수가 지정한 횟수만큼 오류없이 반환되는지 테스트

단지 호출을 몇번 했는지는 검증하지 않는다.

```js
test('drink returns twice', () => {
  const drink = jest.fn(() => true);

  drink();
  drink();

  expect(drink).toHaveReturnedTimes(2); // 오류없이 리턴을 무사히 마친 횟수가 2번인지 검증
});
```

### toReturnWith() / toHaveReturnedWith(value)

> 함수가 지정한 값을 반환하는지 테스트

```js
test('drink returns coke', () => {
  const beverage = {name: 'coke'};
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage);

  expect(drink).toHaveReturnedWith('coke'); // drink(beverage) 함수 결과가 'coke' 문자열을 반환하는지 검증
});
```

## Jest-DOM 의 Matcher

### toBeInTheDocument()

> DOM에 요소가 존재하는지 검사

```js
expect(element).toBeInTheDocument();
```

### toBeVisible()

> 요소가 화면에 보이는지 검사

```js
expect(element).toBeVisible();
```

### toBeDisabled() / toBeEnabled()

> 요소가 비활성화되어 있는지 혹은 활성화되어 있는지 검사

```js
expect(element).toBeDisabled();
expect(element).toBeEnabled();
```

### toHaveTextContent(text)

> 요소가 주어진 텍스트를 가지고 있는지 검사

```js
expect(element).toHaveTextContent('Hello World');
```

### toHaveAttribute(attribute)

> 요소가 주어진 속성을 가지고 있는지 검사

인자를 2개 넘기면 속성의 값도 검사할 수 있다.

```js
expect(element).toHaveAttribute('disabled');
expect(element).toHaveAttribute('type', 'button');
```

### toHaveClass(class)

> 요소가 주어진 클래스를 가지고 있는지 검사

```js
expect(element).toHaveClass('btn-primary');
```

### toHaveValue(value)

> input 이나 textarea 같은 요소가 주어진 값을 가지고 있는지 검사

```js
expect(element).toHaveValue('Hello World');
```

## 참고 자료

- [Jest](https://jestjs.io/docs/expect#matchers)
- [Jest-dom](https://github.com/testing-library/jest-dom)
- [Inpa Dev - 유용한 matcher 함수 종류 모음](https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-jest-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC)