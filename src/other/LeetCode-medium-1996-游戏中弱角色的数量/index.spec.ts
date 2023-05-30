import { describe, it, expect } from 'vitest';
import { numberOfWeakCharacters } from './index';

describe('游戏中弱角色的数量', () => {
  it('[[5,5],[6,3],[3,6]]', () => {
    const r = numberOfWeakCharacters([[5, 5], [6, 3], [3, 6]])
    expect(r).toBe(0)
  })

  it('[[2,2],[3,3]]', () => {
    const r = numberOfWeakCharacters([[2, 2], [3, 3]])
    expect(r).toBe(1)
  })

  it('[[1,5],[10,4],[4,3]]', () => {
    const r = numberOfWeakCharacters([[1, 5], [10, 4], [4, 3]])
    expect(r).toBe(1)
  })

  it('[[7,7],[1,2],[9,7],[7,3],[3,10],[9,8],[8,10],[4,3],[1,5],[1,5]]', () => {
    const r = numberOfWeakCharacters([[7, 7], [1, 2], [9, 7], [7, 3], [3, 10], [9, 8], [8, 10], [4, 3], [1, 5], [1, 5]])
    expect(r).toBe(6)
  })

  // 7,7 - 9,8
  // 1,2 - 7,7
  // 9,7 - null
  // 7,3 - 9,7
  // 3,10 - null
  // 9,8 - null
  // 8,10 - null
  // 4,3 - 7,7
  // 1,5 - 7,7
  // 1,5 - 7,7
})
