import { describe, it, expect } from 'vitest';
import { containsNearbyDuplicate } from './index';

describe('存在重复元素 II', () => {
  it('nums = [1,2,3,1], k = 3', () => {
    const nums = [1, 2, 3, 1], k = 3
    expect(containsNearbyDuplicate(nums, k)).toBe(true)
  })

  it('nums = [1,0,1,1], k = 1', () => {
    const nums = [1, 0, 1, 1], k = 1
    expect(containsNearbyDuplicate(nums, k)).toBe(true)
  })

  it('nums = [1,2,3,1,2,3], k = 2', () => {
    const nums = [1, 2, 3, 1, 2, 3], k = 2
    expect(containsNearbyDuplicate(nums, k)).toBe(false)
  })

  it('nums = [4,1,2,3,1,5], k = 3', () => {
    const nums = [4, 1, 2, 3, 1, 5], k = 3
    expect(containsNearbyDuplicate(nums, k)).toBe(true)
  })
})
