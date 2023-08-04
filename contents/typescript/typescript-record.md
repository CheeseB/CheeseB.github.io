---
date: '2023-08-04'
title: '[Typescript] Record 타입 사용하기 (feat. Mapped Type)'
categories: ['Typescript']
summary: '타입스크립트 유틸리티 타입 중 Record 타입을 적용해보았다'
thumbnail: '../images/thumbnail/typescript.webp'
---

## 타입스크립트의 Record 란?

> **Record<Key, Value>** <br> 키가 Key타입이고 값이 Value 타입인 객체 타입을 생성함

타입스크립트의 유틸리티 타입 중 하나로, 인덱스 시그니처와 유사한 기능을 한다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>


```ts
type Score = {
	[name: string]: number;
}

// Score와 동일한 역할
type ScoreRecord = Record<string, number>;


let scores: ScoreRecord = {
  '치즈볼': 100,
	'초코볼': 200,
};
```

Record가 인덱스 시그니처와 다른 점은, Key로 문자열 리터럴을 사용할 수 있다는 것이다.

```ts
// 인덱스 시그니처는 key 타입으로 문자열 리터럴 사용 불가
type Score = {
	[name: '치즈볼' | '초코볼']: number;
}
```

![](../images/content/2023-08-04-13-25-19.webp)

이는 Record 타입을 사용하면 되지만, 맵드 타입을 사용해서도 해결 가능하다.

```ts
type Names = '치즈볼' | '초코볼'

// 맵드 타입
type Score = {
	[name in Names]: number;
}

// Record 사용
type ScoreRecord = Record<Names, number>;


let scores: ScoreRecord = {
  '치즈볼': 100,
	'초코볼': 200,
};
```

## Record 타입 적용기

나는 타입스크립트로 프론트 개발을 하면서, 한 인터페이스의 키가 다른 타입에도 활용되는 경우가 매우 많았기 때문에 맵드 타입을 자주 썼다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
interface CountType {
	views: number;
	likes: number;
	shares: number;
	comments: number;
}

interface ChartType {
	axis: string;
	value: string;
	color: string;
}

const chartData: {
	[K in keyof CountType]: ChartType[]
} = {
  views: [...],
  likes: [...],
  shares: [...],
  comments: [...],
};
```

매번 위와 같이 사용하다가, chartData 에 해당하는 타입을 따로 정의하고 싶어서 맵드타입을 interface로 분리하려 했으나 맵드 타입을 사용해서만 인터페이스를 정의하는건 불가능했다.

```ts
interface ChartDataType {
	[K in keyof CountType]: ChartType[];
}
```

![](../images/content/2023-08-04-17-19-08.webp)

아래와 같이 인터페이스 안에 속성을 따로 지정해서 맵드 타입을 쓰는 것은 가능하다. 하지만 타입 적용 시 그 내부 속성으로 접근해야 한다는 단점이 있다.

```ts
interface ChartDataType {
	data: {
		[K in keyof CountType]: ChartType[];
	}
}

// 객체를 data속성으로 따로 감싸주거나
const chartData: ChartDataType = {
  data: {
		views: [],
		likes: [],
		shares: [],
		comments: []
	}
};

// 타입 적용 시 ['data']로 접근해야 함
const chartData2: ChartDataType['data'] = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};
```


아래와 같이 type 키워드로 정의해두면 간단히 해결되지만, 한 프로젝트 내에서는 type과 interface 중에 하나로 통일해서 사용하는것이 좋다고 했고 우리 팀은 이미 interface를 사용중이었기 때문에 type 키워드를 쓰고 싶지는 않았다.

```ts
type ChartDataType = {
	[K in keyof CountType]: ChartType[];
}
```

그렇게 해서 찾아낸 타입이 Record 타입이다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
// 이전 코드
const chartData: {
	[K in keyof CountType]: ChartType[]
} = {
  views: [...],
  likes: [...],
  shares: [...],
  comments: [...],
};

// Record 사용
const chartData: Record<keyof CountType, ChartType[]> = {
  views: [...],
  likes: [...],
  shares: [...],
  comments: [...],
};
```

타입 정보를 따로 정의한 것은 아니지만, 타입 분리를 하려 했던 취지가 코드를 더 깔끔하게 만들기 위함이었어서, Record 타입을 써서 이전보다 코드가 깔끔해 진 것에 만족하였다.

Record 타입도 type 키워드를 쓰면 따로 정의가 가능하다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
type ChartDataType = Record<keyof CountType, ChartType[]>;

const chartData: ChartDataType = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};
```

여기서 맵드 타입을 사용하는 것과 Record 타입을 사용하는 것에 한가지 차이점이 있다면, 맵드타입은 각 키가 선택적 속성인지 여부를 포함하는 반면, Record는 포함하지 않는다는 것이다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
interface CountType {
	views?: number;
	likes?: number;
	shares?: number;
	comments?: number;
}

const chartDataMapped: {
	[K in keyof CountType]: ChartType[]
} = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};

const chartDataRecord: Record<keyof CountType, ChartType[]> = {
  views: [],
  likes: [],
  shares: [],
  comments: [],
};

const target1 = chartDataMapped.views.find((chartData) => (...)); // error - 'chartDataByType.views' is possibly 'undefined'
const target2 = chartDataRecord.views.find((chartData) => (...)); // ok
```

위 예시에서, chartDataMapped는 맵드 타입을 적용해서 CountType의 각 키의 옵셔널 `?` 정보가 포함되어, 접근시 `possibly 'undefined'` 에러가 뜨지만 chartDataRecord는 Record 타입을 적용해서 옵셔널 정보가 포함되지 않고 다 존재하는 키로 간주되어 에러를 표시하지 않는다.

### 마치며

이번 시간에는 유틸리티 타입 중 하나인 Record 타입에 대해서 다뤄 보았는데, 이전에 한 번 다룬적 있는 [Omit 타입](https://cheeseb.github.io/typescript/typescript-utility-omit/)을 비롯한 타입스크립트의 유틸리티 타입들은 알아두면 매우 유용하게 쓸 수 있을 것 같다.

- [타입스크립트 공식 문서 - 유틸리티 타입들](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html)

---

그리고 이번 포스팅에서 이야기한 것 처럼, 프로젝트 시작 전 팀원들과 상의한 끝에 타입 정의를 interface로 통일하기로 했지만 개발을 진행할수록 아직까지는 개인적으로 type이 더 쓰기 좋은 것 같다고 느꼈다. interface는 객체 타입을 선언할 때만 사용 가능하지만, 객체 타입 뿐 아니라 리터럴 타입과 유니온 타입 등 여러 타입을 정의해야 할 필요도 많았기 때문이다. 또한 type 키워드로 유틸리티 타입과 맵드 타입을 따로 정의하는 것도 가능하다. 물론 다른 포스팅을 찾아보았을 때, 대부분 interface를 쓰는 것이 더 좋다는 의견이었다. interface는 선언 병합(동일한 이름으로 여러번 선언하면 합쳐지는 것)이 가능하기 때문에 확장성을 고려해서 interface를 쓴다는 분이 많았지만, 아직까지 나의 경우에는 선언 병합을 사용할 일이 없었기 때문에 필요성이 와닿지는 않았다.

아마 type을 쓰느냐 interface를 쓰느냐는 앞으로도 더 찾아보고 고민해봐야 할 문제인 것 같다. 지금까지는 클래스를 쓸 일이 없었지만, 클래스를 사용하게 된다면 interface가 더 유용하기 쓰이지 않을까 싶다.

## 참고 링크

- [DevStory - [TypeScript]Record Type 사용 방법](https://developer-talk.tistory.com/296)