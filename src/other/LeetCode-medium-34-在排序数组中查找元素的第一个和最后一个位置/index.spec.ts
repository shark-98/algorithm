import { describe, it, expect } from 'vitest';
import { searchRange } from './index';

describe('在排序数组中查找元素的第一个和最后一个位置', () => {
  it('nums = [5,7,7,8,8,10], target = 8', () => {
    const nums = [5, 7, 7, 8, 8, 10], target = 8

    expect(searchRange(nums, target)).toEqual([3, 4])
  })

  it('nums = [5,7,7,8,8,10], target = 6', () => {
    const nums = [5, 7, 7, 8, 8, 10], target = 6

    expect(searchRange(nums, target)).toEqual([-1, -1])
  })

  it('nums = [], target = 0', () => {
    const nums = [], target = 0

    expect(searchRange(nums, target)).toEqual([-1, -1])
  })
})
