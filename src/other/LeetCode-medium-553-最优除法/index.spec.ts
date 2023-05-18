import { describe, it, expect } from 'vitest';
import { optimalDivision } from './index';

const test = (nums: number[], s: string) => {
  return () => {
    const r = optimalDivision(nums)
    expect(r).toBe(s)
  }
}

describe('最优除法', () => {
  it('[1000,100,10,2]', test([1000, 100, 10, 2], "1000/(100/10/2)"))
  // 解释: 1000/(100/10/2) = 1000/((100/10)/2) = 200
  // 但是，以下加粗的括号 "1000/((100/10)/2)" 是冗余的，
  // 因为他们并不影响操作的优先级，所以你需要返回 "1000/(100/10/2)"。

  it('[2,3,4]', test([2, 3, 4], "2/(3/4)"))
})
