---
title: "[알고리즘] 두 리스트 합치기"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>오름차순으로 정렬이 된 두 리스트가 주어지면 두 리스트를 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.
<br>
<br>**입력**
<br>
<br>첫 번째 줄에 첫 번째 리스트의 크기 N(1 <= N <= 100)이 주어진다.
<br>두 번째 줄에 N개의 리스트 원소가 오름차순으로 주어진다.
<br>세 번째 줄에 두 번째 리스트의 크기 M(1 <= M <= 100)이 주어진다.
<br>네 번째 줄에 M개의 리스트 원소가 오름차순으로 주어진다.
<br>각 리스트의 원소는 int형 변수의 크기를 넘지 않는다.
<br>
<br>**출력**
<br>
<br>오름차순으로 정렬된 리스트를 출력한다.
<br>
<br>파이썬으로 풀었고, 이 문제를 나는 처음에 매우 단순하게 sort() 함수를 이용해서 풀었다.

```python
_ = int(input())
list1 = list(map(int, input().split()))
_ = int(input())
list2 = list(map(int, input().split()))

res = list1 + list2
res.sort()

for x in res:
    print(x, end=' ')

```

하지만 여기서 내가 간과한 점이 있다. sort()함수는 퀵소트를 사용하는데, 이는 시간복잡도가 nlogn이다. 예를 들어 리스트의 길이가 8이라면 정렬을 하는데 8log8이라는 시간 복잡도가 생긴다. 하지만 리스트를 합치기 전에, 두 리스트는 이미 정렬이 되어있는 상태이다. 이미 정렬이 된 리스트를 합친 후 다시 정렬을 하는 것은 n번이면 충분하다. 그러므로 sort()함수를 그냥 가져다 쓰지 않고 내가 직접 구현을 해야 했다. 직접 구현한 코드는 아래와 같다.

```python
len1 = int(input())
list1 = list(map(int, input().split()))
len2 = int(input())
list2 = list(map(int, input().split()))

res = list()
p1 = p2 = 0

while p1 < len1 and p2 < len2:
    if list1[p1] < list2[p2]:
        res.append(list1[p1])
        p1 += 1
    else:
        res.append(list2[p2])
        p2 += 1

if p1 < len1:
    res += list1[p1:]
else:
    res += list2[p2:]

for x in res:
    print(x, end=' ')

```

각각의 리스트의 맨 앞을 가리키는 포인터를 하나씩 둔 다음, 두 포인터가 가르키는 값을 비교한다.
<br>비교한 후 더 작은 값을 두 리스트를 합칠 리스트에 하나씩 삽입한다.
<br>삽입 후엔 삽입한 값을 가리키던 포인터를 오른쪽으로 하나씩 밀어낸다.
<br>
<br>처음 while문을 다 돌고 나서 나머지 남은 리스트를 붙일 때, 원래는 while문을 두번 더 써서 일일이 하나하나 붙여줬는데 파이썬은 그럴 필요가 없었다.
<br>리스트의 슬라이스를 이용하면 남은 포인터부터 끝까지 붙일 수 있기 때문이다.
<br>그리고 파이썬은 + 연산으로 두개의 리스트를 쉽게 붙일 수 있어서 간편했다.