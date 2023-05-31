import { describe, it, expect } from 'vitest';
import { onesMinusZeros } from './index';

describe('行和列中一和零的差值', () => {
  it('[[0,1,1],[1,0,1],[0,0,1]]', () => {
    const r = [[0, 0, 4], [0, 0, 4], [-2, -2, 2]]
    expect(onesMinusZeros([[0, 1, 1], [1, 0, 1], [0, 0, 1]])).toEqual(r)
  })

  it('[[1,1,1],[1,1,1]]', () => {
    const r = [[5, 5, 5], [5, 5, 5]]
    expect(onesMinusZeros([[1, 1, 1], [1, 1, 1]])).toEqual(r)
  })
})
