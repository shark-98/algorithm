import { describe, it, expect } from 'vitest';
import { searchMatrix } from './index';

describe('搜索二维矩阵', () => {
  it('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
    expect(searchMatrix(matrix, target)).toBe(true)
  })

  it('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
    expect(searchMatrix(matrix, target)).toBe(false)
  })

  it('matrix = [[1]], target = 0', () => {
    const matrix = [[1]], target = 0
    expect(searchMatrix(matrix, target)).toBe(false)
  })

  it('matrix = [[1]], target = 2', () => {
    const matrix = [[1]], target = 2
    expect(searchMatrix(matrix, target)).toBe(false)
  })

  it('matrix = [[1,3]], target = 3', () => {
    const matrix = [[1, 3]], target = 3
    expect(searchMatrix(matrix, target)).toBe(true)
  })
})
