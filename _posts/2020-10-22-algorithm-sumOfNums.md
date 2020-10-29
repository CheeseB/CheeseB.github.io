---
title: "[알고리즘] 수들의 합"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>N개의 수로 된 수열 A[1], A[2], ..., A[N] 이 있다. 이 수열의 i번째 수부터 j번째 수까지의 합 A[i]+A[i+1]+...+A[j-1]+A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.
<br>
<br>**입력**
<br>
<br>첫째 줄에 N(1 <= N <= 10,000), M(1 <= M <= 300,000,000)이 주어진다. 다음 줄에는 A[1], A[2], ..., A[N]이 공백으로 분리되어 주어진다. 각각의 A[x]는 30,000을 넘지 않는 자연수이다.
<br>
<br>**출력**
<br>
<br>첫째 줄에 경우의 수를 출력한다.
<br>
<br>사용한 변수와 문제 풀이는 다음과 같다.

- numList: 수열 리스트
- lt: 부분수열의 시작점
- rt: 부분수열의 끝점
- tot: 부분수열의 합 (lt ~ rt앞)
- cnt: tot이 m이 되는 경우의 수

수열 리스트에서 lt번 인덱스부터 rt번 인덱스 전까지 숫자들의 합을 tot으로 하고, tot과 m을 계속 비교해가면서 lt와 rt를 점점 리스트의 끝으로 하나씩 밀어가며 tot과 m이 같아지는 경우의 수를 구해야 한다.
<br>일단 가장먼저 tot은 numList[0]으로 초기화한 뒤 아래의 과정에 따른다.

- tot이 m보다 작을때:
	- numList의 rt번째 수를 tot에 더함
	- rt를 1 증가시킴
- tot이 m과 같을때:
	- cnt를 1 증가시킴
	- numList의 lt번째 수를 tot에서 뺌
	- lt를 1 증가시킴
- tot이 m보다 클때:
	- numList의 lt번째 수를 tot에서 뺌
	- lt를 1 증가시킴

위 과정을 계속 반복하다가, rt가 리스트의 맨 끝에 도달했는데도(rt == n) rt를 1 증가시켜야 하는 상황이 오면(tot이 m보다 작으면) 반복을 종료하고 cnt를 반환하면 끝이다.
<br>
<br>파이썬으로 풀었고, 나의 코드는 아래와 같다.

```python
n, m = map(int, input().split())
numList = list(map(int, input().split()))

lt = 0
rt = 1
tot = numList[0]
cnt = 0

while True:
    if tot < m:
        if rt >= n:
            break
        tot += numList[rt]
        rt += 1
    elif tot == m:
        tot -= numList[lt]
        lt += 1
        cnt += 1
    else:
        tot -= numList[lt]
        lt += 1

print(cnt)

```

처음엔 위처럼 tot이 m보다 작을때, 같을때, 클때를 따로따로 if-elif-else문으로 처리해 주었는데 elif와 else문에 동일한 코드가 두줄이 겹쳐서 아래처럼 tot이 m보다 크거나 같은 경우를 else문에 한꺼번에 처리하고, tot이 m과 같을때만 cnt를 증가시켜 주도록 했다.

```python
n, m = map(int, input().split())
numList = list(map(int, input().split()))

lt = 0
rt = 1
tot = numList[0]
cnt = 0

while True:
    if tot < m:
        if rt >= n:
            break
        tot += numList[rt]
        rt += 1
    else:
        if tot == m:
            cnt += 1
        tot -= numList[lt]
        lt += 1

print(cnt)

```