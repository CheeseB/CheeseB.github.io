---
title: "[알고리즘] 프로그래머스: 삼각 달팽이(파이썬)"
categories:
- algorithm
tags:
- 프로그래머스
- 알고리즘
classes: wide
---

문제 링크: [https://programmers.co.kr/learn/courses/30/lessons/68645](https://programmers.co.kr/learn/courses/30/lessons/68645)


```python
def solution(n):
    answer = [0] * (n * (n + 1) // 2)
    idx = 0
    num = 1
    floor = 0
    for i in range(n):
        for _ in range(n-i):
            if i%3 == 0: #left
                idx += floor
                floor += 1
            elif i%3 == 1: #bottom
                idx += 1
            else: #right
                idx -= floor
                floor -= 1
            answer[idx] = num
            num += 1
    return answer

```
