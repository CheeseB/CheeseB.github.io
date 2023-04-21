---
date: '2022-10-17'
title: '[타입스크립트 핸드북] 함수, 인터페이스'
categories: ['Typescript']
summary: '타입스크립트 핸드북 스터디'
thumbnail: '../images/thumbnail/typescript.webp'
---

<small>노션으로 작성한 글을 옮긴 게시글입니다.</small>

## 함수

### 함수의 기본적인 타입 선언

```ts
// js
function sum(a, b) {
  return a + b;
}

// ts
function sum(a: number, b: number): number {
  return a + b;
}

// ts (void function)
function sum(a: number, b: number): void {
  console.log(a+b);
}
```

### 함수의 인자

- 함수의 인자를 모두 필수 값으로 간주
- 정의된 매개변수 외에 추가로 인자를 받거나, 그보다 더 적게 받을 수 없음

```ts
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters
```

- 인자 안받아도 작동하게끔 하고싶으면 해당 인자에 물음표 기호 사용

```ts
function sum(a: number, b?: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // 타입 에러 없음
```

- 매개변수 초기화는 ES6 문법과 동일

```ts
function sum(a: number, b = '100'): number {
  return a + b;
}
sum(10, undefined); // 110
sum(10, 20, 30); // error, too many parameters
sum(10); // 110
```

### Rest 문법이 적용된 매개변수

```ts
function sum(a: number, ...nums: number[]): number {
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}
```

### 함수의 this

- 타입스크립트에선 this 가 가리키는 것을 명시할 수 있음
    - this가 잘못 사용되는 것을 방지

```ts
function 함수명(this: 타입) {
  // ...
}
```

```ts
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: '#app',
  count: 10,
  init: function(this: Vue) {
    return () => {
      return this.count;
    }
  }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10
```

### 콜백에서의 This

```ts
interface UIElement {
  // 'this: void' 코드는 함수에 this 타입을 선언할 필요가 없다는 의미
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClick(this: Handler, e: Event) {
        // 인터페이스의 스펙에선 this가 필요없다고 했지만 사용했기 때문에 에러발생
        this.info = e.message;
    }
}

let handler = new Handler();
uiElement.addClickListener(handler.onClick); // error!
```

```ts
// 변경 후
class Handler {
    info: string;
    onClick(this: void, e: Event) {
        console.log('clicked!');
    }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick);
```

## 인터페이스

### 인터페이스란

- 상호 간에 정의한 약속 혹은 규칙을 의미

### 타입스크립트의 인터페이스

- 일반적으로 타입 체크에 사용됨 - 여러 타입을 갖는 요소들로 이뤄진 새로운 타입
- 변수, 함수, 클래스에 사용 가능

### 변수와 인터페이스

- 인터페이스는 변수의 타입으로 사용할 수 있음 (새로운 타입 정의)
- 인터페이스를 타입으로 선언한 변수는 해당 인터페이스를 준수해야 함

```ts
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수해야 함
todo = { id: 1, content: 'typescript', completed: false };
```

- 인터페이스로 함수 파라미터의 타입 선언도 가능
- 해당 함수에는 지정한 인터페이스를 준수하는 타입의 인자를 전달해야 함

```ts
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todos: Todo[] = [];

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수해야 함
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos)
// [ { id: 1, content: 'typescript', completed: false } ]
```

### 함수와 인터페이스

- 인터페이스는 함수의 타입으로 사용 가능
- 타입이 선언된 파라미터 리스트와 리턴 타입을 정의함

```ts
// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수해야 함
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10)); // 100
```

### 클래스와 인터페이스

- 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는
지정된 인터페이스를 준수해야 함
- 클래스의 일관성을 유지할 수 있음
- 인터페이스는 프로퍼티, 메서드를 가질 수 있다는 점에서 클래스와 유사하지만,
직접 인스턴스를 생성할 수는 없음

```ts
// 인터페이스의 정의
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현해야 함
class Todo implements ITodo {
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ) { }
}

const todo = new Todo(1, 'Typescript', false);

console.log(todo);
```

- 인터페이스는 메서드도 포함할 수 있지만, 모든 메서드는 추상 메서드임

```ts
// 인터페이스의 정의
interface IPerson {
  name: string;
  sayHello(): void;
}

/*
인터페이스를 구현하는 클래스는
인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현해야 함
*/
class Person implements IPerson {
  // 인터페이스에서 정의한 프로퍼티의 구현
  constructor(public name: string) {}

  // 인터페이스에서 정의한 추상 메소드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person('Lee');
greeter(me); // Hello Lee
```

### 덕 타이핑 (구조적 타이핑)

- 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면
그 인터페이스를 구현한 것으로 인정함

```ts
interface IDuck { // 1
  quack(): void;
}

class MallardDuck implements IDuck { // 3
  quack() {
    console.log('Quack!');
  }
}

class RedheadDuck { // 4
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void { // 2
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
```

```ts
interface IPerson {
  name: string;
}

function sayHello(person: IPerson): void {
  console.log(`Hello ${person.name}`);
}

const me = { name: 'Lee', age: 18 };
sayHello(me); // Hello Lee
```

### 선택적 프로퍼티

- 선택적으로 필요한 프로퍼티명 뒤에 ? 를 붙이면 생략해도 에러가 발생하지 않음

```ts
interface UserInfo {
  username: string;
  password: string;
  age?    : number;
  address?: string;
}

const userInfo: UserInfo = {
  username: 'ungmo2@gmail.com',
  password: '123456'
}
```

### 인터페이스 상속

- 인터페이스도 extends 키워드로 인터페이스나 클래스를 상속받을 수 있음

```ts
interface Person {
  name: string;
  age?: number;
}

interface Student extends Person {
  grade: number;
}

const student: Student =  {
  name: 'Lee',
  age: 20,
  grade: 3
}
```

- 복수의 인터페이스를 상속받는 것도 가능

```ts
interface Person {
  name: string;
  age?: number;
}

interface Developer {
  skills: string[];
}

interface WebDeveloper extends Person, Developer {}

const webDeveloper: WebDeveloper =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
```

- 인터페이스는 클래스를 상속받을 땐 모든 멤버(public, protected, private)가 상속되지만
구현까지 상속하진 않음

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

interface Developer extends Person {
  skills: string[];
}

const developer: Developer =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
```

### 읽기 전용 속성 (readonly)

- 인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성

```ts
interface CraftBeer {
  readonly brand: string;
}

let myBeer: CraftBeer = {
  brand: 'Belgian Monk'
};
myBeer.brand = 'Korean Carpenter'; // error!
```


## 참고 자료

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)