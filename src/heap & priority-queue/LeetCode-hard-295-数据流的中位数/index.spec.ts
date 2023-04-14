import { describe, it, expect } from 'vitest';
import { MedianFinder } from './index';

describe('数据流的中位数', () => {
  it('1', () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(1);

    medianFinder.addNum(2);

    const num1 = medianFinder.findMedian(); // [1, 2]
    expect(num1).toBe(1.5)

    medianFinder.addNum(3);

    const num2 = medianFinder.findMedian(); // [1, 2, 3]
    expect(num2).toBe(2.0)
  })

  it('2', () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(6);
    const num1 = medianFinder.findMedian(); // [6]
    expect(num1).toBe(6)

    medianFinder.addNum(10);
    const num2 = medianFinder.findMedian(); // [6, 10]
    expect(num2).toBe(8)

    medianFinder.addNum(2);
    const num3 = medianFinder.findMedian(); // [2, 6, 10]
    expect(num3).toBe(6)

    medianFinder.addNum(6);
    const num4 = medianFinder.findMedian(); // [2, 6, 6, 10]
    expect(num4).toBe(6)

    medianFinder.addNum(5);
    const num5 = medianFinder.findMedian(); // [2, 5, 6, 6, 10]
    expect(num5).toBe(6)

    medianFinder.addNum(0);
    const num6 = medianFinder.findMedian(); // [0, 2, 5, 6, 6, 10]
    expect(num6).toBe(5.5)

    medianFinder.addNum(6);
    const num7 = medianFinder.findMedian(); // [0, 2, 5, 6, 6, 6, 10]
    expect(num7).toBe(6)

    medianFinder.addNum(3);
    const num8 = medianFinder.findMedian(); // [0, 2, 3, 5, 6, 6, 6, 10]
    expect(num8).toBe(5.5)

    medianFinder.addNum(1);
    const num9 = medianFinder.findMedian(); // [0, 1, 2, 3, 5, 6, 6, 6, 10]
    expect(num9).toBe(5)

    medianFinder.addNum(0);
    const num10 = medianFinder.findMedian(); // [0, 0, 1, 2, 3, 5, 6, 6, 6, 10]
    expect(num10).toBe(4)

    medianFinder.addNum(0);
    const num11 = medianFinder.findMedian(); // [0, 0, 0, 1, 2, 3, 5, 6, 6, 6, 10]
    expect(num11).toBe(3)
  })
})
