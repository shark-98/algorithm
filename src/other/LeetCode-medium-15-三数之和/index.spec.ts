import { describe, it, expect } from 'vitest';
import { threeSum } from './index';

describe('三数之和', () => {
  it('nums = [-1,0,1,2,-1,-4]', () => {
    const nums = [-1, 0, 1, 2, -1, -4]

    expect(threeSum(nums)).toEqual([[-1, -1, 2], [-1, 0, 1]])
  })

  it('nums = [0,1,1]', () => {
    const nums = [0, 1, 1]

    expect(threeSum(nums)).toEqual([])
  })

  it('nums = [0,0,0]', () => {
    const nums = [0, 0, 0]

    expect(threeSum(nums)).toEqual([[0, 0, 0]])
  })
})
