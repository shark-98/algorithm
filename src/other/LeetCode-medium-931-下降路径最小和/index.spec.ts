import { describe, it, expect } from 'vitest';
import { minFallingPathSum } from './index';

describe('下降路径最小和', () => {
  it('matrix = [[2,1,3],[6,5,4],[7,8,9]]', () => {
    const matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]]

    expect(minFallingPathSum(matrix)).toBe(13)
  })

  it('matrix = [[-19,57],[-40,-5]]', () => {
    const matrix = [[-19, 57], [-40, -5]]

    expect(minFallingPathSum(matrix)).toBe(-59)
  })

  it('matrix = [[100,-42,-46,-41],[31,97,10,-10],[-58,-51,82,89],[51,81,69,-51]]', () => {
    const matrix = [[100, -42, -46, -41], [31, 97, 10, -10], [-58, -51, 82, 89], [51, 81, 69, -51]]

    expect(minFallingPathSum(matrix)).toBe(-36)
  })

  it('matrix = [[-51,-35,74],[-62,14,-53],[94,61,-10]]', () => {
    const matrix = [[-51, -35, 74], [-62, 14, -53], [94, 61, -10]]

    expect(minFallingPathSum(matrix)).toBe(-98)
  })
})
