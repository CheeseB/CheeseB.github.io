---
title: "[자바스크립트] 내장함수"
categories:
- js
tags:
- 자바스크립트
- javascript
classes: wide
---


## 자바스크립트 내장 함수



1. 내장함수 정의



	자바스크립트에서 자체적으로 제공하는 함수로, alert() 함수와 prompt()등이 있다.



2. 타이머 함수



	| 메서드 이름|설명 |
	|---|---|
	| setTimeout(function, millisecond)|일정 시간 후 함수를 한번 실행함 |
	| setInterval(function, millisecond)|일정 시간마다 함수를 반복 실행함 |
	| clearTimeout(id)|해당 id의 setTimeout 함수 중지 |
	| clearInterval(id)|해당 id의 setInterval 함수 중지 |



	setTimeout() 함수는 한번만 실행하므로 특별히 주의할 사항이 없지만 setInterval() 함수는 지속적으로 컴퓨터의 자원을 소비하므로 꼭 중지시켜 주어야 함



	```javascript
	// 1초마다 함수 실행
	var intervalID = setInterval(function() {
		alert('1초 경과');
	}, 1000);

	// 10초 뒤에 함수 실행
	setTimeout(function() {
		clearInterval(intervalID);
	}, 10000);
	```



	setTimeout() 함수와 setInterval()함수를 사용하면 타이머 아이디를 리턴하는데, 이 아이디를 clearTimeout()함수나 clearInterval()함수의 매개변수에 넣어주면 타이머를 정지할 수 있다.



3. 인코딩, 디코딩 함수



	| 함수 이름|설명 |
	|---|---|
	| escape()|알파벳, 숫자, 일부 특수문자(@ * - _ + . /)를 제외하고 모두 인코딩함.<br>1바이트 문자는 %XX, 2바이트 문자는 %uXXXX 형태로 변환 |
	| unescape()|위 함수의 디코딩 버전 |
	| encodeURI(uri)|escape()함수에서 인터넷 주소에 사용되는 일부 특수문자(: ; / = ? &)는 변환하지 않음 |
	| decodeURI(encodedURI)|위 함수의 디코딩 버전 |
	| encodeURIComponent(uriComponent)|알파벳, 숫자를 제외한 모든 문자를 인코딩함.<br>UTF-8 인코딩과 동일 |
	| decodeURIComponent(encodedURI)|위 함수의 디코딩 버전 |



	모두 비슷한 기능을 수행하므로 어떤것을 사용해도 상관 없다.



4. 코드 실행 함수



	| 함수 이름|설명 |
	|---|---|
	| eval(string)|문자열을 자바스크립트 코드로 실행함 |



	```javascript
	var willEval = '';
	willEval += 'var number = 10;';
	willEval += 'alert(number);';

	eval(willEval); // 10

	alert(number); // 10
	```



	eval() 함수는 문자열을 자바스크립트 코드로 실행하는 함수이므로 eval() 함수로 실행된 코드에서 정의한 변수를 활용할 수도 있다.



5. 숫자 확인 함수



	| 함수 이름|설명 |
	|---|---|
	| isFinite(number)|number가 유한한 값인지 확인 |
	| isNaN(number)|number가 NaN인지 확인 |



	자바스크립트는 숫자를 0으로 나누면 Infinity라는 값이 들어간다.



	```javascript
	var number = 1/0;
	alert(number + ':' + isFinite(number)); // Infinity : false
	```



	또한 자바스크립트에는 Infinity라는 변수가 존재하지만, 음수를 0으로 나누면 -Infinity가 되므로 Infinity 변수와 비교하지 말고 반드시 isFinite() 함수를 사용해야 한다.
	


	```javascript
	var number = -10/0;
	alert(number == Infinity) // false
	alert(number == -Infinity) // true

	alert(isFinite(number)) // false
	```
	


	NaN도 마찬가지로 NaN 이라는 변수가 존재하지만 NaN끼리 비교하는 것은 불가하므로 반드시 isNaN() 함수로 확인해야한다.



	```javascript
	alert(NaN == NaN) // false
	alert(isNaN(NaN)) // true
	```



6. 숫자 변환 함수



	자바스크립트는 Number() 함수 외에도 또 다른 숫자 변환 함수를 제공한다.



	| 함수 이름|설명 |
	|---|---|
	| parseInt(string)|문자열을 정수로 변환 |
	| parseFloat(string)|문자열을 유리수로 변환 |



	Number() 함수는 인자에 숫자로 바꿀수 없는 부분이 하나라도 있으면 NaN으로 변환하지만, 위의 두가지 함수는 숫자로 변환할 수 있는 부분까지는 모두 숫자로 변환한다.



	```javascript
	var won = '1000원';
	var dollar = '1.5$';

	alert(Number(won) + ':' + Number(dollar)); // NaN:NaN
	alert(parseInt(won) + ':' + parseInt(dollar)); // 1000:1
	alert(parseFloat(won) + ':' + parseFloat(dollar)); // 1000:1.5

	// 앞부터 읽으므로 맨 앞에 숫자가 오지 않으면 변환 불가
	alert(parseInt('$1000') + ':' + parseFloat('$1000')); // NaN:NaN
	```



	parseInt()는 맨 처음에 0x로 시작하면 16진수로 생각하고 변환한다.



	```javascript
	parseInt('0x273'); // 627
	parseInt('273'); // 273

	parseFloat('0x273') // 0
	```



	parseInt()함수의 두번째 매개변수에 진법을 입력하면 해당 진법의 수로 인식한다.



	```javascript
	parseInt('FF', 16); // 255
	parseInt('52', 10); // 52
	parseInt('11', 8); // 9
	parseInt('10', 2) // 2
	```



	parseFloat() 함수는 중간에 e가 들어가면 자릿수로 인식한다.

	```javascript
	parseFloat('52.273e5'); // 5227300
	```
