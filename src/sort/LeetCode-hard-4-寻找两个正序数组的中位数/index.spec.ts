import { describe, it, expect } from 'vitest';
import { findMedianSortedArrays } from './index';

describe('寻找两个正序数组的中位数', () => {
  it('nums1 = [1,3], nums2 = [2]', () => {
    const nums1 = [1, 3], nums2 = [2]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2)
  })

  it('nums1 = [1,2], nums2 = [3,4]', () => {
    const nums1 = [1, 2], nums2 = [3, 4]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5)
  })

  it('nums1 = [], nums2 = [1]', () => {
    const nums1 = [], nums2 = [1]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(1)
  })
})
