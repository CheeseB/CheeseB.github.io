---
date: '2022-10-24'
title: '[타입스크립트 핸드북] 이넘, 연산자를 이용한 타입 정의'
categories: ['Typescript']
summary: '타입스크립트 핸드북 스터디'
thumbnail: '../images/thumbnail/typescript.webp'
---

<small>노션으로 작성한 글을 옮긴 게시글입니다.</small>

## 이넘

### Enum (열거형)

- 특정 값들의 집합을 의미하는 자료형
- 기억하기 어려운 숫자 대신 친숙한 이름으로 접근/사용하기 위해 활용

```ts
enum Avengers { Capt, IronMan, Thor }
```

### 숫자형 이넘

- 초기값을 주면 초기값부터 차례로 1씩 증가

```ts
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right // 4
}
```

- 초기값 없으면 0부터 차례로 증가

```ts
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}
```

- 숫자 값을 통해 멤버 이름 도출 가능

```ts
enum Team {
  Manager   = 101,
  Planner   = 208,
  Developer = 302,
  Designer, // 302 + 1
}

let yamoo9:number = Team.Manager; // (enum member) Team.Manager = 101
let sarha:number = Team.Designer; // (enum member) Team.Designer = 303

let role:string = Team[302]; // 'Developer'
```

### 문자형 이넘

- 멤버 전부 특정 문자 또는 다른 이넘 값으로 초기화해야 함
- 숫자형 이넘과 달리 auto incrementing 적용 안됨

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

### 복합 이넘

- 문자와 숫자를 혼합하여 생성 가능
- 권고하지 않음. 같은 타입으로 이뤄진 이넘을 사용할 것

```ts
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```

### 런타임 시점, 컴파일 시점의 이넘 특징

- 런타임 시점의 이넘은 실제 객체 형태로 존재함
- keyof 를 사용해야 하는 상황에선 keyof typeof 를 사용

```ts
enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
       console.log('Log level key is: ', key);
       console.log('Log level value is: ', num);
       console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');
```

### 리버스 매핑 (Reverse Mapping)

- 이넘의 키로 값을 얻을수 있고, 반대로 값으로 키를 얻을수도 있음
- 숫자형 이넘에만 존재하는 특징

```ts
enum Enum {
  A
}
let a = Enum.A; // 키로 값을 획득 하기
let keyName = Enum[a]; // 값으로 키를 획득 하기
```

## 연산자를 이용한 타입 정의

### 유니온 타입 (Union): |

- OR 연산자처럼 A이거나 B이다 라는 의미
- 타입 여러개를 연결함

```ts
// 문자열 타입, 숫자 타입 둘다 가능
function logText(text: string | number) { ... }
```

### 유니온 타입의 장점

```ts
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixed();
// 에러 발생, age의 타입이 any로 추론되기 때문에
// 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않음
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed();
// 정상 동작, age의 타입이 `number`로 추론되기 때문에
// 숫자 관련된 API를 쉽게 자동완성 할 수 있음
    return age;
  }
  if (typeof age === 'string') {
    return age;
  }
  return new TypeError('age must be number or string');
}
```

### Union 사용 시 주의할 점

- 타입스크립트 관점에선 함수 호출 시, 정의된 유니온 타입 중에 무엇이 올 지 모름
- 함수 안에서 별도로 타입별 동작을 설정하지 않는 이상, 기본적으로는 유니온 타입에
공통적으로 들어있는 속성만 접근 가능

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

// ver1.
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}

// ver2.
function introduce(someone: Person | Developer) {
  console.log(someone.name); // O 정상 동작
}

// ver3.
function introduce(someone: Person | Developer) {
  if (typeof someone === 'Person') {
    console.log(someone.age); // O 정상 동작
  }
  if (typeof someone === 'Developer') {
		console.log(someone.skill); // O 정상 동작
  }
}
```

### 인터섹션 타입 (Intersection): &

- 여러 타입을 모두 만족하는 하나의 타입을 의미
- 여러 타입 정의를 하나로 합침

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: number;
}

type Capt = Person & Developer;

type Capt = {
  name: string;
  age: number;
  skill: number;
}
```

- 서로 이름만 같고 타입이 다른 속성은 합쳐질 때 두 타입의 공통된 부분만을 타입으로 갖게 됨

```ts
interface Person {
  name: string;
	age: string | number;
}

interface Developer {
  name: number;
	age: number;
}

type Capt = Person & Developer;

type Capt = {
  name: never;
	age: number;
}
```


## 참고 자료

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)