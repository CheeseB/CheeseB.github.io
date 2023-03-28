---
date: '2023-03-28'
title: '[잡담] 마크다운 문법 모음집'
categories: ['잡담']
summary: '블로그 포스팅 디자인하려고 올린 게시글'
thumbnail: './thumbnail/cheeseball.jpg'
---

This is an H1
=============

This is an H2
-------------

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
2. 두번째
3. 세번째

* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

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

---

참고 게시글: [<https://gist.github.com/ihoneymon/652be052a0727ad59601>](https://gist.github.com/ihoneymon/652be052a0727ad59601)