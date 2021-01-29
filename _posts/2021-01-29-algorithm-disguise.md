---
title: "[알고리즘] 프로그래머스: 위장(파이썬)"
categories:
- algorithm
tags:
- 프로그래머스
- 알고리즘
classes: wide
---

문제 링크: [https://programmers.co.kr/learn/courses/30/lessons/42578](https://programmers.co.kr/learn/courses/30/lessons/42578)


Combination 이용한 방법 (답은 맞긴 했지만 맞는 방법은 아닌듯)

```python
from itertools import combinations


def solution(clothes):
    dic = {}
    for _, key in clothes:
        if key in dic:
            dic[key] += 1
        else:
            dic[key] = 1

    keyList = list(dic)
    if all(x == 1 for x in dic.values()):
        answer = 2 ** len(keyList) - 1
    else:
        answer = sum(dic.values())
        for i in range(2, len(keyList) + 1):
            for comb in list(combinations(keyList, i)):
                mul = 1
                for key in comb:
                    mul *= dic[key]
                answer += mul

    return answer
```

공식을 이용한 방법
- 종류별로 (옷 가지수 + 1)을 전부 곱한 다음 마지막에 -1 해주면 됨
- 예를 들어 상의2벌, 하의 3벌이 있다면 (상의2벌 + 안입은 경우) * (하의 3벌 + 안입은 경우) 가 모든 경우의 수인데, 하나도 안입은 경우는 있으면 안되므로 1을 빼줌

```python
def solution(clothes):
    dic = {}
    for _, key in clothes:
        if key in dic:
            dic[key] += 1
        else:
            dic[key] = 1

    answer = 1
    for val in dic.values():
        answer *= (val + 1)

    return answer - 1
```