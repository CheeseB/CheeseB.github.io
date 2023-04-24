---
date: '2022-10-26'
title: '[타입스크립트 핸드북] 클래스, 제네릭'
categories: ['Typescript']
summary: '타입스크립트 핸드북 스터디'
thumbnail: '../images/thumbnail/typescript.webp'
---

<small>노션으로 작성한 글을 옮긴 게시글입니다.</small>

## 클래스

### readonly

- 클래스의 속성에 readonly 키워드 사용 시 오직 접근만 가능함
- 생성자를 통한 초기값 설정만 가능, 그 이후엔 변경 불가

```ts
class Developer {
    readonly name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
let john = new Developer("John");
john.name = "John"; // error! name is readonly.
```

- 생성자의 인자에 readonly를 추가하여 코드를 줄일 수 있음

```ts
class Developer {
  readonly name: string;
  constructor(readonly name: string) {}
}
```

### 접근 제어자

- 접근 가능 범위

|  | public | protected | private |
| --- | --- | --- | --- |
| 클래스 내부 | O | O | O |
| 서브 클래스 | O | O | X |
| 외부 | O | X | X |

### Getter, Setter

- 타입스크립트는 클래스로 생성한 객체 속성의 접근과 할당을 제어할 수 있음
- get 만 선언하고 set 을 선언하지 않으면 해당 속성은 자동으로 readonly 로 인식됨

```ts
// public 속성
class Developer {
  name: string;
}
const josh = new Developer();
josh.name = 'Josh Bolton';
```

```ts
// private 속성은 getter와 setter를 통해서만 접근, 할당 가능
class Developer {
  private name: string;
  
  get name(): string {
    return this.name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error('이름이 너무 깁니다');
    }
    this.name = newValue;
  }
}

const josh = new Developer();

// setter 사용
josh.name = 'Josh Bolton'; // Error
josh.name = 'Josh';

// getter 사용
const name = josh.name; // 'Josh'
console.log(josh.name); // 'Josh'
```

### 추상 클래스 (Abstract Class)

- 특정 클래스의 상속 대상이 되는 클래스
- 추상 클래스의 추상 메서드는 정의만 있을 뿐 몸체는 구현되어 있지 않으며,
상속받는 클래스에서 무조건 구현해야 함
- 추상 메서드 뿐 아니라 실사용이 가능한 메서드도 정의 가능함.
이는 상속받은 클래스에서 사용 가능
- 추상 클래스 자체로는 인스턴스 생성 불가

```ts
abstract class Developer {
  abstract coding(): void; // 추상 메서드는 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log('drink coffee');
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    console.log('develop web');
  }
  design(): void {
    console.log('design web');
  }
}

const dev = new Developer(); // error: cannot create an instance of an abstract class

const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink coffee
josh.design(); // design web
```

- 추상 클래스에서 상속받은 메서드 또한 서브클래스에서 오버라이딩 가능

```ts
abstract class Developer {
  drink(): void {
    console.log('drink coffee');
  }
}

class FrontEndDeveloper extends Developer {
  drink(): void {
    console.log('drink ice coffee');
  }
}

const josh = new FrontEndDeveloper();
josh.drink(); // drink ice coffee
```

### 정적 속성/메서드 (Static)

- 클래스를 통해 인스턴스를 생성할 필요 없이 클래스 자체의 공통된 속성 또는 메서드 사용 가능
- 클래스명으로 접근 가능, 인스턴스로 접근 시 에러

```ts
class Mathmatics {
  // 스태틱 속성
  static PI:number = Math.PI;

  // 스태틱 메서드
  static calcCircumference(radius:number) :number {
    return this.PI * radius * 2;
  }
  static calcCircleWidth(radius:number): number {
    return this.PI * Math.pow(radius, 2);
  }
}

let radius = 4;

console.log(Mathmatics.PI);
console.log(Mathmatics.calcCircleWidth(radius));
console.log(Mathmatics.calcCircumference(radius));
```

## 제네릭

### 제네릭(Generics) 이란?

- 클래스나 함수에서 사용할 타입을 해당 클래스/함수를 사용할때 결정하는 기법
- 타입을 마치 함수의 파라미터처럼 사용

```ts
function getText<T>(text: T): T {
  return text;
}

getText<string>('hi'); // 'hi'
getText<number>(10); // 10
getText<boolean>(true); // true
```

### 제네릭을 사용하는 이유

```ts
function logText(text: string): string {
  return text;
}

// 위 함수에서 여러 타입을 허용하고 싶을 때
function logText(text: any): any {
  return text;
}

// 위 함수는 잘 동작하지만
// 함수의 인자로 어떤 타입이 들어가고 어떤 값이 반환되는 지 알 수 없음
// 이러한 문제점을 해결할 수 있는 것이 제너릭
function logText<T>(text: T): T {
  return text;
}
// 함수의 입력값에 대한 타입과 출력값에 대한 타입이 동일한지 검증 가능
```

- 제너릭으로 선언한 함수는 두가지 방법으로 호출 가능

```ts
// #1
const text = logText<string>("Hello Generic");
// #2
const text = logText("Hello Generic");

// 두번째 방법이 더 짧고 가독성이 좋아 흔하게 사용됨
// 만약 복잡한 코드에서 두번째 방법으로 타입 추정이 어렵다면 첫번째 방법을 사용할 것
```

### 타입이 부여된 제네릭

```ts
function logText<T>(text: T): T {
  console.log(text.length); // Error: T doesn't have .length
  return text;
}
// text 에 문자열이나 배열이 들어온다 해도, number가 들어올 가능성이 있으므로
// .length 코드는 유효하지 않음

function logText<T>(text: T[]): T[] {
  console.log(text.length); // ok
  return text;
}
// 위와 같이 제네릭에 타입을 부여할 수 있음
// 제네릭 타입이 배열이므로 .length 가 허용됨

function logText<T>(text: Array<T>): Array<T> {
  console.log(text.length);
  return text;
}
// 위처럼 더 명시적으로 선언할 수도 있음
```

### 제네릭 타입 (제네릭 인터페이스)

```ts
function logText<T>(text: T): T {
  return text;
}

// 아래의 두 코드는 같은 의미
let str: <T>(text: T) => T = logText;
let str: {<T>(text: T): T} = logText;
```

```ts
// 위 코드의 제네릭 타입 부분을 인터페이스로 작성

interface GenericLogTextFn {
  <T>(text: T): T;
}

function logText<T>(text: T): T {
  return text;
}

let myString: GenericLogTextFn = logText; // Okay
```

```ts
// 인터페이스에 인자 타입을 강조하고 싶을 땐 아래와 같이 변경 가능
interface GenericLogTextFn<T> {
  (text: T): T;
}

function logText<T>(text: T): T {
  return text;
}

let myString: GenericLogTextFn<string> = logText;
```

### 제네릭 클래스

```ts
class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();
```

- 제네릭 클래스는 인스턴스 측면에서만 제네릭이므로,
static 멤버는 T 매개변수를 사용할 수 없음

### 제네릭 제약 조건

- 앞서 살펴본 배열형 제네릭 외에도, 제네릭 함수에 어느정도 타입 힌트를 줄 수 있음

```ts
interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}
// 타입에 대한 강제는 아니지만, length에 대해 동작하는 인자만 넘겨받을 수 있음

logText(10); // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
logText({ length: 0, value: 'hi' });
// `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음
```

### 제너릭을 통한 객체 속성 제약

```ts
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];  
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a"); // okay
getProperty(obj, "z"); // error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.
```


## 참고 자료

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)