import { describe, it, expect } from 'vitest';
import { SortRule } from '../index';
import { quickSort } from './index';

describe('快速排序', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const arr = quickSort([2, 1], rule)
      expect(arr).toEqual([1, 2])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([1, 2, 4, 5, 7])
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const arr = quickSort([2, 1], rule)
      expect(arr).toEqual([2, 1])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([7, 5, 4, 2, 1])
    })
  })
})
