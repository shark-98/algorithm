import { describe, it, expect } from 'vitest';
import { largestValsFromLabels } from './index';

describe('受标签影响的最大值', () => {
  it('values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1', () => {
    const values = [5, 4, 3, 2, 1], labels = [1, 1, 2, 2, 3], numWanted = 3, useLimit = 1

    const r = 9 // 选出的子集是第一项，第三项和第五项。
    expect(largestValsFromLabels(values, labels, numWanted, useLimit)).toBe(r)
  })

  it('values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2', () => {
    const values = [5, 4, 3, 2, 1], labels = [1, 3, 3, 3, 2], numWanted = 3, useLimit = 2

    const r = 12 // 选出的子集是第一项，第二项和第三项。
    expect(largestValsFromLabels(values, labels, numWanted, useLimit)).toBe(r)
  })

  it('values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1', () => {
    const values = [9, 8, 8, 7, 6], labels = [0, 0, 0, 1, 1], numWanted = 3, useLimit = 1

    const r = 16 // 选出的子集是第一项和第四项。
    expect(largestValsFromLabels(values, labels, numWanted, useLimit)).toBe(r)
  })

  it('values = [2,6,1,2,6], labels = [2,2,2,1,1], numWanted = 1, useLimit = 1', () => {
    const values = [2, 6, 1, 2, 6], labels = [2, 2, 2, 1, 1], numWanted = 1, useLimit = 1

    const r = 6 // 选出的子集是第一项
    expect(largestValsFromLabels(values, labels, numWanted, useLimit)).toBe(r)
  })
})
