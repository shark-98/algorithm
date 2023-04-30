import { describe, it, expect } from 'vitest';
import { cloneDeep, getExpendTime, getRandomArrCached } from '../shared';
import { checkOrderedSequence, SortRule } from './index';
import { insertSort, unGuarderInsertSort } from './insert-sort';
import { selectionSort } from './selection-sort';
import { shellSort, shellSortHibbard } from './shell-sort';
import { bubbleSort, bubbleSort2 } from './bubble-sort';
import { quickSort, quickSort1, quickSort2, quickSort3, quickSort4 } from './quick-sort';

const n = 5000
const rule = SortRule.ASC

const todo = (mockArr: number[], rule: SortRule) => {
  return () => {
    const testFn = (fn: Function, name: string) => {
      const { arr, expendTime } = getExpendTime(() => fn(cloneDeep(mockArr), rule))
      console.log(`${name}——`, expendTime);
      expect(checkOrderedSequence(arr, rule)).toBe(true)
    }


    it('选择排序', () => {
      testFn(selectionSort, '选择排序')
    })

    it('插入排序', () => {
      testFn(insertSort, '插入排序')
    })

    it('无监督的插入排序', () => {
      testFn(unGuarderInsertSort, '无监督的插入排序')
    })

    it('希尔排序', () => {
      testFn(shellSort, '希尔排序')
    })

    it('希尔排序-Hibbard增量序列', () => {
      testFn(shellSortHibbard, '希尔排序-Hibbard增量序列')
    })

    it('冒泡排序', () => {
      testFn(bubbleSort, '冒泡排序')
    })
    it('冒泡排序优化', () => {
      testFn(bubbleSort2, '冒泡排序优化')
    })

    it('快速排序', () => {
      testFn(quickSort, '快速排序')
    })
    it('快速排序-优化1', () => {
      testFn(quickSort1, '快速排序-优化1')
    })
    it('快速排序-优化2', () => {
      testFn(quickSort2, '快速排序-优化2')
    })
    it('快速排序-优化3', () => {
      testFn(quickSort3, '快速排序-优化3')
    })
    it('快速排序-优化4', () => {
      testFn(quickSort4, '快速排序-优化4')
    })
  }
}

describe(`比较相同的${n}个随机数组元素，各排序算法执行的时间`, todo(getRandomArrCached(n), rule))

describe(`比较相同的${n}个有序数组元素，各排序算法执行的时间`, todo(Array.from({ length: n }, (_, i) => i), rule))
