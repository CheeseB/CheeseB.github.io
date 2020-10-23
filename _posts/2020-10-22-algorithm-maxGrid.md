---
title: "[알고리즘] 격자판 최대합"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---

자연수가 적혀있는 N * N 의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력하는 문제이다.

<img src="{{site.url}}/assets/img/post/algo4.jpg">

<br>
<br>**입력**
<br>
<br>첫 줄에 자연수 N이 주어진다.(1 <= N <= 50) 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
<br>
<br>**출력**
<br>
<br>최대합을 출력한다.
<br>
<br>파이썬으로 풀었고, 나의 코드는 아래와 같다.

```python
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
sums = [[0] * (n + 1) for _ in range(2)]

for i in range(n):
    for j in range(n):
        sums[0][i] += grid[i][j]
        sums[1][j] += grid[i][j]
        if i == j:
            sums[0][n] += grid[i][j]
        if i + j == n - 1:
            sums[1][n] += grid[i][j]

if max(sums[0]) < max(sums[1]):
    print(max(sums[1]))
else:
    print(max(sums[0]))

```

여기서 sums 배열의 0번째 행은 grid의 각 행의 합을 나열한 것이고, 1번째 행은 grid의 각 열의 합을 나열한 것이다. 그리고 sums 배열의 0번째 행의 마지막 열은 grid에서 i==j 일때의 대각선의 합을, 1번째 행의 마지막 열은 그 반대방향의 대각선의 합을 넣었다. 마지막엔 sums 배열의 0번째와 1번째 행의 max를 각각 구하여 두가지 max값중 가장 큰값을 출력하도록 했다.
<br>
<br>sums배열을 쓰지 않고 변수만을 활용해서 푸는 방법도 있다.

```python
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
sum3 = sum4 = 0
maxSum = 0

for i in range(n):
    sum1 = sum2 = 0
    for j in range(n):
        sum1 += grid[i][j]
        sum2 += grid[j][i]
        if i == j:
            sum3 += grid[i][j]
        if i + j == n - 1:
            sum4 += grid[i][j]
    if sum1 > maxSum:
        maxSum = sum1
    if sum2 > maxSum:
        maxSum = sum2

if sum3 > maxSum:
    maxSum = sum3
if sum4 > maxSum:
    maxSum = sum4

print(maxSum)

```

여기선 sum1을 각 행의 합, sum2를 각 열의 합, sum3를 i==j일때의 대각선의 합, sum4를 그 반대방향의 대각선의 합으로 했다. 푸는 방법은 배열을 쓸 때와 별 다를게 없지만, 행의 합과 열의 합은 반복문을 돌 때마다 max값과 비교해주고 변수값을 초기화 해 주어야 했다.