import { describe, it, expect } from 'vitest';
import { search } from './index';

describe('搜索旋转排序数组', () => {
  it('nums = [4,5,6,7,0,1,2], target = 0', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2], target = 0

    expect(search(nums, target)).toEqual(4)
  })

  it('nums = [4,5,6,7,0,1,2], target = 3', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2], target = 3

    expect(search(nums, target)).toEqual(-1)
  })

  it('nums = [1], target = 0', () => {
    const nums = [1], target = 0

    expect(search(nums, target)).toEqual(-1)
  })
})
