---
date: '2023-03-21'
title: 'Typescript 로 원형 Queue 구현하기'
categories: ['Typescript', '자료구조']
summary: '백준 BFS 문제 풀려고 큐까지 구현해버렸다'
thumbnail: './thumbnail/typescript.jpg'
---

## 타입스크립트로 직접 만들어본 원형 큐

타입스크립트로 BFS 알고리즘 문제를 푸는데 계속 시간초과가 떠서<br/>
뭐가 문제인가 했더니 자바스크립트의 shift() 메서드가 매우 느려서 그런거였다..<br/>
BFS를 구현하기 위해선 큐가 필요하지만 자바스크립트엔 큐가 없으니 그냥 배열에서 push()와 shift()로 큐처럼 썼지만,<br/>
아무래도 shift() 가 배열의 맨 앞 요소를 꺼내고 뒤 요소들을 전부 앞으로 미는 것이다 보니 느릴 수 밖에 없었다.<br/>
결국 큐 자료구조를 직접 구현해야만 했고, 어차피 앞으로 BFS 문제들을 더 풀게 될 테니 아예 그냥 클래스로 만들어버려야겠다는 생각을 했다.<br/>

---

### 구현 코드

```typescript
interface IQueue<T> {
  queue: (T | undefined)[];
  length: number;
  head: number;
  tail: number;

  enqueue(element: T): void;
  dequeue(): T;
  isFull(): boolean;
  isEmpty(): boolean;
  show(): void;
}

class Queue<T> implements IQueue<T> {
  queue: (T | undefined)[];
  length: number;
  head: number;
  tail: number;

  constructor(length: number) {
    this.queue = new Array(length).fill(undefined);
    this.length = length;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: T) {
    if (this.isFull()) throw new Error('queue is full!');
    this.queue[this.tail] = element;
    this.tail = (this.tail + 1) % this.length;
  }

  dequeue(): T {
    if (this.isEmpty()) throw new Error('queue is empty!');
    const value: T = this.queue[this.head]!;
    this.queue[this.head] = undefined;
    this.head = (this.head + 1) % this.length;
    return value;
  }

  isFull(): boolean {
    return this.head === this.tail && this.queue[this.tail] !== undefined;
  }

  isEmpty(): boolean {
    return this.queue[this.head] === undefined;
  }

  show() {
    console.log(this.queue);
  }
}
```
