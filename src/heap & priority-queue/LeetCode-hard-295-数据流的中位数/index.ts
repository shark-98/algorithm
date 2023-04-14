import { HeapType, priorityQueue } from "../priority-queue";

// 结果没问题，但leetcode会报超时
export class MedianFinder1 {
  data: number[];

  constructor() {
    this.data = []
  }

  addNum(num: number): void {
    this.data.push(num)
  }

  findMedian(): number {
    this.data.sort((a, b) => a - b)
    const middleIndex = this.data.length / 2

    if (middleIndex % 1 === 0) {
      return (this.data[middleIndex - 1] + this.data[middleIndex]) / 2
    } else {
      return this.data[parseInt(String(middleIndex))]
    }
  }
}

export class MedianFinder {
  heap1: priorityQueue;
  heap2: priorityQueue;

  constructor() {
    this.heap1 = new priorityQueue(Infinity, HeapType.Max)
    this.heap2 = new priorityQueue(Infinity, HeapType.Min)
    // 设定：总数量n为偶数时，heap1数量为n/2，heap2数量为n/2；
    //      总数量n为奇数时，heap1数量为(n+1)/2，heap2数量为(n-1)/2；
  }

  addNum(num: number): void {
    if (this.heap1.count === 0 || (num < this.heap1.top())) {
      this.heap1.push(num)
    } else {
      this.heap2.push(num)
    }

    const expectHeap1Num = parseInt(`${(this.heap1.count + this.heap2.count + 1) / 2}`)
    if (this.heap1.count === expectHeap1Num) return
    if (this.heap1.count < expectHeap1Num) {
      const val = this.heap2.top()
      this.heap1.push(val)
      this.heap2.pop()
    } else {
      const val = this.heap1.top()
      this.heap2.push(val)
      this.heap1.pop()
    }
  }

  findMedian(): number {
    if (this.heap1.count === this.heap2.count) return (this.heap1.top() + this.heap2.top()) / 2

    return this.heap1.top()
  }
}
