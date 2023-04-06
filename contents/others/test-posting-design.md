---
date: '2023-03-28'
title: '마크다운 문법 모음집'
categories: ['Others']
summary: '블로그 포스팅 디자인하려고 올린 게시글'
thumbnail: '../images/thumbnail/cheeseball.png'
---

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.

1. 첫번째
	1. 첫번째 안의 첫번째
	2. 첫번째 안의 두번째
2. 두번째
3. 세번째

- 빨강
  - 녹색
    - 파랑

* 1단계
  - 2단계
    + 3단계
      + 4단계

```typescript
interface IQueue<T> {
  queue: T[];
  head: number;
  tail: number;

  enqueue(element: T): void;
  dequeue(): T;
  isEmpty(): boolean;
}

class Queue<T> implements IQueue<T> {
  queue: T[];
  head: number;
  tail: number;

  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: T) {
    this.queue[this.tail] = element;
    this.tail += 1;
  }

  dequeue(): T {
    if (this.isEmpty()) throw new Error('queue is empty!');
    this.head += 1;
    return this.queue[this.head - 1]!;
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }
}
```

*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~

이건 줄바꿈 안한 문장

줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.   
이렇게

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.   
  이렇게

![](./images/content/2023-03-29-14-49-13.png)

이미지

---

참고 게시글: [<https://gist.github.com/ihoneymon/652be052a0727ad59601>](https://gist.github.com/ihoneymon/652be052a0727ad59601)