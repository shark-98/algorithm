import { describe, it, expect } from 'vitest';
import { equalPairs } from './index';

describe('相等行列对', () => {
  it('[[3,2,1],[1,7,6],[2,7,7]]', () => {
    const v = equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]])
    expect(v).toEqual(1)
  })

  it('[[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]', () => {
    const v = equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]])
    expect(v).toEqual(3)
  })

  it('[[13,13],[13,13]]', () => {
    const v = equalPairs([[13, 13], [13, 13]])
    expect(v).toEqual(4)
  })

  it('[[11,1],[1,11]]', () => {
    const v = equalPairs([[11, 1], [1, 11]])
    expect(v).toEqual(2)
  })
})
