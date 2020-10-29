---
title: "[알고리즘] 곶감(모래시계)"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>현수는 곳감을 만들기 위해 감을 깎아 마당에 말리고 있습니다. <br>현수의 마당은 N x N 격자판으로 이루어져 있으며, 현수는 각 격자단위로 말리는 감의 수를 정합니다.
<br>그런데 해의 위치에 따라 특정위치의 감은 잘 마르지 않습니다.
<br>그래서 현수는 격자의 행을 기준으로 왼쪽, 또는 오른쪽으로 회전시켜 위치를 변경해 모든 감이 잘 마르게 합니다.
<br>만약 회전명령 정보가 2 0 3이면 2번째 행을 왼쪽으로 3만큼 아래 그림처럼 회전시키는 명령입니다.

<img src="{{site.url}}/assets/img/post/algo6.jpg">

첫 번째 수는 행번호, 두 번째 수는 방향인데 0이면 왼쪽, 1이면 오른쪽이고, 세 번째 수는 회전하는 격자의 수입니다.
<br>M개의 회전명령을 실행하고 난 후 아래와 같이 마당의 모래시계 모양의 영역에는 감이 총 몇개가 있는지 출력하는 프로그램을 작성하세요.

<img src="{{site.url}}/assets/img/post/algo7.jpg">

<br>
<br>**입력**
<br>
<br>첫 줄에 자연수 N(3<=N<=20) 이 주어며, N은 홀수입니다.
<br>두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
<br>이 자연수는 각 격자안에 있는 감의 개수이며, 각 격자안의 감의 개수는 100을 넘지 않는다.
<br>그 다음 줄에 회전명령의 개수인 M(1<=M<=10)이 주어지고, 그 다음 줄부터 M개의 회전명령 정보가 M줄에 걸쳐 주어집니다.
<br>
<br>**출력**
<br>
<br>총 감의 개수를 출력합니다.
<br>
<br>파이썬으로 풀었고, 처음에 푼 코드는 다음과 같다.

```python
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
newGrid = [[0] * n for _ in range(n)]
for i in range(n):
    for j in range(n):
        newGrid[i][j] = grid[i][j]

m = int(input())
for _ in range(m):
    row, way, rotate = map(int, input().split())
    row -= 1
    if way == 1:
        for i in range(n):
            col = (i + rotate) % n
            newGrid[row][col] = grid[row][i]
    else:
        for i in range(n):
            col = (n + i - rotate) % n
            newGrid[row][col] = grid[row][i]
    for j in range(n):
        grid[row][j] = newGrid[row][j]

res = 0
start = 0
end = n
for i in range(n):
    for j in range(start, end):
        res += newGrid[i][j]
    if i >= n//2:
        start -= 1
        end += 1
    else:
        start += 1
        end -= 1

print(res)

```

처음에 입력으로 주어진 격자판(grid)을 동일하게 복사한 2차원 리스트를 만들고(newGrid), 회전 명령에 따라서 인덱스를 옮긴 grid의 행을 newGrid의 행에 덮어씌웠다.
<br>이 때, 회전 방향이 오른쪽이면 원래 인덱스에 회전 갯수를 더한 뒤 N으로 모듈러 연산을 취하여 인덱스 범위를 벗어나는 것을 방지했고
<br>회전 방향이 왼쪽이면 인덱스가 마이너스로 되는것을 막기위해 원래 인덱스에 회전 갯수를 뺀 후 N을 더한 값에 N으로 모듈러 연산을 취했다.
<br>
<br>그런데 위와 같은 방법이 아닌 훨씬 좋은 방법도 있었다. 똑같은 리스트를 하나 더 만들 필요도 없고 코드도 훨씬 간단하다. 그 방법은 아래와 같다.

```python
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

m = int(input())
for _ in range(m):
    row, way, rotate = map(int, input().split())
    row -= 1
    if way == 0:
        for _ in range(rotate):
            # 맨앞을 빼서 맨뒤로 붙임
            grid[row].append(grid[row].pop(0))
    else:
        for _ in range(rotate):
            # 맨뒤를 빼서 맨앞에 붙임
            grid[row].insert(0, grid[row].pop())

res = 0
start = 0
end = n
for i in range(n):
    for j in range(start, end):
        res += grid[i][j]
    if i >= n//2:
        start -= 1
        end += 1
    else:
        start += 1
        end -= 1

print(res)

```

회전 방향이 왼쪽이라면, 회전을 적용할 행의 맨 앞의 값을 pop(0)해서 빼내고 맨 뒤에다가 append 하면 된다.
<br>회전 방향이 오른쪽이라면, 회전을 적용할 행의 맨 뒤의 값을 pop()해서 빼내고 맨 앞에다가 insert(0, value) 하면 된다.
<br>그 과정을 회전 개수만큼 반복하기만 하면 된다.
<br>
<br>리스트의 앞부분을 pop으로 빼내도 뒤의 값들이 알아서 앞으로 당겨지고, 리스트의 앞에 insert로 값을 집어넣어도 원래 있던 값들이 알아서 뒤로 밀려나기에 편하게 위와같은 방법을 쓸 수 있었다.