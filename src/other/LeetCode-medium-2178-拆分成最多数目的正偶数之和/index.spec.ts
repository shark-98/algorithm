import { describe, it, expect } from 'vitest';
import { maximumEvenSplit } from './index';

const test = (num: number, s: number[]) => {
  return () => {
    const r = maximumEvenSplit(num)
    expect(r).toEqual(s)
  }
}

describe('拆分成最多数目的正偶数之和', () => {
  it('12', test(12, [2, 4, 6]))

  it('7', test(7, []))

  it('8', test(8, [2, 6]))

  it('28', test(28, [2, 4, 6, 16]))
})
