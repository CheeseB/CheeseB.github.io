---
date: '2024-05-08'
title: '[리팩터링 2판 스터디] 3장. 코드에서 나는 악취'
categories: ['Study']
summary: '어떤 코드에 어떻게 리팩토링을 해야하는가'
thumbnail: '../images/thumbnail/refactoring.webp'
---

## 1. 기이한 이름

> 함수, 변수, 클래스, 모듈 등은 그 이름만 보고도 각각 무슨일을 하고 어떻게 사용해야 하는지 명확히 알 수 있어야 한다.

마땅한 이름이 떠오르지 않는다면 설계에 더 근본적인 문제가 있을 가능성이 높다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
    <li>함수 선언 바꾸기</li>
    <li>변수 이름 바꾸기</li>
    <li>필드 이름 바꾸기</li> 
  </ul>
</details>

## 2. 중복 코드

> 똑같은 코드가 여러 곳에서 반복되면 하나로 통합한다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
    <li>함수 추출하기</li>
    <li>문장 슬라이드하기</li>
    <li>메서드 올리기</li> 
  </ul>
</details>

중복된 코드를 하나의 함수로 추출하여, 그 함수를 호출하는 것으로 대신한다.   
함수 추출 전, 관련된 코드를 한데 모아두면 함수 추출이 수월해진다.   
같은 부모를 상속받은 클래스들에 코드가 중복되면, 부모 클래스로 코드를 옮긴다.

## 3. 긴 함수

> 함수 내부 코드는 짧아야 좋다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
    <li>함수 추출하기</li>
    <li>임시 변수를 질의 함수로 바꾸기</li>
    <li>매개변수 객체 만들기</li>
    <li>객체 통째로 넘기기</li>
    <li>함수를 명령으로 바꾸기</li>
    <li>조건문 분해하기</li>
    <li>함수 추출하기</li>
    <li>조건부 로직을 다형성으로 바꾸기</li>
    <li>반복문 쪼개기</li>
  </ul>
</details>


예전 언어는 서브루틴 호출 비용이 컸지만, 요즘은 함수 호출 비용이 거의 없어서 함수를 잘게 쪼개도 문제가 되지 않는다. 함수가 하는 일을 파악하기 위해 왔다갔다 해야하므로 부담이 될 수 있지만, 함수 이름을 잘 지어두면 함수 코드를 볼 필요가 없다. 그러므로 함수 이름에 코드의 목적이 잘 드러나야 한다.

- 주석을 달아야 할 만한 부분은 무조건 함수로 만든다.
- 함수로 만들 코드가 단 한줄이더라도, 설명할 필요가 있다면 함수로 추출하는게 좋다.   
- 함수로 빼기 전 코드보다 길어지더라도 함수로 만드는 것이 낫다.

매개변수와 임시 변수 (함수 내부 지역변수) 를 많이 쓰면 함수 추출이 어렵고, 추출한 함수에도 매개변수가 많아져 리팩터링 전보다 난해해질 수 있다. 함수의 임시 변수를 함수로 바꾸고, 매개변수를 객체로 받아서 임시 변수와 매개변수의 수를 줄이는 것이 좋다. 그래도 여전히 임시 변수와 매개변수가 많으면, 함수를 명령으로 바꾸는것도 고려해볼 필요가 있다.

<small>* 명령 객체 (명령): 함수를 그 함수만을 위한 객체 안으로 캡슐화한 것</small>

#### 예시 코드

**임시변수를 함수로, 매개변수는 객체로**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function example(start, end) {
	const range = end - start;
	console.log(range);
}

// 변경 후 ///////////////////////////
function example(range) {
	console.log(getRange(range));
}

function getRange(range) {
	return range.end - range.start;
}
```

**함수를 명령으로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function score(candidate, medicalExam, scoringGuide) {
	let result = 0;
	let healthLevel = 0;
	...
}

// 변경후 ///////////////////////////
class Scorer {
	constructor(candidate, medicalExam, scoringGuide) {
		this._candidate = candidate;
		this._medicalExam = medicalExam;
		this._scoringGuide = scoringGuide;
	}

	execute() {
		this._result = 0;
		this._healthLevel = 0;
		...
	}
}
```

- 긴 조건문은 함수로 분리하고, switch문은 각 case의 본문을 함수 호출문 하나로 바꾼다.
- 같은 조건을 기준으로 나뉘는 switch문이 여러개라면 클래스와 다형성을 이용해 분리한다.
- 반복문 또한 그 안의 코드와 함께 독립된 함수로 만든다.
  - 적합한 함수 이름이 떠오르지 않으면 서로다른 작업이 섞여있기 때문일 수 있으므로, 반복문을 쪼개어 작업을 분리해야함

**조건문 분해**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)) {
	charge = quantity * plan.summerRate;
} else {
	charge = quantity * plan.regularRate;
}

// 변경 후 ///////////////////////////
if (summer())
	charge = summerCharge();
else
	charge = regularCharge();

function summer() {
	return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
}

function charge(key) {
	return quantity * plan[key]
}

function summerCharge() {
	return quantity * plan.summerRate;
}

function regularCharge() {
	return quantity * plan.regularRate;
}
```

**조건부 로직을 다형성으로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function plumage(bird) {
	switch (bird.type) {
		case 'EuropeanSwallow':
				return 'average';
		case 'AfricanSwallow':
				return (bird.numberOfCoconuts > 2) ? 'tired' : 'average';
		case 'NorwegianBlueParrot':
				return (bird.voltage > 100) ? 'scorched' : 'beautiful';
		default:
				return 'unknown';
	}
}

function airSpeedVelocity(bird) {
	switch (bird.type) {
		case 'EuropeanSwallow':
				return 35;
		case 'AfricanSwallow':
				return 40 - 2 * bird.numberOfCoconuts;
		case 'NorwegianBlueParrot':
				return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
		default:
				return null;
	}
}


// 변경 후 ///////////////////////////
class Bird {
	constructor(birdObject) {
		Object.assign(this, birdObject);
	}

	get plumage() {
		return 'unknown';
	}

	get airSpeedVelocity() {
		return null;
	}
}

class EuropeanSwallow extends Bird {
	get plumage() {
		return 'average';
	}

	get airSpeedVelocity() {
		return 35;
	}
}

class AfricanSwallow extends Bird {
	get plumage() {
		return (this.numberOfCoconuts > 2) ? 'tired' : 'average';
	}

	get airSpeedVelocity() {
		return 40 - 2 * this.numberOfCoconuts;
	}
}

class NorwegianBlueParrot extends Bird {
	get plumage() {
		return (this.voltage > 100) ? 'scorched' : 'beautiful';
	}

	get airSpeedVelocity() {
		return (this.isNailed) ? 0 : 10 + this.voltage / 10;
	}
}

function createBird(bird) {
	switch (bird.type) {
		case 'EuropeanSwallow':
			return new EuropeanSwallow(bird);
		case 'AfricanSwallow':
			return new AfricanSwallow(bird);
		case 'NorwegianBlueParrot':
			return new NorwegianBlueParrot(bird);
		default:
			return new Bird(bird);
	}
}
```

**반복문 쪼개기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
let totalSalary = 0;
let averageAge = 0;
for (const p of people) {
	averageAge += p.age;
	totalSalary += p.salary;
}

averageAge = averageAge / people.length;

// 변경 후 ///////////////////////////
let totalSalary = 0;
for (const p of people) {
	totalSalary += p.salary;
}

let averageAge = 0;
for (const p of people) {
	averageAge += p.age;
}

averageAge = averageAge / people.length;
```


## 4. 긴 매개변수 목록

> 매개변수의 수는 적어야 좋다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
    <li>매개변수를 질의 함수로 바꾸기</li>
    <li>객체 통째로 넘기기</li>
    <li>매개변수 객체 만들기</li>
    <li>플래그 인수 제거하기</li>
    <li>여러 함수를 클래스로 묶기</li>
  </ul>
</details>

다른 매개변수에서 값을 얻어올 수 있는 매개변수는 생략한다.   
객체에서 값을 뽑아 별개의 매개변수로 전달하는 코드라면 원본 객체를 그대로 전달하도록 바꾼다.   
항상 함께 전달되는 매개변수라면 객체로 묶어서 전달한다.   
함수의 동작 방식을 정하는 플래그 역할의 매개변수는 제거한다.   
여러 함수가 특정 매개변수들을 공통으로 사용할땐, 함수들을 클래스로 묶어 공통 매개변수를 클래스의 필드로 정의한다.

#### 예시 코드

**매개변수 생략**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
availableVacation(anEmployee, anEmployee.grade);
function availableVacation(anEmployee, grade) {...}

// 변경 후 ///////////////////////////
availableVacation(anEmployee);
function availableVacation(anEmployee) {
	const grade = anEmployee.grade;
	...
}
```

**플래그 인수 제거**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function setDimension(name, value) {
	if (name === 'height') {
		this.height = value;
		return;
	}
	if (name === 'width') {
		this.width = value;
		return;
	}
}

// 변경 후 ///////////////////////////
function setHeight(value) { this.height = value; }
function setWidth(value) { this.width = value; }
```

**여러 함수를 클래스로 묶기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function base(aReading) {...}
function taxableCharge(aReading) {...}
function calculateBaseCharge(aReading) {...}

// 변경 후 ///////////////////////////
class Reading {
	base() {...}
	taxableCharge() {...}
	calculateBaseCharge() {...}
}
```


## 5. 전역 데이터

> 전역 데이터는 최대한 주의해서 사용해야 한다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
    <li>변수 캡슐화하기</li>
  </ul>
</details>


전역 데이터는 코드베이스 어디서든 건드릴 수 있고, 값을 누가 어떤 부분에서 바꿨는지 알기 힘들어 버그의 원인이 되는 코드를 찾아내기 어렵다.   
대표적인 전역 데이터는 전역 변수지만, 클래스 변수와 싱글톤에서도 동일한 문제가 발생한다.

변수 캡슐화를 통해 전역 데이터를 함수로 감싸야 한다. 그렇게 하면 데이터를 수정하는 부분을 찾기 쉽고 접근을 통제할 수 있다. 접근자 함수들을 클래스나 모듈에 넣고, 그 안에서만 사용할 수 있도록 하는 것도 좋다.

#### 예시 코드

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
let defaultOwner = {firstName: 'Cheese', lastName: 'Ball'};
defaultOwner = {firstName: 'Mozza', lastName: 'Cheese'};
spaceShip.owner = defaultOwner;

// 변경 후 ///////////////////////////
let defaultOwnerData = {firstName: 'Cheese', lastName: 'Ball'};
export function getDefaultOwner() {
	return defaultOwnerData;
}

export function setDefaultOwner(arg) {
	defaultOwnerData = arg;
}

setDefaultOwner({firstName: 'Mozza', lastName: 'Cheese'});
spaceShip.owner = getDefaultOwner();
```


## 6. 가변 데이터

> 무분별한 데이터 수정에 따른 위험을 줄여야 한다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>변수 캡슐화하기</li>
	  <li>변수 쪼개기</li>
	  <li>문장 슬라이드하기</li>
	  <li>함수 추출하기</li>
	  <li>질의 함수와 변경 함수 분리하기</li>
	  <li>세터 제거하기</li>
	  <li>파생 변수를 질의 함수로 바꾸기</li>
	  <li>여러 함수를 클래스로 묶기</li>
	  <li>여러 함수를 변환 함수로 묶기</li>
	  <li>참조를 값으로 바꾸기</li>
  </ul>
</details>

한 쪽에서 데이터를 변경하면 다른 쪽에서 예상치 못한 결과나 버그로 이어지는 경우가 종종 있다.   
변수의 유효범위가 몇줄 뿐이면 괜찮으나, 유효 범위가 넓어질수록 위험도 커진다.   
가변 데이터를 완전히 배제하기란 현실적으로 거의 불가능하지만, 유효범위를 가능한 한 좁혀야 한다.

변수 캡슐화를 통해 정해진 함수를 거쳐야만 값을 수정할 수 있도록 한다. 그렇게 하면 어떻게 수정되는지 감시하거나 코드를 개선하기 쉽다.   
하나의 변수에 다른 값들을 저장해서 갱신해야 한다면, 변수를 쪼개 용도별 독립 변수에 저장해서 값 갱신이 문제를 일으킬 여지를 없애야 한다. 값 갱신 로직은 다른 코드와 떨어뜨려 놓는 것이 좋다.

#### 예시 코드

**변수 쪼개기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
let temp = 2 * (width + height);
console.log(temp);
temp = width * height;
console.log(temp);

// 변경 후 ///////////////////////////
const perimeter = 2 * (width + height);
console.log(perimeter);
const area = height * width;
console.log(area);
```

API를 만들 때엔 읽기 함수와 변경 함수를 분리해서 꼭 필요할때가 아니면 부작용이 있는 코드를 호출하지 못하게 한다.   

- 가변 데이터를 사용한 파생 변수를 읽기 함수로 바꾼다.   
- 여러 함수를 클래스로 묶거나 변환 함수로 묶어, 변수를 갱신하는 코드들의 유효범위를 클래스나 변환으로 제한한다.   

<small>
	* 변환 함수:<br>원본 데이터를 입력받아 필요한 정보를 모두 도출하고, 각각을 출력 데이터의 필드에 넣어 반환하는 함수<br>- 검색과 갱신을 일관된 장소에서 처리할 수 있고, 로직 중복도 막을수 있음
</small>

#### 예시 코드

**읽기 함수와 변경 함수 분리**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function getTotalOunstandingAndSendBill() {
	const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
	sendBill();
	return result;
}

// 변경 후 ///////////////////////////
function totalOutstanding() {
	return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
	...
}
```

**파생 변수를 읽기 함수로 변환**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
get discountTotal() {
	return this._discountTotal;
}

set discount(aNumber) {
	const old = this._discount;
	this._discount = aNumber;
	this._discountedTotal += old - aNumber;
}

// 변경 후 ///////////////////////////
get discountTotal() {
	return this._baseTotal - this._discount;
}

set discount(aNumber) {
	this._discount = aNumber;
}
```

**여러 함수를 변환 함수로 묶기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
funciton base(aReading) {...}

funciton taxableCharge(aReading) {...}

// 변경 후 ///////////////////////////
funciton enrichReading(argReading) {
	const aReading = _.cloneDeep(argReading);
	aReading.baseCharge = base(aReading);
	aReading.taxableCharge = taxableCharge(aReading);
	return aReading;
}

```

- 구조체처럼 내부 필드에 데이터를 담고있는 변수라면, 참조를 값으로 바꾸어 내부 필드를 직접 수정하지 않고 구조체를 통째로 교체하는 것이 낫다.
- 가능하다면 setter를 제거하는 것이 좋다.
- 객체의 필드는 생성자에서만 설정되고, 수정하지 못하게 만들기
- 혹은 setter를 호출하는 클라이언트를 찾는 것만으로도 변수 유효범위를 줄이는데 도움이 됨

#### 예시 코드

**참조를 값으로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Product {
	applyDiscount(arg) {
		this._price.amount -= arg;
	}
}

// 변경 후 ///////////////////////////
class Product {
	applyDiscount(arg) {
		this._price = new Money(this._price.amount - arg);
	}
}
```


## 7, 8. 뒤엉킨 변경과 산탄총 수술

> 하나의 모듈은 오직 하나의 동작만 책임진다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>단계 쪼개기</li>
	  <li>함수 옮기기</li>
	  <li>함수 추출하기</li>
	  <li>클래스 추출하기</li>
	  <li>함수 옮기기</li>
	  <li>필드 옮기기</li>
	  <li>여러 함수를 클래스로 묶기</li>
	  <li>여러 함수를 변환 함수로 묶기</li>
	  <li>단계 쪼개기</li>
	  <li>함수 인라인하기</li>
	  <li>클래스 인라인하기</li>
  </ul>
</details>

#### 뒤엉킨 변경

특정 기능 수정을 위해 하나의 모듈 안에서 여러 방식으로 변경될 일이 많을 때 발생한다.

#### 산탄총 수술

특정 기능 수정을 위해 하나의 모듈이 아닌 여러 모듈들을 수정해야 할 때 발생한다.

|  | 원인 | 해법(원리) | 발생 과정 | 해법(실제 행동) |
| --- | --- | --- | --- | --- |
| 뒤엉킨 변경 | 맥락을 잘 구분하지 못함 | 맥락을 명확히 구분 | 한 코드에 섞여 들어감 | 맥락별로 분리 |
| 산탄총 수술 | 맥락을 잘 구분하지 못함 | 맥락을 명확히 구분 | 여러 코드에 흩뿌려짐 | 맥락별로 모음 |

#### 뒤엉킨 변경 해결법

- 서로 다른 두 대상을 한꺼번에 다루는 코드는 각각을 별개의 모듈로 나눈다.
- 두 로직이 순차적으로 실행되는 맥락이라면, 다음 맥락에 필요한 데이터를 특정 구조에 담아 전달한다.
- 곳곳에서 각기 다른 맥락의 함수를 호출하는 빈도가 높다면, 각 맥락에 해당하는 모듈을 만들어서 관련 함수들을 모아, 처리 과정을 맥락별로 구분한다.
- 여러 맥락에 중복으로 관여하는 함수가 있다면 해당 함수는 따로 추출한다. (클래스라면 클래스 추출)

#### 예시 코드

**단계 쪼개기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
const orderData = orderString.split(',');
const productPrice = priceList[orderData[0].split('-')[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;

// 변경 후 ///////////////////////////
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);
function parseOrder(aString) {
	const values = aString.split(',');
	return ({
		productID: values[0].split('-')[1],
		quantity: parseInt(values[1]),
	});
}

function price(order, priceList) {
	return order.quantity * priceList[order.productID];
}

```

**클래스 추출하기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Person {
	get officeAreaCode() {return this._officeAreaCode;}
	get officeNumber() {return this._officeNumber;}
}

// 변경 후 ///////////////////////////
class Person {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	
	get officeAreaCode() {return this._telephoneNumber.areaCode;}
	get officeAreaCode() {return this._telephoneNumber.number;}
}
	
class TelephoneNumber {
	get areaCode() {return this._areaCode;}
	get number() {return this._number;}
}
```


#### 산탄총 수술 해결법

- 함께 변경되는 대상들을 한 모듈로 묶어둔다
- 비슷한 데이터를 다루는 함수들을 클래스로 묶는다.
- 데이터 구조를 변환하거나 보강하는 함수들을 변환 함수로 묶는다.
- 어설프게 분리된 로직을 인라인 리팩터링(함수 인라인, 클래스 인라인하기) 으로 합친다.

#### 예시 코드

**함수 인라인**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function getRating(dirver) {
	return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
	return driver.numberOfLateDeliveries > 5;
}

// 변경 후 ///////////////////////////
function getRating(driver) {
	return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}
```

**클래스 인라인**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Person {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	
	get officeAreaCode() {return this._telephoneNumber.areaCode;}
	get officeAreaCode() {return this._telephoneNumber.number;}
}

class TelephoneNumber {
	get areaCode() {return this._areaCode;}
	get number() {return this._number;}
}
	
// 변경 후 ///////////////////////////
class Person {
	get officeAreaCode() {return this._officeAreaCode;}
	get officeNumber() {return this._officeNumber;}
}
```


## 9. 기능 편애

> 모듈 내부에서의 상호작용은 최대로, 모듈 간의 상호작용은 최소로 해야 한다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>함수 옮기기</li>
	  <li>함수 추출하기</li>
  </ul>
</details>

자신이 속한 모듈의 함수나 데이터보다 다른 모듈의 함수나 데이터와 상호작용이 더 많으면 좋지 않다.   
외부 객체의 getter 메서드를 여럿 호출하는 함수는 해당 객체로 옮겨주는 것이 좋다.   
함수의 일부에서만 기능 편애가 일어난다면, 해당 부분만 독립 함수로 추출한 후, 원하는 모듈로 옮겨준다.   
사용하는 외부 모듈이 다양하다면, 가장 많은 데이터를 포함한 모듈로 옮기거나 함수를 여러 조각으로 나누어 각각 적합한 모듈로 옮겨준다.

#### 예시 코드

**함수 옮기기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
 // 변경 전
class Account {
	get overdraftCharge() {...}
	...
}

class AccountType {
	...
}

// 변경 후 ///////////////////////////
class Account {
	...
}

class AccountType {
	get overdraftCharge() {...}
	...
}
```


## 10. 데이터 뭉치

> 여러 데이터의 뭉치는 따로 보관하라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>클래스 추출하기</li>
	  <li>매개변수 객체 만들기</li>
	  <li>객체 통째로 넘기기</li>
  </ul>
</details>


데이터 여러개가 여러 항목에서 항상 뭉쳐다닌다면, 따로 보금자리를 마련해 줘야 한다.

- 데이터 뭉치인지 판별하는 방법: 값 하나를 삭제했을 때, 나머지 데이터만으론 의미가 없다면 데이터 뭉치이다.

객체 내부의 데이터 뭉치는 클래스 추출하기로 하나의 객체로 묶는다.   
메서드 시그니처의 데이터 뭉치는 매개변수 줄이기(매개변수 객체 만들기, 객체 통째로 넘기기) 기법을 통해 호출 코드를 간결하게 만든다.

<small>* 메서드 시그니처: 메서드 이름과 매개변수 리스트의 조합</small>

## 11. 기본형 집착

> 프로그래밍 언어가 제공하는 기본형보단, 내게 주어진 문제에 맞는 기초 타입을 정의하라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>기본형을 객체로 바꾸기</li>
	  <li>타입 코드를 서브클래스로 바꾸기</li>
	  <li>조건부 로직을 다형성으로 바꾸기</li>
	  <li>클래스 추출하기</li>
	  <li>매개변수 객체 만들기</li>
  </ul>
</details>

화폐, 범위, 길이, 전화번호 등 문제 해결에 필요한 단위를 숫자형이나 문자열같은 기본 타입으로만 정의하는 것은 좋지 않다.   
단순한 출력 이상의 기능이 필요해지는 순간, 그 데이터를 표현하는 전용 클래스를 정의하는 것이 좋다.   
그렇게 하면 해당 데이터에 대한 메서드를 추가할 수 있으므로, 기능 캡슐화가 가능하다.   
기본형으로 표현된 코드가 조건부 동작을 제어하는 타입 코드로 쓰였다면, 타입 코드를 서브클래스로 바꾸고 조건부 로직을 다형성으로 바꾼다.

#### 예시 코드

**기본형을 객체로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
const myCpus = ['Intel Core i7', 'Core i5', 'AMD RyZen 9'];
const myIntelCpus = myCpus.filter((cpu) => cpu.startsWith('Intel') || cpu.startsWith('Core'));

// 변경 후 (1) ///////////////////////////
const myCpus = [
	{name: 'Intel Core i7', brand: 'Intel'},
	{name: 'Core i5', brand: 'Intel'},
	{name: 'AMD RyZen 9', brand: 'AMD'},
];

const myIntelCpus = myCpus.filter((cpu) => cpu.brand == 'Intel');

// 변경 후 (2) ///////////////////////////
const IntelBrand = {
	name: "Intel",
	sloagun: "Leap Ahead",
	ceo: "Robert Holmes Swan",
	stock: 52.82
}

const AmdBrand = {
	name: "AMD",
	sloagun: "Fusion is Future",
	ceo: "Lisa Tzwu-Fang Su",
	stock: 83.1
}

const myCpus = [
	{ name: "Intel Core i7", brand: IntelBrand },
	{ name: "Intel Core i5", brand: IntelBrand },
	{ name: "AMD RyZen 9", brand: AmdBrand }
]

const myIntelCpus = myCpus.filter(cpu => cpu.brand.stock <= 50.0);
```

**타입 코드를 서브클래스로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
function createEmployee(name, type) {
	return new Employee(name, type);
}

// 변경 후 ///////////////////////////
function createEmployee(name, type) {
	switch (type) {
		case 'engineer': return new Engineer(name);
		case 'salesPerson': return new SalesPerson(name);
		case 'manager': return new Manager(name);
	}
}
```


## 12. 반복되는 switch문

> 똑같은 조건부 로직이 여러 곳에서 반복되는 상황은 피해라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>조건부 로직을 다형성으로 바꾸기</li>
  </ul>
</details>

중복된 switch문은 조건절을 하나 추가할 때마다 다른 switch문도 모두 찾아서 함께 수정해야 한다.   
switch문 뿐만 아니라 길게 나열된 if, else 문도 여러곳에 반복해 등장한다면 리팩토링의 대상이 된다.
이는 조건부 로직을 다형성으로 바꾸면 해결 가능하다.

## 13. 반복문

> 반복문은 더이상 시대에 걸맞지 않다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>반복문을 파이프라인으로 바꾸기</li>
  </ul>
</details>

반복문보다는 파이프라인을 사용하면 이해하기 훨씬 쉽다.   
반복문의 처리 과정을 일련의 연산으로 표현이 가능하며, 객체가 파이프라인을 따라 흐르며 어떻게 처리되는지 읽을수 있다.   
대표적인 파이프라인 연산으로 filter, map 이 있음

#### 예시 코드

**반복문을 파이프라인으로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
const names = [];
for (const i of input) {
	if (i.job === 'programmer') {
		names.push(i.name);
	}
}
	
// 변경 후 ///////////////////////////
const names = input
	.filter(i => i.job === 'programmer')
	.map(i => i.name);
```


## 14. 성의 없는 요소

> 더이상 필요없는 코드 구조는 버려라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>함수 인라인하기</li>
	  <li>클래스 인라인하기</li>
	  <li>계층 합치기</li>
  </ul>
</details>


코드의 구조를 잡을 때 함수(메서드), 클래스, 인터페이스 등을 쓰는 것이 좋지만, 그 구조가 필요 없을 때도 있다. 본문 코드 그대로 쓰는것보다 나은 것이 없을때, 실질적으로 메서드가 하나뿐인 클래스가 그러한 경우이다.   
이는 보통 함수 인라인하기, 클래스 인라인하기로 처리한다.   
상속을 사용했다면 계층 합치기를 적용한다.

#### 예시 코드

**계층 합치기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Employee {...}
class Salesperson extends Employee {...}

// 변경 후 ///////////////////////////
class Employee {...}
```


## 15. 추측성 일반화

> 당장 걸리적거리는 코드는 눈앞에서 치워버려라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>계층 합치기</li>
	  <li>함수 인라인하기</li>
	  <li>클래스 인라인하기</li>
	  <li>함수 선언 바꾸기</li>
	  <li>죽은 코드 제거하기</li>
  </ul>
</details>


나중에 필요할거란 생각으로 당장 필요없는 코드를 작성해두는 것은 좋지 않다.   
특이 케이스 처리 로직, 모듈의 다른 버전을 대비한 매개변수 등이 이에 해당한다.   
미래에 실제로 사용하게 된다면 다행이지만, 그렇지 않다면 낭비일 뿐이다.

하는 일이 거의 없는 추상 클래스는 계층 합치기로 제거한다.   
쓸데없이 위임하는 코드는 함수 인라인, 클래스 인라인하기로 삭제한다.   
본문에서 사용되지 않는 매개변수는 없앤다.   
테스트 코드 말고는 사용하는 곳이 없는 함수나 클래스가 있다면, 테스트 코드부터 삭제한 뒤 제거한다.

## 16. 임시 필드

> 클래스의 필드는 항상 값이 설정되어야 한다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>클래스 추출하기</li>
	  <li>함수 옮기기</li>
	  <li>특이 케이스 추가하기</li>
  </ul>
</details>

간혹 특정 상황에서만 값이 설정되는 임시 필드를 가진 클래스도 있지만, 이는 코드를 이해하기 어렵게 한다.   
객체를 가져올때 당연히 모든 필드가 채워져 있을거라 기대하는것이 보통이기 때문이다.

- 클래스 추출하기로 임시 필드를 옮긴 다음, 관련된 함수들을 모두 새 클래스에 넣는다.
- 임시 필드에 값이 있는지 확인 후 동작하는 조건절은 필드값이 없을 때를 위한 대안 클래스를 만들어서 제거한다.

## 17. 메세지 체인

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>위임 숨기기</li>
	  <li>함수 추출하기</li>
	  <li>함수 옮기기</li>
  </ul>
</details>


메세지 체인이란 다른 객체를 요청하는 작업이 연쇄적으로 이어진 코드를 말한다.   

- 클라이언트가 한 객체를 통해 다른 객체를 얻고, 그렇게 얻은 객체에 또다른 객체를 요청하는 경우
- getter가 연쇄적으로 이어지거나 임시 변수들이 줄줄이 나열되는 코드

이렇게 하면 클라이언트가 객체 내비게이션 구조에 종속되어, 내비게이션 중간단계를 수정하면 클라이언트 코드도 수정해야 한다.

이는 위임 숨기기 기법으로 해결 가능하며, 메세지 체인의 다양한 연결점에 위임 숨기기를 적용 가능하다.   
객체의 필드가 가리키는 객체(위임 객체) 의 메서드를 호출하기 위해서 위임 객체의 존재를 알 필요 없이, 위임 메서드를 추가하여 위임 객체의 존재를 숨긴다.   
체인을 구성하는 모든 객체에 적용 가능하지만, 중간 객체들이 모두 중개자가 되기 쉽다.   
최종 결과 객체가 어떻게 쓰이는지부터 살펴보는 것이 좋다.

#### 예시 코드

**위임 숨기기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
manager = aPerson.department.manager;
class Person {
	constructor(aDepartment) {
		this._department = aDepartment
	}
	
	get department() {
		return this._department;
	}
}
	
class Department {
	constructor(aManager) {
		this._manager = aManager;
	}
	
	get manager() {
		return this._manager;
	}
}
	
// 변경 후 ///////////////////////////
manager = aPerson.manager;
class Person {
	constructor(aDepartment) {
		this._department = aDepartment
	}
	
	get manager() {
		return this._department.manager;
	}
}
	
class Department {
	constructor(aManager) {
		this._manager = aManager;
	}
	
	get manager() {
		return this._manager;
	}
}
```

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
managerName = aPerson.department.manager.name;
managerName = aPerson.department.managerName; // 관리자 객체의 존재를 숨김
managerName = aPerson.manager.name; // 부서 객체의 존재를 숨김
managerName = aPerson.managerName; // 부서 객체와 관리자 객체 모두의 존재를 숨김
```


## 18. 중개자

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>중개자 제거하기</li>
	  <li>함수 인라인하기</li>
  </ul>
</details>

객체를 캡슐화 하는 과정에서 위임이 자주 활용되지만, 이 역시도 지나치면 문제가 된다.   
<small>클래스의 메서드 중 절반이 다른 클래스에 구현을 위임하고 있다면?</small>

위임 숨기기의 반대 기법인 중개자 제거하기를 활용하여, 해당 일을 하는 객체와 직접 소통하도록 한다.   
위임 메서드를 제거한 후 남는 일이 거의 없다면, 호출하는 쪽으로 함수를 인라인한다.

## 19. 내부자 거래

> 모듈 간의 데이터 거래를 최소화하라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>함수 옮기기</li>
	  <li>필드 옮기기</li>
	  <li>위임 숨기기</li>
	  <li>서브클래스를 위임으로 바꾸기</li>
	  <li>슈퍼클래스를 위임으로 바꾸기</li>
  </ul>
</details>


모듈 간의 결합도를 최소화하고, 모든 데이터 거래는 투명하게 처리해야 한다.   
은밀하게 데이터를 주고받는 모듈들이 있다면 따로 떼어놓아서 사적으로 처리하는 부분을 줄여야 한다.   
여러 모듈이 같은 관심사를 공유한다면, 공통 부분을 정식으로 처리하는 제 3의 모듈을 새로 만들거나 위임 숨기기로 다른 모듈이 중간자 역할을 하도록 한다.

상속 구조에서는 부모 자식 간에 결탁이 생길 때가 있는데, 이는 서브클래스를 위임으로 바꾸거나 슈퍼클래스를 위임으로 바꿔서 해결할 수 있다.

#### 예시 코드

**서브 클래스를 위임으로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Order {
  get daysToShip() {
		return this._warehouse.daysToShip;
  }
}
	
class PriorityOrder extends Order {
  get daysToShip() {
		return this._priorityPlan.daysToShip;
  }
}
	
// 변경 후 ///////////////////////////
class Order {
	constructor() {
		this._priorityDelegate = new PriorityOrderDelegate();
	}
	
	get daysToShip() {
		return (this._priorityDelegate)
			? this._priorityDelegate.daysToShip
			: this._warehouse.daysToShip;
  }
}
	
class PriorityOrderDelegate {
  get daysToShip() {
		return this._priorityPlan.daysToShip
  }
}
```

**슈퍼 클래스를 위임으로 바꾸기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class List {...}
class Stack extends List {...}

// 변경 후 ///////////////////////////
class Stack {
  constructor() {
		this._storage = new List();
  }
}
class List {...}
```

## 20. 거대한 클래스

> 클래스 안의 필드 수가 너무 많아지는 것은 피해라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>클래스 추출하기</li>
	  <li>슈퍼클래스 추출하기</li>
	  <li>타입 코드를 서브클래스로 바꾸기</li>
  </ul>
</details>

한 클래스가 너무 많은 일을 하다보면 필드 수가 늘어나고, 필드가 너무 많으면 중복 코드가 생기기 쉽다.

- 같은 컴포넌트에 모아두는 것이 합당해 보이는 필드들을 클래스로 추출한다.
- 개별 클래스로 추출하기보단 원래 클래스와 상속 관계로 만드는 것이 더 좋다면, 슈퍼 클래스로 추출하거나 서브 클래스로 추출한다.

#### 예시 코드

**슈퍼 클래스 추출하기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Department {
  get totalAnnualCost() {...}
	get name() {...}
	get headCount() {...}
}
	
class Employee {
  get annualCost() {...}
	get name() {...}
	get id() {...}
}
	
// 변경 후 ///////////////////////////
class Party {
  get name() {...}
	get annualCost() {...}
}
	
class Department extends Party {
  get annualCost() {...}
	get headCount() {...}
}
	
class Employee extends Party {
  get annualCost() {...}
	get id() {...}
}
```


## 21. 서로 다른 인터페이스의 대안 클래스들

> 클래스 교체를 위해 같은 인터페이스를 쓰도록 만들어라.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>함수 선언 바꾸기</li>
	  <li>함수 옮기기</li>
	  <li>슈퍼클래스 추출하기</li>
  </ul>
</details>

클래스를 사용할 때의 큰 장점은 필요에 따라 언제든 다른 클래스로 교체할 수 있다는 것이다.   
단, 클래스를 교체하려면 인터페이스가 같아야 한다.

- 함수 선언을 바꿔 메서드 시그니처를 일치시킨다.
- 인터페이스가 같아질 때까지 함수를 옮겨서, 필요한 동작들을 클래스 안으로 밀어넣는다.
- 그러다 대안 클래스들 사이에 중복 코드가 생기면 슈퍼클래스로 추출하는 것도 고려해본다.

## 22. 데이터 클래스

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>레코드 캡슐화하기</li>
	  <li>세터 제거하기</li>
	  <li>함수 옮기기</li>
	  <li>함수 추출하기</li>
	  <li>단계 쪼개기</li>
  </ul>
</details>

<small>* 데이터 클래스: 데이터 필드와 getter, setter 메서드로만 구성된 클래스</small>

데이터 저장 용도로만 쓰이다보니 다른 클래스가 너무 깊이까지 함부로 다룰 때가 많다.

- 데이터 클래스에 public 필드가 있다면 레코드 캡슐화를 통해 숨겨야한다.
- 변경하면 안되는 필드는 setter 를 제거하여 접근을 원천 봉쇄한다.

필요한 동작이 엉뚱한 곳에 정의되어서 데이터 클래스가 되어버린 경우엔, 클라이언트 코드를 데이터 클래스로 옮겨놓는다.   
예외적으로, 다른 함수를 호출해 얻은 결과로서의 데이터 객체는 동작 코드를 넣을 이유가 없다.   
이런 데이터 구조는 불변하며, 불변 필드는 굳이 캡슐화할 필요 없이 getter를 통하지 않고 필드 자체를 공개해도 무관하다.

#### 예시 코드

**레코드 캡슐화하기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
organization = {name: "Acme Gooseberries", country: "GB"};

// 변경 후 ///////////////////////////
class Organization {
  constructor(data) {
		this._name = data.name;
		this._country = data.country;
  }
	
	get name(){return this._name;}
	set name(arg) {this._name = arg;}
	get country(){return this._country;}
	set country(arg) {this._country = arg;}
}
```

## 23. 상속 포기

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>메서드 내리기</li>
	  <li>필드 내리기</li>
	  <li>서브클래스를 위임으로 바꾸기</li>
	  <li>슈퍼클래스를 위임으로 바꾸기</li>
  </ul>
</details>

서브 클래스가 부모 클래스의 특정 부분을 상속받기 원치 않은 경우에 발생한다.   
상속하지 않을 부모 코드를 따로 분리하여, 공통된 부분만 남도록 한다.   
하지만 리팩토링이 꼭 필요한 경우는 아니므로 그다지 권하진 않는다.   
부모의 인터페이스를 따르고 싶지 않을땐 아예 상속 메커니즘에서 벗어나도록, 위임 클래스를 만들고 이를 이용하도록 한다.

#### 예시 코드

**메서드 내리기, 필드 내리기**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
class Employee {
	private String quota;
  get quota {...}
}
	
class Engineer extends Employee {...}
class Salesman extends Employee {...}
	
// 변경 후 ///////////////////////////
class Employee {...}
class Engineer extends Employee {...}
class Salesman extends Employee {
	protected String quota;
  get quota {...}  
}
```

## 24. 주석

> 주석을 남겨야겠다는 생각이 들면, 가장 먼저 주석이 필요없는 코드로 리팩토링 해본다.

<details>
	<summary>리팩터링 기법</summary>
  <ul>
	  <li>함수 추출하기</li>
	  <li>함수 선언 바꾸기</li>
	  <li>어서션 추가하기</li>
  </ul>
</details>

<small>주석은 악취가 아닌 향기를 입히지만, 주석을 탈취제처럼 사용하진 말자.</small>

주석이 장황하게 달려 있다면 코드를 잘못 작성했기 때문인 경우가 많다.

특정 코드 블록이 하는 일에 주석을 남기고 싶다면, 해당 블록을 함수로 추출한다.   
이미 추출된 함수에 설명이 필요하다면, 함수 이름을 바꿔본다.

시스템이 동작하기 위한 선행 조건을 명시하고 싶다면, assertion을 추가해본다.   
특정 조건이 참일때만 제대로 동작하는 코드 영역이 있는 경우에 사용한다.   
어서션은 항상 참이라고 가정하는 조건문으로, 이것이 실패했다는건 프로그램이 잘못되었다는 것이다.   
어서션이 있고 없고가 프로그램 기능의 정상 동작에 아무런 영향을 주지 않도록 해야한다.   
이는 다른 개발자와의 훌륭한 소통 도구가 되지만, 테스트코드가 있다면 디버깅 용도로서의 쓸모는 줄어든다.

#### 예시 코드

**어서션 추가**

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// javascript
console.assert(returnFalse()) // 콘솔에 assert 에러 표시 (참이면 아무 동작 안함)

// nodeJS
const assert = require('assert');
assert(returnFalse()); // throw AssertionError!
assert.ok(returnFalse()); // assert()와 동일
assert.ifError(returnFalse()) // Pass
```

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
// 변경 전
if (this.discountRate)
  base = base - (this.discountRate * base);

// 변경 후 ///////////////////////////
assert(this.discountRate >= 0);
if (this.discountRate)
  base = base - (this.discountRate * base);
```