import { describe, it, expect } from 'vitest';
import { subarrayLCM } from './index';

describe('最小公倍数为 K 的子数组数目', () => {
  it('nums = [3,6,2,7,1], k = 6', () => {
    const nums = [3, 6, 2, 7, 1], k = 6
    const v = subarrayLCM(nums, k)
    expect(v).toEqual(4)
  })

  it('nums = [3], k = 2', () => {
    const nums = [3], k = 2
    const v = subarrayLCM(nums, k)
    expect(v).toEqual(0)
  })

  it('nums = [5,1,1,1,2], k = 1', () => {
    const nums = [5, 1, 1, 1, 2], k = 1
    const v = subarrayLCM(nums, k)
    expect(v).toEqual(6)
  })
})
