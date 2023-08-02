---
date: '2023-08-02'
title: '코딩테스트 문제풀기 팁'
categories: ['Algorithm']
summary: '문제 유형에 따라서 필요한 자료구조 / 알고리즘 간단정리'
thumbnail: '../images/thumbnail/algorithm.webp'
---

## 문제 유형별 풀이방식

#### 주어진 입력이 정렬된 배열 또는 리스트인 경우

- [Binary Search](https://velog.io/@kimdukbae/%EC%9D%B4%EB%B6%84-%ED%83%90%EC%83%89-%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89-Binary-Search)
- [Two Pointer](https://code-lab1.tistory.com/276)


#### 'N'개의 요소들 중에서 상위/최대/최소 'K' 번째 요소를 찾을 때

- [Heap](https://code-lab1.tistory.com/12)

#### 배열에 관련된 문제일 경우

- 시간 복잡도 O(n), 공간 복잡도 O(n)
	- [HashMap](https://velog.io/@jun094/Hash%EC%99%80-Map)
	- [Set](https://www.daleseo.com/js-set/)
- 시간 복잡도 O(nlogn), 공간 복잡도 O(1)
	- [정렬](https://velog.io/@kimdukbae/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Sorting-Algorithm)

#### 모든 조합(또는 순열)을 시도해야 할 경우

- [Backtracking](https://blog.encrypted.gg/945)
- BFS

#### 문제가 최적화(최대화 또는 최소화)를 요구하는 경우

- [DP](https://blog.encrypted.gg/974)

#### 문제가 리스트와 관련 있고, 추가적인 공간을 사용할 수 없는 경우

- [Fast & Slow Pointer 접근 방식](https://velog.io/@changhee09/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%9F%B0%EB%84%88-%EA%B8%B0%EB%B2%95)

#### 트리 또는 그래프 문제

- [BFS](https://blog.encrypted.gg/941)
- [DFS](https://blog.encrypted.gg/942)

#### 문자열 집합에서 공통부분 문자열을 찾아야 하는 경우

- HashMap
- [Trie](https://rebro.kr/86)

#### 문자열의 검색/조작

- Trie

#### 기타

- 모든 재귀 해결법은 Stack을 이용한 방법으로 전환할 수 있음