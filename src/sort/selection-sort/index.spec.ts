import { describe, it, expect } from 'vitest';
import { cloneDeep, getExpendTime, getRandomArrCached } from '../../shared';
import { checkOrderedSequence, SortRule } from '../index';
import { selectionSort } from './index';

describe('选择排序', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const { arr, count, exchangeCount } = selectionSort([2, 1], rule)

      expect(arr).toEqual([1, 2])
      expect(count).toBe(1)
      expect(exchangeCount).toBe(1)
    })

    it('[2,1,5,7,4]', () => {
      const { arr, count, exchangeCount } = selectionSort([2, 1, 5, 7, 4], rule)

      expect(arr).toEqual([1, 2, 4, 5, 7])
      expect(count).toBe(10)
      expect(exchangeCount).toBe(3)
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const { arr, count, exchangeCount } = selectionSort([2, 1], rule)

      expect(arr).toEqual([2, 1])
      expect(count).toBe(1)
      expect(exchangeCount).toBe(0)
    })

    it('[2,1,5,7,4]', () => {
      const { arr, count, exchangeCount } = selectionSort([2, 1, 5, 7, 4], rule)

      expect(arr).toEqual([7, 5, 4, 2, 1])
      expect(count).toBe(10)
      expect(exchangeCount).toBe(3)
    })
  })

  describe('n个随机元素的数组，升序', () => {
    const rule = SortRule.ASC

    it('n=5000', () => {
      const mockArr = cloneDeep(getRandomArrCached(5000))

      const { res: { arr }, expendTime } = getExpendTime(() => selectionSort(mockArr, rule))
      // console.log(expendTime);
      expect(checkOrderedSequence(arr, rule)).toBe(true)
    })
  })
})
