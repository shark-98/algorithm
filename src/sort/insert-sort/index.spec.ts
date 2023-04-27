import { describe, it, expect } from 'vitest';
import { cloneDeep, getExpendTime, getRandomArrCached } from '../../shared';
import { checkOrderedSequence, SortRule } from '../index';
import { insertSort, insertSort2 } from './index';

const mockArr = cloneDeep(getRandomArrCached(5000))

describe('插入排序', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const { arr, count, exchangeCount } = insertSort([2, 1], rule)

      expect(arr).toEqual([1, 2])
      expect(count).toBe(1)
      expect(exchangeCount).toBe(1)
    })

    it('[2,1,5,7,4]', () => {
      const { arr, count, exchangeCount } = insertSort([2, 1, 5, 7, 4], rule)

      expect(arr).toEqual([1, 2, 4, 5, 7])
      expect(count).toBe(5)
      expect(exchangeCount).toBe(3)
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const { arr, count, exchangeCount } = insertSort([2, 1], rule)

      expect(arr).toEqual([2, 1])
      expect(count).toBe(1)
      expect(exchangeCount).toBe(0)
    })

    it('[2,1,5,7,4]', () => {
      const { arr, count, exchangeCount } = insertSort([2, 1, 5, 7, 4], rule)

      expect(arr).toEqual([7, 5, 4, 2, 1])
      expect(count).toBe(8)
      expect(exchangeCount).toBe(7)
    })
  })

  describe('n个随机元素的数组，升序', () => {
    const rule = SortRule.ASC

    it('n=5000', () => {
      const { res: { arr }, expendTime } = getExpendTime(() => insertSort(cloneDeep(mockArr), rule))
      // console.log(expendTime);
      expect(checkOrderedSequence(arr, rule)).toBe(true)
    })
  })
})

describe('无监督的插入排序', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const { arr, count, exchangeCount } = insertSort2([2, 1], rule)

      expect(arr).toEqual([1, 2])
      expect(count).toBe(3)
      expect(exchangeCount).toBe(1)
    })

    it('[2,1,5,7,4]', () => {
      const { arr, count, exchangeCount } = insertSort2([2, 1, 5, 7, 4], rule)

      expect(arr).toEqual([1, 2, 4, 5, 7])
      expect(count).toBe(11)
      expect(exchangeCount).toBe(7)
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const { arr, count, exchangeCount } = insertSort2([2, 1], rule)

      expect(arr).toEqual([2, 1])
      expect(count).toBe(1)
      expect(exchangeCount).toBe(0)
    })

    it('[2,1,5,7,4]', () => {
      const { arr, count, exchangeCount } = insertSort2([2, 1, 5, 7, 4], rule)

      expect(arr).toEqual([7, 5, 4, 2, 1])
      expect(count).toBe(11)
      expect(exchangeCount).toBe(7)
    })
  })

  describe('n个随机元素的数组，升序', () => {
    const rule = SortRule.ASC

    it('n=5000', () => {
      const { res: { arr }, expendTime } = getExpendTime(() => insertSort2(cloneDeep(mockArr), rule))
      // console.log(expendTime);
      expect(checkOrderedSequence(arr, rule)).toBe(true)
    })
  })
})
