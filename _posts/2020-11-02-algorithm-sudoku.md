---
title: "[알고리즘] 스도쿠 검사"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>스도쿠는 매우 간단한 숫자 퍼즐이다.
<br>9×9 크기의 보드가 있을 때, 각 행과 각 열, 그리고 9개의 3×3 크기의 보드에 1부터 9까지의 숫자가 중복 없이 나타나도록 보드를 채우면 된다.
<br>예를 들어 다음을 보자.

<img src="{{site.url}}/assets/img/post/algo9.jpg">

위 그림은 스도쿠를 정확하게 푼 경우이다.
<br>각 행에 1부터 9까지의 숫자가 중복 없이 나오고, 각 열에 1부터 9까지의 숫자가 중복 없이 나오고, 각 3×3짜리 사각형(9개이며, 위에서 색깔로 표시되었다) 에 1부터 9까지의 숫자가 중복 없이 나오기 때문이다.
<br>완성된 9×9 크기의 스도쿠가 주어지면 정확하게 풀었으면 "YES", 잘 못 풀었으면 "NO"를 출력하는 프로그램을 작성하세요.

<br>
<br>**입력**
<br>
<br>첫 번째 줄에 완성된 9×9 스도쿠가 주어집니다.
<br>
<br>**출력**
<br>
<br>첫째 줄에 "YES" 또는 "NO"를 출력하세요.
<br>
<br>파이썬으로 풀었고, 나의 코드는 다음과 같다.

```python
def sudoku(board):
    for i in range(9):
        rowList = [0] * 10
        colList = [0] * 10
        for j in range(9):
            rowList[board[i][j]] = 1
            colList[board[j][i]] = 1
        if sum(rowList) != 9 or sum(colList) != 9:
            return "NO"

    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            groupList = [0] * 10
            for k in range(3):
                for s in range(3):
                    groupList[board[i+k][j+s]] = 1
            if sum(groupList) != 9:
                return "NO"

    return "YES"


inputBoard = [list(map(int, input().split())) for _ in range(9)]
print(suDoKu(inputBoard))

```

정녕 3 x 3 그룹 검사를 하는 방법이 4중 for문을 사용하는 것 외엔 없는것인가..