---
date: '2022-11-10'
title: '[타입스크립트 핸드북] tsconfig, types 라이브러리'
categories: ['Typescript']
summary: '타입스크립트 핸드북 스터디'
thumbnail: '../images/thumbnail/typescript.webp'
---

<small>노션으로 작성한 글을 옮긴 게시글입니다.</small>

## tsconfig

### 타입스크립트 설정 파일 (tsconfig.json)

- 타입스크립트를 자바스크립트로 변환할 때의 설정을 정의해 놓는 파일
- 프로젝트에서 tsc 명령어를 치면 ts 설정 파일에 정의된 내용을 기준으로 컴파일을 진행함

### tsc

- 타입스크립트를 자바스크립트로 변환할 때 사용하는 명령어

```bash
tsc app.ts
# app.ts -> app.js
```

### 타입스크립트 설정 파일 인식 기준

- 대상 파일을 지정하지 않고 tsc 명령어 실행 시, 현재 폴더에 있는 ts 설정 파일을 기준으로 컴파일을 수행함
  - 현재 폴더에 ts 설정 파일이 없으면 프로젝트 폴더 내에서 상위 폴더의 경로를 검색해 나감
- tsconfig.json 파일의 경로를 명시적으로 지정하려면 명령어를 사용해야 함
    
```bash
# 형식 예시
tsc --project 상대 경로

# 실제 명령어 예시
tsc --project ./src
tsc -p ./src
```
    

### 타입스크립트 설정 파일 속성

- files
	- 타입스크립트 변환 명령어를 입력할 때마다 대상 파일의 경로를 지정하지 않고
	설정 파일에 미리 정의해둘 수 있음

```ts
{
	"files": ["app.ts", "./utils/math.ts"]
}
```
    
- include
	- files와 같이 파일을 개별로 지정하지 않고, 변환할 폴더를 지정할 수 있음
	- 와일드카드 패턴
		- \* : 해당 디렉토리의 모든 파일 검색
		- ? : 해당 디렉토리 안 파일 이름 중 한 글자라도 맞으면 해당
		- \*\*: 하위 디렉토리를 계속해서 접근

```ts
{
	"include": ["src/**/*"]
}
```

- exclude
	- include 와 반대되는 속성으로, 변환하지 않을 폴더 경로를 지정함
	- 설정하지 않으면 기본적으로 node_modules, bower_components 같은 폴더를 제외시킴
	- 컴파일 대상 경로 정의 속성들의 우선순위: files > include = exclude

```ts
{
	"exclude": ["node_modules"]
}
```

- typeRoots
	- node_modules는 기본적으로 컴파일에서 제외되지만, 서드 파티 라이브러리의 타입을 정의해 놓는 @types 폴더는 컴파일에 포함됨

```
└─ node_modules
		├─ @types => 컴파일에 포함
		├─ lodash => 컴파일에서 제외
```

- 이 때 @types의 기본 경로를 변경하고자 할 때 이 속성을 지정함

```ts
{
	"compilerOptions": {
		"typeRoots" : ["./my-types"]
	}
}
```

- extends
	- 특정 타입스크립트 설정 파일에서 다른 타입스크립트 설정의 내용을 가져와 추가 가능
	- 가져온 파일의 내용을 덮어쓰거나 새로 정의할 수도 있음

```ts
// config/base.json
{
	"compilerOptions": {
		"noImplicitAny": true
	}
}

// tsconfig.json
{
	"extends": "./config/base"
}
```

- target
	- 컴파일 했을 때 빌드 디렉토리에 생성되는 자바스크립트의 버전을 의미
	- es3, es5, es6 외에도 가장 최신 버전인 esnext 까지 존재

```ts
{
	"target": "esnext"
}
```

- lib
	- 컴파일 시 포함될 라이브러리의 목록

```ts
{
	"lib": ["es2015", "dom", "dom.iterable"]
}
// es2015는 async 코드 컴파일 시 프로미스 객체가 필요하므로 추가
// dom은 DOM API를 사용하는 경우 필요
```

- allowJs
	- 컴파일 시 자바스크립트 파일도 포함될 수 있는지 여부를 설정 (true, false)
	- 기존에 존재하는 자바스크립트 프로젝트에 점진적으로 타입스크립트를 적용할 때 사용

## types 라이브러리

### @types

- 자바스크립트로 만들어진 서드 파티 라이브러리를 타입스크립트에서 사용하려면 각 기능에 대한 타입이 정의되어 있어야 함
- jQuery, lodash, chart 등

```ts
import $ from 'jquery';

$(document).ready();

// 제이쿼리 라이브러리 내부 코드에 대한 타입 정의가 되어있지 않아
// 타입스크립트에서 제대로 동작하지 않음
```

- 이 경우 @types 라이브러리를 설치해야 함

```bash
npm i -D @types/jquery
```

- 대중적으로 흔히 쓰이는 자바스크립트 라이브러리는 대부분 @types 라는 별칭으로 타입스크립트용 보조 라이브러리를 제공함
- 이게 없는 경우에는 스스로 선언해야 함

### @types 라이브러리 내부 구조

- 일반적으로 index.d.ts 파일과 package.json 파일로 구성됨
	- package.json 안에는 types 속성이 정의됨

```txt
└─ @types/jquery
   ├─ index.d.ts
   ├─ package.json
```

### @types 라이브러리가 없는 경우

[[Typescript] @type이 없는 외부 라이브러리 사용 방법](https://devalice.tistory.com/90)

## 참고 자료

[타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)