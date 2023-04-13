import { describe, it, expect } from 'vitest';
import { KthLargest } from './index';

describe('数据流中的第 K 大元素', () => {
  it('1', () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.k).toBe(3)

    const num1 = kthLargest.add(3);
    expect(num1).toBe(4)

    const num2 = kthLargest.add(5);
    expect(num2).toBe(5)

    const num3 = kthLargest.add(10);
    expect(num3).toBe(5)

    const num4 = kthLargest.add(9);
    expect(num4).toBe(8)

    const num5 = kthLargest.add(4);
    expect(num5).toBe(8)
  })
  it('2', () => {
    const kthLargest = new KthLargest(3, [5, -1]);
    expect(kthLargest.k).toBe(3)

    const num1 = kthLargest.add(2);
    expect(num1).toBe(-1)

    const num2 = kthLargest.add(1);
    expect(num2).toBe(1)

    const num3 = kthLargest.add(-1);
    expect(num3).toBe(1)

    const num4 = kthLargest.add(3);
    expect(num4).toBe(2)

    const num5 = kthLargest.add(4);
    expect(num5).toBe(3)
  })
})
