import { describe, it, expect } from 'vitest';
import { searchInsert } from './index';

describe('搜索插入位置', () => {
  it('nums = [1,3,5,6], target = 5', () => {
    const nums = [1, 3, 5, 6], target = 5

    const r = searchInsert(nums, target)
    expect(r).toBe(2)
  })

  it('nums = [1,3,5,6], target = 2', () => {
    const nums = [1, 3, 5, 6], target = 2

    const r = searchInsert(nums, target)
    expect(r).toBe(1)
  })

  it('nums = [1,3,5,6], target = 7', () => {
    const nums = [1, 3, 5, 6], target = 7

    const r = searchInsert(nums, target)
    expect(r).toBe(4)
  })
})
