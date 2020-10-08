---
title: "[파이썬] 문자열 내장 함수"
categories:
- python
tags:
- python
- 파이썬
classes: wide
---


upper - 전부 대문자로 만들기

```python
msg = "Hello World"
print(msg.upper()) # HELLO WORLD

print(msg) # Hello World
# 문자열 함수는 문자열에 함수 처리를 한 결과를 리턴할 뿐, 원본 문자열 자체를 바꾸진 않는다
```

lower - 전부 소문자로 만들기

```python
print(msg.lower()) # hello world
```

find - 주어진 단어가 나오는 가장 첫 인덱스를 리턴

```python
print(msg.find('l')) # 2
```

count - 주어진 단어가 나오는 개수를 리턴

```python
print(msg.count('l')) # 3
```

[start:end] - 문자열의 start인덱스부터 end-1 인덱스까지 슬라이스

```python
print(msg[1:4]) # ell
print(msg[:3]) # Hel
print(msg[8:]) # rld
```

len - 문자열의 길이 리턴

```python
print(len(msg)) # 11
```

isupper - 문자가 대문자인지 확인

```python
# 이렇게 for문을 쓰면 msg문자열의 문자 하나하나씩 접근 가능
for x in msg:
    if x.isupper():
        print(x) # HW
```

islower - 문자가 소문자인지 확인

```python
for x in msg:
    if x.islower():
        print(x) # elloorld
```

isalpha - 문자가 알파벳인지 확인

```python
for x in msg:
    if x.isalpha():
        print(x) # HelloWorld
```

ord - 문자의 아스키 값 리턴

```python
tmp = 'A'
print(ord(tmp)) # 65
```

chr - 아스키 값에 해당하는 문자 리턴

```python
tmp = 65
print(chr(tmp)) # A
```