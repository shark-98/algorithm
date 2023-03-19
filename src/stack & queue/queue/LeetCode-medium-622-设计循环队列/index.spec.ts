import { describe, it, expect } from 'vitest';
import { MyCircularQueue } from '.';

describe('设计循环队列', () => {
  it('1', () => {
    const circularQueue = new MyCircularQueue(3); // 设置长度为 3

    const isAddSuccess = circularQueue.enQueue(1);  // 返回 true
    expect(isAddSuccess).toBe(true)
    expect(circularQueue.data).toEqual([1])

    const isAddSuccess1 = circularQueue.enQueue(2);  // 返回 true
    expect(isAddSuccess1).toBe(true)
    expect(circularQueue.data).toEqual([1, 2])

    const isAddSuccess2 = circularQueue.enQueue(3);  // 返回 true
    expect(isAddSuccess2).toBe(true)
    expect(circularQueue.data).toEqual([1, 2, 3])

    const isAddSuccess3 = circularQueue.enQueue(4);  // 返回 false，队列已满
    expect(isAddSuccess3).toBe(false)
    expect(circularQueue.data).toEqual([1, 2, 3])

    const getTail = circularQueue.Rear();  // 返回 3
    expect(getTail).toBe(3)

    const isFull = circularQueue.isFull();  // 返回 true
    expect(isFull).toBe(true)

    const isDelSuccess = circularQueue.deQueue();  // 返回 true
    expect(isDelSuccess).toBe(true)
    expect(circularQueue.data).toEqual([2, 3])

    const isAddSuccess4 = circularQueue.enQueue(4);  // 返回 true
    expect(isAddSuccess4).toBe(true)
    expect(circularQueue.data).toEqual([2, 3, 4])

    const getTail1 = circularQueue.Rear();  // 返回 4
    expect(getTail1).toBe(4)
  })

  it('2', () => {
    const circularQueue = new MyCircularQueue(2);

    circularQueue.enQueue(1)
    expect(circularQueue.data).toEqual([1])

    circularQueue.enQueue(2)
    expect(circularQueue.data).toEqual([1, 2])

    circularQueue.deQueue()
    expect(circularQueue.data).toEqual([2])

    circularQueue.enQueue(3)
    expect(circularQueue.data).toEqual([2, 3])

    circularQueue.deQueue()
    expect(circularQueue.data).toEqual([3])

    circularQueue.enQueue(4)
    expect(circularQueue.data).toEqual([3, 4])

    circularQueue.deQueue()
    expect(circularQueue.data).toEqual([4])

    circularQueue.enQueue(5)
    expect(circularQueue.data).toEqual([4, 5])

    circularQueue.deQueue()
    expect(circularQueue.data).toEqual([5])

    const front = circularQueue.Front()
    expect(front).toBe(5)
  })
})
