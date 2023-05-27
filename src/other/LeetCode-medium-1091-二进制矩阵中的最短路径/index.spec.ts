import { describe, it, expect } from 'vitest';
import { shortestPathBinaryMatrix } from './index';

describe('二进制矩阵中的最短路径', () => {
  it('[[0,1],[1,0]]', () => {
    const r = shortestPathBinaryMatrix([[0, 1], [1, 0]])
    expect(r).toBe(2)
  })

  it('[[0,0,0],[1,1,0],[1,1,0]]', () => {
    const r = shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]])
    expect(r).toBe(4)
  })

  it('[[1,0,0],[1,1,0],[1,1,0]]', () => {
    const r = shortestPathBinaryMatrix([[1, 0, 0], [1, 1, 0], [1, 1, 0]])
    expect(r).toBe(-1)
  })
})
