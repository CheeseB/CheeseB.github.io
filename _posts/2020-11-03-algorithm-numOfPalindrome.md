---
title: "[알고리즘] 격자판 회문수"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>1부터 9까지의 자연수로 채워진 7x7 격자판이 주어지면 격자판 위에서 가로방향 또는 세로방향으로 길이 5자리 회문수가 몇 개 있는지 구하는 프로그램을 작성하세요.
<br>회문수란 121과 같이 앞에서부터 읽으나 뒤에서부터 읽으나 같은 수를 말합니다.

<img src="{{site.url}}/assets/img/post/algo10.jpg">

빨간색처럼 구부러진 경우(87178)는 회문수로 간주하지 않습니다.

<br>
<br>**입력**
<br>
<br>1부터 9까지의 자연수로 채워진 7x7격자판이 주어집니다.
<br>
<br>**출력**
<br>
<br>5자리 회문수의 개수를 출력합니다.
<br>
<br>파이썬으로 풀었고, 처음의 내 코드는 다음과 같다.

```python
grid = [list(map(int, input().split())) for _ in range(7)]
res = 0

for i in range(7):
    for j in range(3):
        for k in range(2):
            if grid[i][j+k] != grid[i][j-k+4]:
                break
        else:
            res += 1

for i in range(7):
    for j in range(3):
        for k in range(2):
            if grid[j+k][i] != grid[j-k+4][i]:
                break
        else:
            res += 1

print(res)

```

맨처음과 맨끝, 처음에서 두번째와 끝에서 두번째 문자가 같은지 비교하고 같을때만 결과값을 1 증가시켜주도록 했다.
<br>가로줄과 세로줄 따로 해서 3중for문을 두번씩 돌렸다.
<br>하지만 3중 for문을 한번만 돌리고도 할 수 있는 방법이 있었다.

```python
grid = [list(map(int, input().split())) for _ in range(7)]
res = 0

for i in range(7):
    for j in range(3):
        # 2차원 리스트의 행 일부를 1차원 리스트로 슬라이스
        # j부터 j+5 전까지
        temp = grid[i][j:j+5]

        # 행 검사 (리스트 거꾸로 뒤집기)
        if temp == temp[::-1]:
            res += 1
        # 열 검사
        for k in range(2):
            if grid[j+k][i] != grid[j-k+4][i]:
                break
        else:
            res += 1

print(res)

```

열 검사는 내가 썼던 방법과 동일하게 하되, 행 검사를 슬라이스를 활용해서 하였다.
<br>리스트에 ex_list[a:b] 이런 식으로 하면 a번째부터 b-1번째 인덱스까지 슬라이스된 리스트가 리턴된다.
<br>이는 2차원 리스트에서도 마찬가지로, 위처럼 grid[i][j:j+5] 이렇게 하면 grid 리스트의 i행의 j ~ j+4 열까지 슬라이스된 1차원 배열이 나온다.
<br>그것을 이용해서 행 검사를 한 덕분에 열 검사와 동시에 해도 문제가 없었다.