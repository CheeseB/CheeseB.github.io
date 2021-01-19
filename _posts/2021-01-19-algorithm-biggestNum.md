---
title: "[알고리즘] 프로그래머스: 큰 수 만들기(파이썬)"
categories:
- algorithm
tags:
- 프로그래머스
- 알고리즘
classes: wide
---

문제 링크: [https://programmers.co.kr/learn/courses/30/lessons/42883](https://programmers.co.kr/learn/courses/30/lessons/42883)


```python
def solution(number, k):
    answer = ''
    numlist = list(number)
    numlen = len(numlist)
    anslen = numlen - k
    start = 0

    for i in range(anslen):
        pick = start
        if numlist[pick] != "9":
            rest = anslen - i
            for j in range(start + 1, numlen - rest + 1):
                    if numlist[j] > numlist[pick]:
                        pick = j
                        if numlist[j] == "9":
                            break
        answer += numlist[pick]
        start = pick + 1
    
    return answer

```
