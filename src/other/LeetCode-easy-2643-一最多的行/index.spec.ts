import { describe, it, expect } from 'vitest';
import { rowAndMaximumOnes } from './index';

describe('一最多的行', () => {
  it('[[0,1],[1,0]]', () => {
    const r = rowAndMaximumOnes([[0, 1], [1, 0]])
    expect(r).toEqual([0, 1])
  })

  it('[[0,0,0],[0,1,1]]', () => {
    const r = rowAndMaximumOnes([[0, 0, 0], [0, 1, 1]])
    expect(r).toEqual([1, 2])
  })

  it('[[0,0],[1,1],[0,0]]', () => {
    const r = rowAndMaximumOnes([[0, 0], [1, 1], [0, 0]])
    expect(r).toEqual([1, 2])
  })
})
