import { describe, it, expect } from 'vitest';
import { intersection } from './index';

describe('两个数组的交集', () => {
  it('nums1 = [1,2,2,1], nums2 = [2,2]', () => {
    const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
    const r = intersection(nums1, nums2)
    expect(r).toEqual([2])
  })

  it('nums1 = [4,9,5], nums2 = [9,4,9,8,4]', () => {
    const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
    const r = intersection(nums1, nums2)
    expect(r).toEqual([9, 4])
  })
})
