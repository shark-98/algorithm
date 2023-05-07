import { describe, it, expect } from 'vitest';
import { twoSum } from './index';

describe('两数之和', () => {
  it('nums = [2,7,11,15], target = 9', () => {
    const nums = [2, 7, 11, 15], target = 9
    expect(twoSum(nums, target)).toEqual([0, 1])
  })

  it('nums = [3,2,4], target = 6', () => {
    const nums = [3, 2, 4], target = 6
    expect(twoSum(nums, target)).toEqual([1, 2])
  })

  it('nums = [3,3], target = 6', () => {
    const nums = [3, 3], target = 6
    expect(twoSum(nums, target)).toEqual([0, 1])
  })
})
