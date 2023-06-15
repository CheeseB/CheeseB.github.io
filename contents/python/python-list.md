---
date: '2020-09-17'
title: '[파이썬] 리스트'
categories: ['Python']
summary: '파이썬 문법 공부'
thumbnail: '../images/thumbnail/python.webp'
---

<small>예전 블로그에 작성된 글을 옮긴 게시글입니다.</small>

파이썬에서 빈 리스트를 생성하는 두가지 방법은 아래와 같다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = []
b = list()
```

range함수를 사용해 리스트를 초기화하는 방법은 아래와 같다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
b = list(range(1, 11)) # [1,2,3...,10]
```

파이썬에서는 + 연산자를 이용해 두 리스트를 합칠 수 있다. 같은 값이 있어도 그대로 중복되어 합쳐진다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3]
b = [1,2,3,4,5,6]

c = a + b # [1,2,3,1,2,3,4,5,6]
```

리스트의 맨 뒤에 요소를 추가하고 싶다면 append(값) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3]
a.append(4) # [1,2,3,4]
```

리스트의 특정 인덱스에 요소를 추가하고 싶다면 insert(인덱스, 값) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3,4]
a.insert(2, 5) # [1,2,5,3,4]
```

리스트의 맨뒤 요소를 삭제하고 싶다면 pop() 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,5,3,4]
a.pop() # [1,2,5,3]
```

리스트의 특정 인덱스 요소를 삭제하고 싶다면 pop(인덱스) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,5,3]
a.pop(2) # [1,2,3]
```

리스트에서 특정 값을 가지는 요소를 삭제하고 싶다면 remove(값) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3]
a.remove(2) # [1,3]
```

리스트의 특정 값에 해당하는 요소의 인덱스를 반환하고 싶다면 index(값) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,3,5,7,9]
a.index(5) # 2
```

리스트의 모든 값을 합치고자 하면 sum(리스트) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3,4,5]
sum(a) # 15
```

리스트의 최대값, 최소값을 구하고자 하면 max(리스트), min(리스트) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3,4,5,6]

max(a) # 6
min(a) # 1
```

리스트의 요소를 랜덤으로 섞고 싶다면 random 패키지의 shuffle 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
import random as r

r.shuffle(a)
```

리스트의 요소를 오름차순으로 정렬하고 싶으면 sort()함수를 사용하고, 내림차순으로 정렬하고 싶으면 sort(reverse = True) 함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [3,1,5,2,4]

a.sort() # [1,2,3,4,5]
a.sort(reverse=True) # [5,4,3,2,1]
```

리스트를 빈 리스트로 초기화하고자 한다면 clear()함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a.clear()
print(a) # []
```

리스트도 문자열과 마찬가지로 슬라이스가 가능하다. a[from:end] 는 a 리스트를 from 인덱스부터 end-1 인덱스까지 슬라이스한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3,4,5]

a[:3] # [1,2,3]
a[2:4] # [3,4]
a[2:] # [3,4,5]
```

리스트를 역순으로 배치하고 싶다면 a[::-1]와 같이 하면 된다. 이는 문자열에도 적용된다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,3,2,5,4]
b = "acbde"

a[::-1] # [4,5,2,3,1]
b[::-1] # "edbca"
```

리스트의 길이를 구하고 싶다면 len()함수를 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3,4,5]
len(a) # 5
```

len()함수를 이용해서 리스트의 요소를 하나하나 접근할 수 있다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
for i in range(len(a)):
	print(a[i])

```

하지만 아래와 같은 방법이 가장 많이 쓰인다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
for x in a:
	print(x)
```

그리고 리스트의 요소 뿐 아니라 인덱스 값 까지 활용하고 싶다면 아래와 같이 enumerate()함수를 사용하면 된다. enumerate()는 해당 리스트에 대한 튜플을 생성해준다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [10, 20, 30, 40]

for x in enumerate(a):
	print(x)
# (0, 10)
# (1, 20)
# (2, 30)
# (3, 40)
```

리스트는 대괄호로 나타내지만, 튜플은 소괄호로 나타낸다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [1,2,3] #리스트
b = (1,2,3) #튜플
```

리스트와 튜플의 접근법은 a[0], b[0] 이렇게 대괄호로 동일하다. 리스트와 튜플의 차이점은, 튜플은 값을 변경할 수가 없다는 것이다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
b = (1,2,3)
b[0] = 7 # error!
```

enumerate로 리스트의 튜플을 생성한 후에 인덱스와 값을 따로따로 접근할 수도 있다. 튜플의 0번째는 리스트의 인덱스, 1번째는 리스트의 값이다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
for x in enumerate(a):
	print(x[0], x[1])
```

하지만 위의 방법보다 아래의 방법을 제일 많이 사용한다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
for idx, value in enumerate(a):
	print(idx, value)
```

all(조건 for x in a) 이것은 a리스트의 모든 요소 x가 전부 조건을 만족해야 참이다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
if all(60>x for x in a):
	print("True")
# a의 모든 요소가 60보다 작아야 참이 됨
```

any(조건 for x in a) 이것은 a리스트의 요소 x 중 하나라도 조건을 만족하면 참이다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
if any(15>x for x in a):
	print("True") # a의 요소 중 하나라도 15보다 작으면 참이 됨
```


파이썬에서 1차원 리스트를 만드는 또다른 방법은 아래와 같다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [0] * 3
# [0,0,0]
```

파이썬에서는 2차원 리스트를 다른 언어들처럼 a[][] = {} 이런 식으로 만들 수 없다. 파이썬에서 2차원 리스트를 만드는 방법은 아래와 같다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [[0] * 3 for _ in range (3)]
# [[0,0,0], [0,0,0], [0,0,0]]
```

2차원 리스트에 단일 for문을 돌리면 행마다 접근할 수 있다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [[0] * 3 for _ in range (3)]

a[0][0] = 1
a[1][1] = 2
a[2][2] = 3

for x in a:
  print(x)
# [1,0,0]
# [0,2,0]
# [0,0,3]
```

2차원 리스트에 이중 for문을 사용하면 리스트의 요소 하나하나 접근할 수 있다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
a = [[0] * 3 for _ in range (3)]

a[0][0] = 1
a[1][1] = 2
a[2][2] = 3

for x in a:
  for y in x:
    print(y, end=' ')
  print()
# 1 0 0
# 0 2 0
# 0 0 3
```

파이썬엔 리스트와 튜플 외에도 set 자료형이 있다.
<br>
<br>set 특징
- 중복 없음
- 순서 없음
- {} 대괄호로 표시


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
s1 = set("Hello")
print(s1) # {'e', 'H', 'l', 'o'}
```

리스트, 튜플, set 간에는 쉽게 변환이 가능하다.


<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```python
s1 = set([1,2,3]) # {1, 2, 3}
l1 = list(s1) # [1, 2, 3]
t1 = tuple(l1) # (1, 2, 3)
```