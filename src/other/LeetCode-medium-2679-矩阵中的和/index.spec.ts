import { describe, it, expect } from 'vitest';
import { matrixSum } from './index';

describe('矩阵中的和', () => {
  it('nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]', () => {
    const nums = [[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]]

    expect(matrixSum(nums)).toEqual(15)
  })

  it('nums = [[1]]', () => {
    const nums = [[1]]

    expect(matrixSum(nums)).toEqual(1)
  })
})
