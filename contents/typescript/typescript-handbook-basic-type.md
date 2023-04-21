---
date: '2022-10-15'
title: '[타입스크립트 핸드북] 기본 타입'
categories: ['Typescript']
summary: '타입스크립트 핸드북 스터디'
thumbnail: '../images/thumbnail/typescript.webp'
---

<small>노션으로 작성한 글을 옮긴 게시글입니다.</small>

## 타입스크립트의 기본 타입 12가지

- Boolean , Number , String
- Object , Array , Tuple , Enum
- Any , Void , Null , Undefined , Never

```ts
let str: string = 'hi';
let num: number = 10;
let isLoggedIn: boolean = false;
```

배열은 제네릭을 사용해서도 선언 가능

```ts
let arr: number[] = [1,2,3];
let arr: Array<number> = [1,2,3];
```

ReadonlyArray<T> 를 사용하면 읽기 전용 배열 생성 가능

```ts
let arr: ReadonlyArray<number> = [1,2,3];
arr.splice(0,1); // error
arr.push(4); // error
arr[0] = 100; // error
```

## Tuple

배열의 길이가 고정되고, 각 요소의 타입이 지정되어 있음

- 정의하지 않은 타입, 인덱스로 접근할 경우 오류 발생

```ts
let arr: [string, number] = ['hi', 10];

arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, Property '5' does not exist on type '[string, number]'.
```

## Enum

특정 값(상수) 들의 집합을 의미

- 인덱스 번호로도 접근 가능
- 인덱스를 임의로 변경하여 사용하는 것도 가능

```jsx
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;

// 인덱스 번호로 접근
let hero: Avengers = Avengers[0];

// 인덱스 임의 변경
enum Avengers { Capt = 2, IronMan, Thor }
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor
```

## Any

모든 타입을 허용

- 기존 자바스크립트에 타입스크립트를 점진적으로 적용할 때 활용하면 좋음
- 그 외에는 사용을 지양

```jsx
let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];
```

## Void

변수는 undefined, null 만 허용 / 함수는 결과값을 반환하지 않음

```jsx
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}
```

## Never

항상 오류를 출력하거나 리턴값을 절대로 내보내지 않는 함수

- 일반적으로 함수의 리턴 타입으로 사용됨
- 무한 루프에 빠지는 것과 같이, 절대 정상적으로 끝까지 실행되지 않는 함수
- 변수 타입으로 지정하면 해당 변수는 never 타입 외에 어떤것도 할당 불가
- 변수 타입으로 지정하면 해당 변수는 never 타입 외에 어떤것도 할당 불가

```jsx
// 항상 오류 발생
function invalid(message:string): never {
  throw new Error(message);
}

// never
function neverEnd(): never {
  while (true) {}
}

let never_type:never;

// 오류 발생: 숫자 값을 never 타입 변수에 할당할 수 없습니다.
never_type = 99;

// 함수의 반환 값이 never 타입 이기 때문에 오류가 발생하지 않습니다.
never_type = (function():never { throw new Error('ERROR') })();
```

never 타입의 쓰임새

[타입스크립트의 Never 타입 완벽 가이드](https://ui.toast.com/weekly-pick/ko_20220323)


## 참고 자료

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)