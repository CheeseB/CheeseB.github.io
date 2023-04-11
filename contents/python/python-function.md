---
date: '2020-09-17'
title: '[파이썬] 함수'
categories: ['Python']
summary: '파이썬 문법 공부'
thumbnail: '../images/thumbnail/python.webp'
---


파이썬에서 함수 정의는 def 키워드를 사용한다. for문, if문과 마찬가지로 들여쓰기 되어있는 부분 까지가 함수 정의 부분이다.

```python
def add(a, b):
  c = a+b
  return c
```

함수 정의 부분은 함수 호출하는 곳보다 반드시 위에 있어야 한다.
<br>
<br>파이썬은 함수의 리턴값이 두 개일 수 있다. (두개의 리턴값이 하나의 튜플로 반환됨)

```python
def add(a, b):
  c = a+b
  d = a-b
  return c, d

# (c, d)
```

아래는 간단한 소수 판별 알고리즘을 함수로 작성한 것이다.

```python
def isPrime(x):
  for i in range(2, x):
    if x%i == 0:
      return False
  return True

a = [12, 13, 7, 9, 19]
for y in a:
  if isPrime(y):
    print(y)
```

파이썬에는 람다함수라는 개념이 있는데, 이는 익명함수 혹은 람다 표현식으로도 불린다.
<br>그냥 함수와 람다함수의 차이는 다음과 같다.

```python
# 그냥 함수
def plus_one(x):
  return x+1

# 람다함수 (x: 인자, x+2: 리턴값)
plus_two = lambda x: x+2

print(plus_one(1)) #2
print(plus_two(1)) #3
```

얼핏 보면 그냥 함수를 써도 되는 것을 굳이 람다함수를 쓰는 이유가 있을까 싶지만, 람다함수는 내장함수의 인자로 편리하게 사용할 수 있다. 다음은 그냥 함수와 람다함수를 이용해서 리스트에 함수를 매핑하는 코드이다.
<br>
<br>여기서 map(a,b) 함수는 a 함수를 b 자료에 모두 적용시키는 기능을 가진다. 만약 a가 자료형이라면 b 자료를 a 자료형으로 모두 변환시킨다.

```python
# 그냥 함수
def plus_one(x):
  return x+1

a = [1,2,3]
print(list(map(plus_one, a))) # [2,3,4]


# 람다함수
a = [1,2,3]
print(list(map(lambda x: x+1, a))) # [2,3,4]
```
