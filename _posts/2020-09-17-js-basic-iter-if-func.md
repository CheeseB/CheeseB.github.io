---
title: "[자바스크립트] 기본 문법, 반복문, 조건문, 함수"
categories:
- js
tags:
- 자바스크립트
- javascript
classes: wide
---


## 기본 문법, 반복문, 조건문



1. 자바스크립트에서의 기본 출력 방법: alert(표시할 문자)
	- 웹 브라우저에 경고창 띄움



2. 문자열을 쓸 땐 작은따옴표 큰따옴표 아무거나 쓸 수 있음 (일관되게만 쓰면 됨)
	- 만약 문자열 안에 따옴표를 써야한다면 바깥의 따옴표와 다른 따옴표를 쓰거나 이스케이프 문자 (\', \")를 써야함



3. 불 자료형끼리 크기 비교 가능. (true는 1 false는 0으로 변환)



4. 여러 변수를 한 번에 선언, 초기화 가능



5. 선언하지 않았거나, 선언했지만 초기화하지 않은 변수의 자료형은 undefined
	- undefined도 null처럼 빈값을 의미하지만 다른점은 null은 사용자가 직접 값을 비울때 사용, undefined는 컴퓨터가 디폴트로 넣어주는 빈값



6. prompt() 함수
	- 입력창을 띄우고 사용자에게 입력받은 걸 문자열로 리턴함
	- 숫자 값을 얻고싶다면 Number(prompt())이렇게 변환해줘야 함
	- 첫번째 인자는 입력창 위의 설명란, 두번째 인자는 입력 칸 안에 디폴트로 띄울 값



7. confirm() 함수
	- 사용자에게 확인을 요구하는 메시지 창 띄움
	- 확인을 누르면 ture 리턴, 취소 누르면 false 리턴



8. 문자와 숫자 혹은 문자와 문자를 + 연산하면 숫자가 문자로 변환되어 합쳐진 문자가 됨



```javascript
52 + '12' // 5212
'52' + '12' // 5212
```



- 하지만 + 가 아닌 그 외의 연산들은 문자를 숫자로 변환하여 연산함



```javascript
4 * '3' // 12
'4' * '3' // 12
```



9. Number(), String()으로 자료형을 변환시키듯 Boolean()을 통해 불 자료형으로 변환시키는 것도 가능



```javascript
// 아래의 다섯가지 경우만 false로 변환됨
// 그 외 나머지는 전부 true
Boolean(0)
Boolean(NaN)
Boolean('')
Boolean(null)
Boolean(undefined)
```



```javascript
// 아래의 두개도 비어있지 않은 문자열이므로 true로 변환
Boolean('0')
Boolean('false')
```



10. == 이 연산자는 두 값을 비교할 때 자료형을 동일하게 변환해서 비교 (자료형 무시하고 값만 비교), === 이 연산자는 있는 그대로 비교 (자료형도 비교)



```javascript
// 전부 true (=== 로 쓰면 전부 false)
'' == false
'' == 0
0 == false
'123' == 123
```



11. 템플릿 문자열(ECMAscript 6 버전) 은 문자열 내부에 표현식을 삽입할 때 + 연산자 대신 사용할 수 있으며, `` 기호로 감싸 만들고 문자열 내부에 ${} 기호를 사용해 표현식을 삽입함



```javascript
// 123 + 42 는 168이다
alert('123 + 45 는 ' + (123 + 45) + '이다');
alert(`123 + 45 는 ${123 + 45}이다`)
// 동일한 결과지만 코드가 더 간결해짐
```



```javascript
// 변수도 사용 가능
var num = 10;
alert(`변수 num의 값은 ${num}이다`)
```



12. let, const 키워드 (ECMAscript 6버전)



|키워드|구분|선언 위치|재선언|
|---|---|---|---|
|var|변수|전역 스코프|가능|
|let|변수|해당 스코프|불가능|
|const|상수|해당 스코프|불가능|



- var는 전역 스코프의 위치에 변수를 선언하는 키워드
- let은 메모리 등의 자원을 적절히 이용할 수 있도록 특정 스코프 내부에서만 변수 사용 가능. (스코프를 벗어나면 제거) 



```javascript
{
	var varA = 10;
	// 해당 스코프 밖에서도 사용 가능
}

{
	alert(varA); // 오류 없이 동작
}

alert(varA); // 오류 없이 동작

for (var i = 0; i < 10; i++) {}
alert(i); // 오류 없이 동작
```



```javascript
{
	let varB = 10;
	// 해당 스코프 밖에선 사용 불가
}

{
	alert(varB); // 오류
}

alert(varB); // 오류

for (let j = 0; j < 10; j++) {}
alert(j); // 오류
```



- var로 선언한 변수는 (특히 비동기 함수를 사용할 때) 다양한 실수를 유발할 수 있으므로 ECMAscript 6를 사용할 수 있는 환경에선 var 키워드를 사용하지 않는 것이 좋음



```javascript
// var 키워드 사용
// 1초 간격으로 0,1,2를 출력하길 의도했지만
// 실제론 1초 간격으로 3,3,3을 출력함
for (var i = 0; i < 3; i++) {
	setTimeout(() => {
		alert(i);
		}, 1000 * i);
}
```



```javascript
// let 키워드 사용
// 의도한 대로 1초 간격으로 0,1,2를 출력함
for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		alert(i);
		}, 1000 * i);
}
```



```javascript
// ECMAscript 5 이전까지의 해결 방법
// 함수로 한번 감싸고, 사용할 변수를 전달하는 방법
for (var i = 0; i < 3; i++) {
	((i) => {
		setTimeout(() => {
			alert(i);
		}, 1000 * i);
		})(i);
}
```



- 템플릿 문자열과 let, const 키워드는 ECMAscript 6버전에 추가된 것이므로 인터넷 익스플로러에서는 사용이 불가함



13. 자바스크립트에선 하나의 배열에 모든 자료형을 다 넣을 수 있음. 배열 또한 객체의 일종



```javascript
var array = [123, 'String', true, function(){}, {}, [273, 103]]
```



14. 문자열과 배열의 길이를 알고싶을 땐 array_name.length 사용, 배열에 요소를 추가하고 싶을 땐 array_name.push(element) 사용.



15. for 반복문의 특이한 사용



```javascript
var startTime = new Date().getTime();

for (var cps = 0; new Date().getTime() < startTime + 1000; cps++) {}
alert('초당 연산 수: ' + cps);
```



16. 배열이나 객체에 쉽게 접근할 수 있는 반복문으로 for in (인덱스), for of (값) 반복문이 있음. for of 구문은 ECMAscript 6 버전에 추가된 기능임



```javascript
// 배열의 인덱스를 통해 값 접근
for (var i in array) {
	alert('i번째 요소: ' + array[i]);
}
```



```javascript
// 배열의 값에 바로 접근
for (const value of array) {
	alert(`요소 값은 ${value}`);
}
```



- 자바스크립트에선 파이썬처럼 인덱스와 값을 반복문으로 한번에 접근할 순 없으므로 for in과 for of를 적절히 사용해야 함
- for of 는 ECMAscript 5 이전 버전에선 사용 불가하므로 주의



## 함수



1. 자바스크립트에서 함수를 작성하는 방법 (익명함수)



```javascript
var func_var = function() {
	// blabla..
};

alert(typeof(func_var)); // function
```



2. 자바스크립트에서 함수를 작성하는 방법 (선언적 함수)

```javascript
function func_name() {
	// blabla..
}
```



3. 웹 브라우저는 스크립트의 내용을 한줄씩 읽기 전에 선언적 함수부터 읽으므로 함수 선언보다 위에서 호출해도 잘 동작함.

```javascript
func_name();

function func_name() {
	// blabla..
}
```



- 하지만 익명함수는 위와 같이 할 수 없음.



```javascript
// 에러!
func_var();

var func_var = function() {
	// blabla..
}
```



- 동일한 이름의 선언적 함수와 익명함수를 같이 쓴다면 익명함수가 실행됨. 선언적 함수가 먼저 생성되고 익명함수가 나중에 생성되기 때문



```javascript
var test = function() {alert('함수 A');}
function test() {
	alert('함수 B');
}

test(); // '함수 A' 출력
```



4. 자바스크립트에선 함수를 선언할 때 리턴 형과 매개변수의 형을 지정해 주지 않음



5. 자바스크립트에선 함수를 호출할 때 함수 생성 시 지정한 매개변수 개수보다 많거나 적은 매개변수를 사용하는 것을 허용함. 이 때 추가된 매개변수는 무시, 부족한 매개변수는 undefined 처리됨



```javascript
function test(a, b) {
	alert(a);
	alert(b);
}

test('a', 'b', 'c'); // a b
test('a'); // a undefined
```



6. 가변 인자 함수는 매개변수의 개수가 변할 수 있는 함수를 뜻함. 자바스크립트는 매개변수의 개수를 정의된 것과 다르게 사용해도 되지만, 여기서 말하는 가변인자 함수는 매개변수를 모두 활용하는 함수임. ex) Array() 함수



|함수 형태|설명|
|---|---|
|Array()|빈 배열을 생성|
|Array(number)|매개변수 만큼의 크기를 갖는 배열을 생성|
|Array(any, any, ..., any)|매개변수를 배열로 생성|



- 가변 인자 함수는 arguments 변수를 사용해 만들 수 있음. arguments는 매개변수의 배열로, 자바스크립트의 모든 함수는 내부에 기본적으로 arguments 변수가 존재함



```javascript
function sumAll() {
	alert(typeof(arguments) + ':' + arguments.length);
}

sumAll(1,2,3,4,5); // obj:5
```



```javascript
function sumAll() {
	var output = 0;
	for (var i = 0; i < arguments.length; i++) {
		output += arguments[i];
	}
	return output;
}

alert(sumAll(1,2,3,4,5)); // 15
```



- 위 코드는 다음과 같이 for in 구문으로 만들어도 무방함



```javascript
function sumAll() {
	var output = 0;
	for (var i in arguments) {
		output += arguments[i];
	}
	return output;
}

alert(sumAll(1,2,3,4,5));
```



- ECMAscript 6 버전이라면 아래와 같이 for of 구문을 사용해도 좋음



```javascript
function sumAll() {
	let output = 0;
	for (const value of arguments) {
		output += value;
	}
	return output;
}

alert(sumAll(1,2,3,4,5));
```



- Array() 함수처럼 매개변수의 개수가 다를 때 서로 다르게 동작하도록 하려면 arguments의 요소 개수에 따라 조건을 설정하면 됨



```javascript
function test() {
	var length = arguments.length;

	if (length == 0){
		// blabla..
	}
	else if (length == 1){
		// blabla..
	}
	else{
		// blabla..
	}
}
```



7. 함수에서 아무 값도 리턴하지 않았는데 리턴값을 받으려 한다면 undefined가 나옴



```javascript
function returnNothing() {
	return;
}

var output = returnNothing();
alert(output); // undefined
```



8. 내부함수는 함수 내부에 선언하는 함수를 뜻함. 내부 함수는 해당 함수를 포함하는 함수에서만 사용할 수 있음



```javascript
function external_func() {
	function internal_func1(){
		alert('inter1');
	}
	function internal_func2(){
		alert('inter2');
	}

	internal_func1();
}

external_func(); // inter1

internal_func2(); // 에러!
```



- 한 프로그램에 같은 이름의 함수가 있다면 뒤에 선언한 함수에 덮어씌어짐. 내부함수를 사용하면 외부에 같은 이름의 함수가 있어도 내부 함수를 우선 실행하므로 충돌을 방지함



```javascript

// 아래의 square함수에 덮어씌어져 실행되지 않음
function square(x) {
return x * x;
}

function pythagoras(width, height) {
	return Math.sqrt(square(width) + square(height));
}

 // 아래의 square 함수가 선언되기 전에 호출한다 해도
 // 자바스크립트는 선언적 함수를 먼저 다 읽은 다음 코드를 실행하므로
 // 덮어씌어진 square 함수로 실행됨
alert(pythagoras(3, 4));

function square(width, height, hypotenuse) {
	if (width * width + height * height == hypotenuse * hypotenuse) {
		return true;
	} else {
		return false;
	}
}
```



```javascript
// 위의 square 함수를 내부함수로 변경
// 외부의 함수에 영향을 받지 않지만 외부에서 사용 불가
function pythagoras(width, height) {
	function square(x) {
		return x * x;
	}
	return Math.sqrt(square(width) + square(height));
}
```



9. 자기호출함수란 함수를 생성하자마자 호출하는 함수를 뜻함. 이것 또한 다른 개발자에게 영향을 주지 않도록 하는 방법임



```javascript
(function() {
	alert('선언하자마자 실행해버리깃!');
})();
```

```javascript
(function(a, b) {
	alert('선언하자마자 ' + a + b + '실행해버리깃!');
})(1, 2);
```



10. 다른 함수의 매개변수로 전달하는 함수를 콜백함수라고 함



```javascript
function callTenTimes(cb) {
	for (var i = 0; i < 10; i++) {
		cb();
	}
}

var callback = function() {
	alert('함수 호출')
};

callTenTimes(callback);
```



- 콜백함수는 대부분 익명함수로 사용하는 경우가 많음



```javascript
callTenTimes(function() {
	alert('함수 호출');
});
```



11. 함수를 리턴하는 함수



```javascript
function returnFunction(){
	return function(){
		alert('returned function');
	};
}

// 방법 1
// 리턴된 함수를 변수에 넣어 사용
var func = returnFunction();
func();

// 방법 2
// 괄호를 두번 씀으로써, 호출한 함수에서 리턴된 함수를 바로 호출함
returnFunction()();
```



- 함수를 리턴하는 함수를 사용하는 가장 큰 이유는 클로저 때문.



12. 클로저



- var로 변수를 선언했다 해도 함수 안에 있는 변수는 지역변수이므로 외부에서 사용할 수 없으며, 함수 실행 시 생성되고 종료 시 사라짐.



```javascript
function test(name) {
	var output = 'hello' + name;
}

test('js');
alert (output); // 에러!
```



- 하지만 클로저를 사용하면 이 규칙을 위반할 수 있음.



```javascript
function test(name) {
	var output = 'hello' + name;
	return function() {
		alert(output);
	};
}

test('js')(); // hello js

// 원래대로라면 output변수는 지역변수이므로 함수 종료 시 사라져야 하지만
// 해당 변수가 이후에도 활용될 수 있으므로 자바스크립트는 변수를 제거하지 않고 남겨둠
```



- 여기서 클로저의 정의는 아래와 같이 다양함
	- 지역변수를 남겨두는 현상
	- test() 함수로 생성된 공간
	- 리턴된 함수 자체
	- 살아남은 지역변수 output



- 지역변수 output을 남겨둔다 해서 외부에서 마음껏 사용할 수 있는 것은 아님
	- 반드시 리턴된 클로저 함수를 사용해야만 지역 변수 output을 사용할 수 있음
	- 클로저 함수로 인해 남은 지역 변수는 클로저 함수 각각의 고유한 변수임



```javascript
function test(name) {
	var output = 'hello' + name;
	return function() {
		alert(output);
	};
}

var test1 = test('web');
var test2 = test('js');

test1(); // hello web
test2(); // hello js

alert(output); // 에러!
```