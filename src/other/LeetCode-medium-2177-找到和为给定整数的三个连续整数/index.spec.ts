import { describe, it, expect } from 'vitest';
import { sumOfThree } from './index';

const test = (num: number, s: number[]) => {
  return () => {
    const r = sumOfThree(num)
    expect(r).toEqual(s)
  }
}

describe('找到和为给定整数的三个连续整数', () => {
  it('33', test(33, [10, 11, 12]))

  it('4', test(4, []))
})
