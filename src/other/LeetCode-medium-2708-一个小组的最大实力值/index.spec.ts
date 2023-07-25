import { describe, it, expect } from 'vitest';
import { maxStrength } from './index';

describe('一个小组的最大实力值', () => {
  it('[3,-1,-5,2,5,-9]', () => {
    const nums = [3, -1, -5, 2, 5, -9]

    expect(maxStrength(nums)).toEqual(1350)
  })

  it('[-4,-5,-4]', () => {
    const nums = [-4, -5, -4]

    expect(maxStrength(nums)).toEqual(20)
  })

  it('[-2,-3,8,9]', () => {
    const nums = [-2, -3, 8, 9]

    expect(maxStrength(nums)).toEqual(432)
  })

  it('[0,-1]', () => {
    const nums = [0, -1]

    expect(maxStrength(nums)).toEqual(0)
  })

  it('[-9]', () => {
    const nums = [-9]

    expect(maxStrength(nums)).toEqual(-9)
  })
})
