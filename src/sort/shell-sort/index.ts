import { swap } from "../../shared";
import { checkQualified, SortRule } from "../index";

/**
 * 希尔排序
 */
export const shellSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length
  let group = 2
  let step = 0

  do {
    step = parseInt(`${len / group}`) === 0 ? 1 : parseInt(`${len / group}`)
    for (let i = 0, n = i + step; i < n; i++) {
      unGuarderInsertSort(arr, rule, i, step)
    }
    group *= 2
  } while (step !== 1);

  return arr
};

/**
 * 希尔排序-Hibbard增量序列
 */
export const shellSortHibbard = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length
  let step = 1
  while (step <= parseInt(`${len / 2}`)) step = step * 2 + 1

  do {
    step = parseInt(`${step / 2}`)
    for (let i = 0, n = i + step; i < n; i++) {
      unGuarderInsertSort(arr, rule, i, step)
    }
  } while (step !== 1);

  return arr
};

const unGuarderInsertSort = (arr: number[], rule: SortRule, i: number, step: number) => {
  const len = arr.length

  let k = i
  for (let j = i + step; j < len; j += step) {
    if (checkQualified(arr[j], arr[k], rule)) k = j
  }
  while (k > i) {
    swap(arr, k, k - step)
    k -= step
  }

  for (let j = i + step * 2; j < len; j += step) {
    let x = j
    while (checkQualified(arr[x], arr[x - step], rule)) {
      swap(arr, x, x - step)
      x -= step
    }
  }
}
