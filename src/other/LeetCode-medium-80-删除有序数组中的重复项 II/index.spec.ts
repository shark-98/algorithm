import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './index';

describe('删除有序数组中的重复项 II', () => {
  it('nums = [1,1,1,2,2,3]', () => {
    const nums = [1, 1, 1, 2, 2, 3]
    const len = removeDuplicates(nums)
    expect(len).toBe(5)
    expect(nums.slice(0, len)).toEqual([1, 1, 2, 2, 3])
  })

  it('nums = [0,0,1,1,1,1,2,3,3]', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    const len = removeDuplicates(nums)
    expect(len).toBe(7)
    expect(nums.slice(0, len)).toEqual([0, 0, 1, 1, 2, 3, 3])
  })

  it('nums = [0,0,0,0,0]', () => {
    const nums = [0, 0, 0, 0, 0]
    const len = removeDuplicates(nums)
    expect(len).toBe(2)
    expect(nums.slice(0, len)).toEqual([0, 0])
  })
})
