---
title: "[자바스크립트] 콜백함수, 화살표 함수 등"
categories:
- js
tags:
- 자바스크립트
- javascript
classes: wide
---


## 자바스크립트 실행 순서



자바스크립트의 함수 중 아래 함수는 웹 브라우저에 처리를 부탁하는 함수이다. 웹 브라우저가 처리하고, 처리가 완료되었다는 것을 자바스크립트에 알려주는 방식이다.



- 타이머 함수
- 웹 요청 관련 함수



이 함수들은 다른 코드의 실행이 모두 끝나기 전까진 실행되지 않는다.



```javascript
alert('a');

setTimeout(function() {
	alert('b');
}, 0);

alert('c');
```



위의 예시에서 타이머의 시간을 0으로 설정한다 해도 다른 코드가 끝날때까진 실행되지 않기 때문에 출력 순서는 abc가 아닌 acb가 된다.



```javascript
// 실행 불가
setTimeout(function() {
	alert('set timeout');
}, 0);

while(true) {}
```



이는 회사에서 일하는 동안 집에 배송된 택배를 확인하지 못하는 것과 마찬가지이다. 0초 뒤에 택배를 집에 보내달라 해 봤자 회사 일이 끝나지 않았으므로 택배를 확인할 수 없는 것이다.



## 반복문과 콜백 함수



자바스크립트의 실행 순서 때문에 발생하는 문제는 반복문에서도 생긴다.



```javascript
for(var i = 0; i < 3; i++) {
	setTimeout(function(){
		alert(i);
	}, 0);
}
```



위 코드의 실행 결과는 3, 3, 3이다. 이는 setTimeout()함수가 실행되는 시점이 반복문이 모두 끝난 이후이므로 발생하는 문제이다.
<br>
<br>계획대로 0, 1, 2를 출력하고자 한다면 변수를 따로 복사해 두어야 하며, 이 때 자기 호출 함수와 클로저를 사용한다.



```javascript
for (var i = 0; i < 3; i++) {
	(function(closed_i) {
		setTimeout(function() {
			alert(closed_i);
		}, 0);
	})(i);
}
```



다른 해결 방법으론 배열의 forEach() 메서드가 있다. forEach() 메서드는 배열 요소 하나하나를 콜백함수의 매개변수로 사용할 수 있도록 한다.



```javascript
// 콜백함수의 i 인자에 배열 요소가 차례로 들어가며 호출됨
[0, 1, 2].forEach(function(i) {
	setTimeout(function() {
		alert(i);
	}, 0);
})
```



이 또한 함수 내부에서 클로저가 만들어지므로 정상적으로 실행된다.



- forEach의 콜백함수의 인자로 배열 요소 뿐 아니라 인덱스, 전체 배열도 사용할 수 있다.



```javascript
const arr = [1,2,3,4,5];

arr.forEach(function(element, index, array){
    console.log(`${array}의 ${index}번째 요소 : ${element}`);
});
```



- forEach를 쓸 땐 continue나 break로 반복을 제어할 수 없고, throw(예외)를 발생시켜야만 반복을 종료할 수 있다는 점을 유의해야 한다.



ECMAScript 6에서는 반복문에 let 키워드를 사용함으로써 간단히 해결할 수 있다.



```javascript
for(let i = 0; i < 3; i++) {
	setTimeout(function(){
		alert(i);
	}, 0);
}
```



## 기본(default) 매개변수



자바스크립트에선 매개변수를 입력하지 않았을 때 매개변수를 강제로 초기화할 수 있다. 단순히 매개변수가 undefined 라면 값을 넣어주는 방식으로 구현할 수 있다.



```javascript
function test(a, b, c) {
	if (!b) {b = 10;}
	if (!c) {c = 20;}

	alert(a + ':' + b + ':' + c);
}



test(100, 50); // 100:50:20
```



일반적으론 아래와 같이 짧은 조건문을 사용하여 간단히 초기화 시킨다.



```javascript
function test(a, b, c) {
	// b값이 있으면 b를 넣고 없으면 10을 넣음
	b = b || 10;
	c = c || 20;

	alert(a + ':' + b + ':' + c);
}

test(100, 50);
```



- 자바스크립트에선 논리 연산자의 좌변만으로 연산을 끝낼 수 있다면 우변을 계산하지 않는다는 점을 이용해 짧은 조건문을 만들 수 있다.



```javascript
true || alert('실행되지 않음');
false || alert('실행됨');

true && alert('실행됨');
false && alert('실행되지 않음');
```



```javascript
if (10 < 20) {
	alert('boom!');
}

// 위와 동일한 결과
10 < 20 && alert('boom!');
```



- 가독성이 떨어져서 다른 용도로는 거의 사용되지 않지만, 매개변수를 초기화 하는 방법으론 매우 많이 쓰인다.
- 논리 연산 결과를 변수에 넣으면 나중에 연산된 피연산자의 값이 들어가는 점을 활용한다.



```javascript
var a = 0;

a = a || 10; // a = 10
a = 1 < 2 || 20; // a = true
a = 1 < 2 && 20; // a = 20
a = 0 && 1; // a = 0
a = 10 && true; // a = true
a = '' && '오?'; // a = ''
a = '엥' || '왱'; // a = '왱'
```



ECMAScript6 에서는 기본 매개변수를 쉽게 만들 수 있는 문법을 제공한다.



```javascript
function test(a, b = 10, c = 20) {
	alert(a + ':' + b + ':' + c);
}

test(100, 50);
```



## 화살표 함수 (ECMAScript 6)



익명 함수를 다음과 같이 간단하게 사용할 수 있는 것이 ECMAScript 6에 추가된 화살표 함수이다.



```javascript
// function() {}
() => {}
```



이전의 익명 함수와 다른 것은 this 키워드의 의미이다.



|함수|this 키워드|
|---|---|
|익명 함수|함수 자체에 바인딩되어 있는 객체 (window 객체 또는 프로토타입 객체)|
|화살표 함수|전역 객체 (웹 브라우저 환경에선 window 객체)|



ECMAScript 6 코드를 ECMAScript 5 코드로 변환해주는 바벨과 같은 트랜스파일러는 화살표 함수를 익명함수로 단순 변환해버리므로 this 키워드를 주의해서 사용해야 한다. 함수 내부에서 this 키워드를 사용하지 않는다면 완전히 치환해서 사용해도 좋다.



- 바벨은 let 키워드도 var로 단순 변환하므로 비동기 함수 등을 사용할 때 주의해야 한다.



자바스크립트 코드 스타일 가이드와 에어비앤비 자바스크립트 가이드에는 기존의 함수 리터럴을 사용하지 말고 화살표 함수만 사용할 것을 장려하고 있다. 화살표 함수를 사용할 때는 다음과 같은 전제조건이 있다.



- 프로토타입을 사용하지 않고, ECMAScript 6에서 추가된 클래스를 사용할 때
- jQuery의 문서 객체 조작에서 this 키워드가 아니라 event.currentTarget을 사용할 때



그리고 아래와 같이 함수 안의 코드가 한줄이라면 return 키워드를 쓰지 않아도 값을 리턴하며, 중괄호를 생략해도 된다.



```javascript
const multiply = (a, b) => a * b;

alert(multiply(1, 2)); // 2
```



## 전개 연산자 (ECMAScript 6)



ECMAScript 6 에선 마침표 3개(...)를 찍어 표기하는 전개 연산자가 추가되었다. 전개 연산자는 함수나 배열에 적용 가능하며, 전개 연산자를 사용하는 경우는 다음과 같다.



- 가변 매개변수 함수를 만들 때
- 함수 호출 시 배열의 요소를 하나하나 매개변수로 넣고 싶을 때



1. 가변 매개변수 함수를 만들 때



	이전에는 arguments 객체를 활용해서 가변 매개변수를 만들었지만, 전개 연산자를 사용해서 만들 수도 있다.



	```javascript
	// arguments 객체 사용
	function test1() {
		alert(arguments[0]);
		alert(arguments[1]);
		alert(arguments[2]);
	}

	// 전개 연산자 사용
	function test2(...numbers) {
		alert(numbers[0]);
		alert(numbers[1]);
		alert(numbers[2]);
	}
	```



	전개 연산자로 받는 매개변수의 이름을 arguments로 정의하면 기존의 arguments 객체가 덮어씌워지므로 다른 이름을 사용하는 것이 좋다.



	전개 연산자는 다른 매개변수와 조합해서 입력할 수도 있다. 이 때 전개 연산자는 반드시 맨 뒤 매개변수에 딱 하나만 사용해야 한다. (앞에다 사용하면 어디까지가 가변 매개변수인지 모르기 때문)



	```javascript
	function test(a, b, ...numbers) {
		console.log(numbers);
	}

	test(1, 2, 3, 4, 5); // [3, 4, 5]
	```



	arguments 객체를 사용해서 가변 매개변수 함수를 만들 때보다 전개 연산자를 사용할 때 좋은 점은 아래와 같다.



	- 다른 매개변수와 조합 가능
	- 매개변수에 좀 더 명확한 이름을 붙여 가독성을 향상



	또한 arguments 객체는 배열이 아니라 배열처럼 생긴 특별한 객체인 '배열 유사 객체' 이지만, 전개 연산자로 입력한 변수는 완전한 배열이라는 것이 다른 점이다.



2. 함수 호출 시 배열의 요소를 하나하나 매개변수로 넣고 싶을 때



	배열의 요소를 매개변수로 다 넣고 싶을 때, 이전의 ECMAScript 5 까지는 아래와 같이 해야 했다.



	```javascript
	function test(a, b, c, d) {
		alert(`${a}:${b}:${c}:${d}`);
	}

	var array = [1, 2, 3, 4];
	test.apply(null, array); // 1:2:3:4
	```



	모든 함수에는 apply() 메서드가 있다. 첫번째 매개변수는 함수 내부에서 활용할 this 객체, 두번째는 매개변수 배열을 넣는다.



	위 방법은 첫번째 매개변수를 잘못 사용하면 문제가 될 수도 있고, 코드의 가독성이 떨어지기 때문에 ECMAScript 6 에서는 전개 연산자로 함수의 매개변수에 배열을 전개해서 넣을 수 있도록 했다.



	```javascript
	function test(a, b, c, d) {
		alert(`${a}:${b}:${c}:${d}`);
	}

	var array = [1, 2, 3, 4];
	test(...array); // 1:2:3:4
	```



	또한 아래와 같이 일부를 배열로 채우고 나머지에 다른 매개변수를 넣거나, 배열을 병합해서 매개변수로 전달하는 것도 가능하다.



	```javascript
	function test(a, b, c, d) {
		alert(`${a}:${b}:${c}:${d}`);
	}

	var array = [1, 2];

	test(10, 20, ...array); // 10:20:1:2
	test(...array, 3, 4); // 1:2:3:4
	test(...array, ...array); // 1:2:1:2
	```
