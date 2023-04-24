---
date: '2022-11-12'
title: '[타입스크립트 핸드북] JS에 TS 적용하기, typeof & keyof 연산자'
categories: ['Typescript']
summary: '타입스크립트 핸드북 스터디'
thumbnail: '../images/thumbnail/typescript.webp'
---

<small>노션으로 작성한 글을 옮긴 게시글입니다.</small>

## JS에 TS 적용하기

### 주의할 점

- 기능적인 변경은 절대 하지 않을 것
- 테스트 커버리지가 낮을 땐 함부로 타입스크립트를 적용하지 않을 것
- 처음부터 타입을 엄격하게 적용하지 않을 것 (점진적으로 strict 레벨을 증가)

### 적용 절차

1. 타입스크립트 환경 설정 및 ts 파일로 변환
2. any 타입 선언
3. any 타입을 더 적절한 타입으로 변경

### 1. 타입스크립트 프로젝트 환경 구성

- 프로젝트 생성 후 npm 초기화 명령어로 package.json 파일 생성
- 프로젝트 폴더에서 npm i typescript -D 로 타입스크립트 라이브러리 설치
- 타입스크립트 설정 파일 tsconfig.json 생성 후 기본 값 추가

```ts
{
  "compilerOptions": {
    "allowJs": true,
    "target": "ES5",
    "outDir": "./dist",
    "moduleResolution": "Node",
    "lib": ["ES2015", "DOM", "DOM.Iterable"]
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

- 서비스 코드가 포함된 자바스크립트 파일을 타입스크립트로 변환
- 컴파일 명령어 tsc로 타입스크립트 파일을 자바스크립트 파일로 변환

### 2. 엄격하지 않은 타입 환경에서 프로젝트 돌려보기

- 프로젝트에 테스트 코드가 있다면 테스트 코드가 통과하는지 먼저 확인
- 프로젝트의 js 파일을 모두 ts 파일로 변경
- 타입스크립트 컴파일 에러가 나는 것 위주로만먼저 에러가 나지 않게 수정
  - 여기서, 기능을 사소하게라도 변경하지 않도록 주의
- 테스트 코드가 성공하는지 확인

### 3. 명시적인 any 선언

- 프로젝트 테스트 코드가 통과하는지 확인
- 타입스크립트 설정 파일에 noImplicitAny: true 추가
- 가능한 타입을 적용할 수 있는 모든 곳에 타입을 적용
	- 라이브러리를 쓰는 경우 @types 관련 라이브러리를 찾아 설치
	- 타입을 정하기 어려운 곳이 있으면 명시적으로라도 any를 선언
- 테스트 코드가 통과하는지 확인

### 4. strict 모드 설정

- 타입스크립트 설정 파일에 아래 설정 추가

```ts
{
  "strict": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true,
  "strictBindCallApply": true,
  "strictPropertyInitialization": true,
  "noImplicitThis": true,
  "alwaysStrict": true,
}
```

- any 로 되어있는 타입들을 최대한 더 적절한 타입으로 변환
- as 와 같은 키워드를 최대한 사용하지 않도록 변경

## typeof, keyof

### typeof 연산자

- 변수, 함수 등의 타입을 반환
- 해당 값의 타입과 동일한 타입을 쓰고자 할 때 사용
- 기본 타입에는 별 쓸모가 없지만, 다른 타입 연산자(keyof 등)와 함께 쓰일 때 유용함

```ts
let str = "hello"
let str2: typeof str = "hi" 
// === let str2: string ="hi"
```

```ts
let s = "hello";
let n: typeof s; // let n : string
const add1 = (x:number)=>x+1
type MyAdd1Type = typeof add1 // (x:number)=>number

// 오류 발생
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
// <>안에는 타입이 들어가야 하기 때문

// 아래 문법은 정상동작함
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;

type P = {
	x: number;
	y: number;
}
```

### keyof 연산자

- 오브젝트 타입의 모든 key를 union 형태로 반환
- 이미 존재하는 오브젝트를 사용한 타입 지정이 가능

```ts
// no index signature
type Point = { x: number; y: number };
type P = keyof Point; // type P = 'x' | 'y'

// with index signature
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // type A = number

// 자바스크립트 오브젝트 키는 스트링 타입으로 반드시 강제변환되기 때문에 숫자도 허용함
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number
```

- 인터페이스도 적용 가능

```ts
interface Todo {
	id: number
	text: string
}

type Keys = keyof Todo
// type Keys = 'id' | 'text'

let a: Keys = 'id'
a = 'text'
a = 'ids' // 🚨ERROR!
```

### keyof typeof

- keyof 의 대상이 자바스크립트 값일 때
- 자바스크립트 값은 타입으로 쓸 수 없기 때문에 typeof 를 먼저 붙여야 함

```ts
const obj = { a: "123", b: "hello", c: "world" };
type Key = keyof typeof obj; // "a" | "b" | "c"

// typeof obj == { a: string, b: string, c:string }
```

## 참고 자료

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)