---
title: "[알고리즘] 이분검색"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
<br>단 중복값은 존재하지 않습니다.
<br>
<br>**입력**
<br>
<br>첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
<br>두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.
<br>
<br>**출력**
<br>
<br>첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.
<br>
<br>파이썬으로 풀었고, 내 코드는 다음과 같다.

```python
n, m = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort()

start = 0
end = n
while start <= end:
    mid = (start + end) // 2
    if nums[mid] == m:
        print(mid + 1)
        break
    elif nums[mid] < m:
        start = mid
    else:
        end = mid

```

처음엔 종료조건을 따로 두지 않고 while True로 놔두어서 m을 찾기만 하면 break를 하도록 했는데
<br>그래도 종료조건을 두는것이 나을 것 같아서 start지점보다 end 지점이 크거나 같을 때만 반복하도록 수정했다.