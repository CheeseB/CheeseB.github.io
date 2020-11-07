---
title: "[알고리즘] 뮤직비디오(결정알고리즘)"
categories:
- algorithm
tags:
- 알고리즘
- 파이썬
classes: wide
---


**문제 설명**
<br>
<br>지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
<br>DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다.
<br>순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
<br>지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다.
<br>이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
<br>
<br>**입력**
<br>
<br>첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다.
<br>다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다.
<br>부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.
<br>
<br>**출력**
<br>
<br>첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.
<br>
<br>파이썬으로 풀었고, 내 코드는 다음과 같다.

```python
def count(length):
    cnt = 1
    tot = 0
    for song in songs:
        tot += song
        if tot > length:
            tot = song
            cnt += 1

    return cnt


_, m = map(int, input().split())
songs = list(map(int, input().split()))
maxSong = max(songs)
lt = 1
rt = sum(songs)
res = 0

while lt <= rt:
    mid = (lt + rt) // 2
	# 한 곡이 잘리면 안되기 때문에
	# dvd용량이 노래 길이보단 무조건 커야함
    if mid >= maxSong and count(mid) <= m:
        res = mid
        rt = mid - 1
    else:
        lt = mid + 1

print(res)

```

푸는 방식은 이전의 랜선 자르기 문제와 비슷하다. 다른점은 count함수 정도이다.