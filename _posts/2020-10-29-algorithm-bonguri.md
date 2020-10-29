---
title: "[알고리즘] 봉우리"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>지도 정보가 N x N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
<br>각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
<br>봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
<br>격자의 가장자리는 0으로 초기화 되었다고 가정한다.
<br>만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

<img src="{{site.url}}/assets/img/post/algo8.jpg">

<br>
<br>**입력**
<br>
<br>첫 줄에 자연수 N이 주어진다.(1<=N<=50)
<br>두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
<br>각 자연수는 100을 넘지 않는다.
<br>
<br>**출력**
<br>
<br>봉우리의 개수를 출력한다.
<br>
<br>파이썬으로 풀었고, 처음에 푼 코드는 다음과 같다.

```python
n = int(input())
land = [[0] * (n+2) for _ in range(n+2)]
temp = [list(map(int, input().split())) for _ in range(n)]
for i in range(n):
    for j in range(n):
        land[i+1][j+1] = temp[i][j]
res = 0

for i in range(1, n+1):
    for j in range(1, n+1):
        left = land[i][j-1]
        right = land[i][j+1]
        up = land[i-1][j]
        down = land[i+1][j]
        if max(left, right, up, down) < land[i][j]:
            res += 1

print(res)

```

(n+2)x(n+2) 크기의 2차원 리스트를 만들어서 land라고 이름짓고, land의 가운데에 인풋값을 넣었다.
<br>그리고 land의 가장자리를 제외한 모든 칸에 대해서 상하좌우 값을 변수에 저장하고, 그 중의 max값보다 해당 칸의 값이 더 크다면 결과값(res)를 하나씩 늘렸다.
<br>하지만 이보다 나은 방법이 있었다.

```python
n = int(input())
land = [list(map(int, input().split())) for _ in range(n)]
land.insert(0, [0] * n)  # 2차원 리스트 맨 첫줄에 한줄 추가
land.append([0] * n)  # 2차원 리스트 맨 끝줄에 한줄 추가
for line in land:
    # 각 줄의 처음과 끝에 0 추가
    line.insert(0, 0)
    line.append(0)

# 각 칸의 상하좌우를 비교할 수 있도록 방향 저장
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

res = 0

for i in range(1, n+1):
    for j in range(1, n+1):
        # 모든 k에 대해서 조건을 만족하면 참
        if all(land[i][j] > land[i+dx[k]][j+dy[k]] for k in range(4)):
            res += 1

print(res)

```

먼저 인풋값을 받는 것에서부터 차이가 있다.
<br>나는 인풋으로 받은 리스트의 가장자리마다 0을 추가하는 방법이 생각이 안나서 2차원 리스트를 하나 더 만들어 메모리 낭비를 했지만, 이제 추가하는 방법을 알았다.
<br>insert와 append 함수는 1차원 리스트 뿐 아니라 2차원 리스트에도 쓸 수 있었다.
<br>2차원 리스트에 insert나 append를 쓰고, 인자값으로 1차원 리스트를 넣으면 그 1차원 리스트가 2차원 리스트의 한 행으로 추가된다.
<br>그리고 2차원 리스트에 for문을 돌려서 각 줄마다 맨 처음과 끝에 insert와 append로 요소를 추가할 수 있다.
<br>그 방법을 활용해서 2차원 리스트의 맨 첫 행과 끝 행에 0으로 채워진 줄을 추가했고, 각 줄의 맨 왼쪽과 오른쪽에도 0을 추가했다.
<br>
<br>그리고 각 칸의 상하좌우 모두와 비교하는 방법도 파이썬의 특성을 활용해서 다르게 풀 수 있었다.
<br>파이썬에는 if 조건문에 all()함수를 사용할 수 있는데, all(조건 for 변수 in 범위)와 같이 쓰인다.
<br>'범위' 안의 모든 '변수' 가 '조건'을 만족해야만 참인 것이다.
<br>이를 이용해서 각 칸의 상하좌우 방향을 가리키도록 dx, dy라는 리스트를 만들고
<br>각 칸의 상하좌우 모두의 값보다 그 칸의 값이 더 크다는 조건을 만족한다면 결과값을 증가시키도록 했다. 