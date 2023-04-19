import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('序列M小和', () => {
  it('n = 2, m = 3', () => {
    const n = 2, m = 3;
    const arr = [
      [1, 2, 3],
      [2, 2, 3]
    ]

    expect(fn(n, m, arr)).toEqual([3, 3, 4]) // 1+2, 1+2, 2+2
  })

  it('n = 3, m = 5', () => {
    const n = 3, m = 5;
    const arr = [
      [1, 13, 8, 4, 9],
      [12, 6, 10, 7, 5],
      [2, 14, 11, 15, 3],
    ]

    expect(fn(n, m, arr)).toEqual([3, 4, 6, 6, 7]) // 1+2, 1+3, 1+5, 4+2, 1+6
  })
})
