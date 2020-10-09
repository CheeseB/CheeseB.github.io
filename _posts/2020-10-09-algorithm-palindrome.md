---
title: "[알고리즘] 회문 문자열 검사"
categories:
- algorithm
tags:
- 알고리즘
- 회문
classes: wide
---

여러 개의 문자열을 입력으로 받아서 회문인지 아닌지를 검사하여 회문이면 YES를, 그렇지 않으면 NO를 출력하는 문제이다. 대소문자는 구분하지 않는다.
<br>파이썬으로 풀었으며, 첫번째로 푼 방법은 다음과 같다.

```python
tests = int(input())

for test in range(tests):
    word = input().upper()
    length = len(word)

    for i in range(length // 2):
        if word[i] != word[-1-i]:
            print('#%d NO' % (test + 1))
            break
    else:
        print('#%d YES' % (test + 1))

```

문제를 풀고 고치는 과정에서 알아낸 점은, 파이썬에선 리스트의 인덱스 접근을 *거꾸로 음수로도* 할 수 있다는 것이었다.
<br>아래와 같이 -1이 맨 끝 인덱스가 되고, 숫자가 낮아질수록 앞 인덱스로 간다.


|0|1|2|3|4|
|--|--|--|--|--|
|-5|-4|-3|-2|-1|


<br>그리고 좀더 파이썬스럽게 짧게 푼 방법은 아래와 같다.

```python
tests = int(input())

for test in range(tests):
    word = input().upper()

    if word == word[::-1]:
        print('#%d YES' % (test + 1))
    else:
        print('#%d NO' % (test + 1))
```

