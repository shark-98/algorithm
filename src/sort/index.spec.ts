import { describe, it, expect } from 'vitest';
import { cloneDeep, getExpendTime, getRandomArrCached } from '../shared';
import { checkOrderedSequence, SortRule } from './index';
import { insertSort, unGuarderInsertSort } from './insert-sort';
import { selectionSort } from './selection-sort';
import { shellSort, shellSortHibbard } from './shell-sort';

describe('比较相同的n个数组元素，各排序算法执行的时间', () => {
  const rule = SortRule.ASC
  const mockArr = getRandomArrCached(5000)
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
})
