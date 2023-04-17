import { describe, it, expect } from 'vitest';
import { nthUglyNumber } from './index';

describe('丑数 II', () => {
  it('1', () => {
    const n = 1
    expect(nthUglyNumber(n)).toBe(1)
  })

  it('10', () => {
    const n = 10
    expect(nthUglyNumber(n)).toBe(12)
  })

  it('11', () => {
    const n = 11
    expect(nthUglyNumber(n)).toBe(15)
  })

  it('217', () => {
    const n = 217
    expect(nthUglyNumber(n)).toBe(21870)
  })
})
