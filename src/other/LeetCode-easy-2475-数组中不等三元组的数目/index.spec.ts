import { describe, it, expect } from 'vitest';
import { unequalTriplets } from './index';

describe('数组中不等三元组的数目', () => {
  it('[4,4,2,4,3]', () => {
    const r = unequalTriplets([4, 4, 2, 4, 3])
    expect(r).toBe(3)
  })

  it('[1,1,1,1,1]', () => {
    const r = unequalTriplets([1, 1, 1, 1, 1])
    expect(r).toBe(0)
  })
})
