import { describe, it, expect } from 'vitest';
import { priorityQueue } from './index';

describe('大顶堆优先队列', () => {
  it('easy', () => {
    const p = new priorityQueue(4)
    expect(p.data).toEqual([])
    expect(p.count).toBe(0)

    const isPopSuccess = p.pop()
    expect(isPopSuccess).toBe(false)
    expect(p.data).toEqual([])
    expect(p.count).toBe(0)

    p.push(3)
    expect(p.data).toEqual([3])
    expect(p.count).toBe(1)
    expect(p.top()).toBe(3)

    const isPopSuccess1 = p.pop()
    expect(isPopSuccess1).toBe(true)
    expect(p.data).toEqual([])
    expect(p.count).toBe(0)

    p.push(3)
    expect(p.data).toEqual([3])
    expect(p.count).toBe(1)
    expect(p.top()).toBe(3)

    p.push(4)
    expect(p.data).toEqual([4, 3])
    expect(p.count).toBe(2)
    expect(p.top()).toBe(4)

    p.push(1)
    expect(p.data).toEqual([4, 3, 1])
    expect(p.count).toBe(3)
    expect(p.top()).toBe(4)

    p.push(2)
    expect(p.data).toEqual([4, 3, 1, 2])
    expect(p.count).toBe(4)
    expect(p.top()).toBe(4)

    const isPushSuccess = p.push(9)
    expect(isPushSuccess).toBe(false)
    expect(p.data).toEqual([4, 3, 1, 2])
    expect(p.count).toBe(4)
    expect(p.top()).toBe(4)
  })
})
