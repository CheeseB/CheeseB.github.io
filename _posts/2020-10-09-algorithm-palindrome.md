---
title: "[알고리즘] 회문 문자열 검사"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>N개의 문자열 데이터를 입력받아 앞에서 읽을 때나 뒤에서 읽을 때나 같은 경우(회문 문자열)이면 YES를 출력하고 회문 문자열이 아니면 NO를 출력하는 프로그램을 작성한다.
<br>단 회문을 검사할 때 대소문자를 구분하지 않습니다.
<br>
<br>**입력**
<br>
<br>첫 줄에 정수 N(1 <= N <= 20)이 주어지고, 그 다음 줄부터 N개의 단어가 입력된다. 각 단어의 길이는 100을 넘지 않는다.
<br>
<br>**출력**
<br>
<br>각 줄에 해당 문자열의 결과를 YES 또는 NO로 출력한다.
<br>
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

문제를 풀고 고치는 과정에서 알아낸 점은, 파이썬에선 리스트의 인덱스 접근을 **거꾸로 음수로도** 할 수 있다는 것이었다.
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

