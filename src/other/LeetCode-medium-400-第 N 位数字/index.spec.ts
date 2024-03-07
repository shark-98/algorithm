import { describe, it, expect } from 'vitest';
import { findNthDigit } from './index';

describe('第 N 位数字', () => {
  it('3', () => {
    expect(findNthDigit(3)).toBe(3)
  })

  it('11', () => {
    expect(findNthDigit(11)).toBe(0)
  })

  it('10000', () => {
    expect(findNthDigit(10000)).toBe(7)
  })
})
