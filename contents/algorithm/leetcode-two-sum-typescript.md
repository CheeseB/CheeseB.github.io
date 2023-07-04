---
date: '2023-07-03'
title: '[리트코드] 1. Two Sum (두 수의 합) - 타입스크립트'
categories: ['Algorithm', 'Typescript']
summary: '타입스크립트로 알고리즘 문제풀기'
thumbnail: '../images/thumbnail/algorithm.webp'
---

## 문제

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.<br>You may assume that each input would have exactly one solution, and you may not use the same element twice.<br>You can return the answer in any order.<br>

- 예시 1

```txt
Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

- 예시 2

```txt
Input: nums = [3,2,4], target = 6

Output: [1,2]
```

- 예시 3

```txt
Input: nums = [3,3], target = 6

Output: [0,1]
```

- 제약조건
	- 2 <= nums.length <= 104
	- 109 <= nums[i] <= 109
	- 109 <= target <= 109
	- Only one valid answer exists.

## 풀이 1 - 브루트포스: O(n^2)

가장 쉬운 방법으로, 이중 for문 돌면서 합이 동일한 것을 찾는다.   
시간제한이 있는 문제였다면 당연히 통과하지 못했을 방법이다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
// Beats: Runtime 38.22%, Memory 77.63%

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};
```

## 풀이 2 - lastIndexOf 활용: O(n^2)

for문을 하나로 줄이고, 각 숫자를 target에서 뺀 값이 존재하는지를 배열 뒤부터 검사했다.   
for문이 하나여서 얼핏 보면 시간 복잡도를 줄인것 같지만, lastIndexOf 도 결국엔 값을 찾을 때 까지 배열을 쭉 탐색하는거라 이중 for문과 별반 다를 것은 없는 것 같다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
// Beats: Runtime 6.2%, Memory 93.80%

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const j = nums.lastIndexOf(target - nums[i]);
        if (j !== -1 && i !== j) return [i, j];
    }
};
```

## 풀이 3 - 객체 키 탐색: O(n)

'파이썬 알고리즘 인터뷰' 책에 기술되어 있는 풀이법으로, 타입스크립트로 풀 수 있는 방법 중 가장 좋은 방법인 것 같다.

nums 배열을 돌면서 값을 키로, 인덱스를 값으로 객체에 저장한다.   
반복문을 도는 동안 target에서 각 숫자를 뺀 값이 객체의 키로 이미 존재한다면, 바로 해당 인덱스를 리턴시키도록 했다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```ts
// Beats: Runtime 51.99%, Memory 48.87%

function twoSum(nums: number[], target: number): number[] {
    let res = [];
    const obj = {};

    nums.forEach((num, i) => {
        if (obj[target - num] !== undefined) {
            res = [i, obj[target - num]];
            return;
        }
        obj[num] = i;
    });

    return res;
};
```