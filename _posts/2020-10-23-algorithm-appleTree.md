---
title: "[알고리즘] 격자판 다이아몬드 합"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---

100 이하의 자연수가 적혀있는 N*N의 격자판이 있다. 이 격자판에서 다이아몬드 모양의 격차판에 있는 숫자만 합하여 출력하는 문제이다.

<img src="{{site.url}}/assets/img/post/algo5.jpg">

<br>
<br>**입력**
<br>
<br>첫 줄에 자연수 N(홀수)이 주어진다.(3<=N<=20)
<br>두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
<br>각 격자안의 수는 100을 넘지 않는다.
<br>
<br>**출력**
<br>
<br>숫자의 총합을 출력한다.
<br>
<br>파이썬으로 풀었고, 처음에 푼 코드는 다음과 같다.

```python
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
res = 0
cnt = 1
start = n//2

for i in range(n):
    idx = start
    for _ in range(cnt):
        res += grid[i][idx]
        idx += 1
    if i < n//2:
        cnt += 2
        start -= 1
    else:
        cnt -= 2
        start += 1

print(res)

```

- start: 각 줄에서 합을 구하기 시작할 칸
- cnt: 각줄의 시작점부터 몇개의 칸의 합을 구할 지

먼저 start를 n//2로 초기화하여 첫 줄의 중간점부터 시작하도록 했고, cnt를 1로 초기화했다.
<br>그 다음 밑의 줄로 내려갈수록 start는 1씩 줄어들고 cnt는 2씩 늘어나게 하여 밑으로 갈수록 점점 합을 구할 칸이 넓어지도록 했다.
<br>그리고 중간줄을 지나는 순간부턴 start는 1씩 늘어나고 cnt를 2씩 줄어들게 하여 밑으로 갈수록 점점 합을 구할 칸이 좁아지도록 했다.
<br>
<br>하지만 이보다 더 간단한 방법이 있었다.

```python
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
res = 0
start = end = n//2

for i in range(n):
    for j in range(start, end+1):
        res += grid[i][j]
    if i < n//2:
        start -= 1
        end += 1
    else:
        start += 1
        end -= 1

print(res)

```

start와 end지점을 가리킬 변수를 만들고, 매 줄마다 start부터 end지점까지 for문을 돌려서 합을 구하도록 했다.
<br>처음엔 둘다 n//2로 초기화시키고, 밑으로 내려갈수록 start는 1 감소 end는 1 증가시켰다.
<br>중간줄을 지나면 반대로 start를 1 증가 end를 1씩 감소시켰다.