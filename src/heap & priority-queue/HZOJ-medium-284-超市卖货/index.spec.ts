import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('超市卖货', () => {
  it('7', () => {
    const n = 7
    const arr = [
      { p: 2, d: 1 },
      { p: 20, d: 1 },
      { p: 10, d: 3 },
      { p: 100, d: 2 },
      { p: 8, d: 2 },
      { p: 5, d: 20 },
      { p: 50, d: 10 },
    ]

    expect(fn(n, arr)).toBe(185)
  })
})
