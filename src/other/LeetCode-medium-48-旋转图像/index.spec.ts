import { describe, it, expect } from 'vitest';
import { rotate } from './index';

const test = (matrix: number[][], s: number[][]) => {
  return () => {
    rotate(matrix)
    expect(matrix).toEqual(s)
  }
}

describe('旋转图像', () => {
  it('[[1,2,3],[4,5,6],[7,8,9]]', test([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[7, 4, 1], [8, 5, 2], [9, 6, 3]]))

  it('[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]', test([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]], [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]))
})
