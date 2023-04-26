import { swap } from "../../shared";
import { checkQualified, ReturnT, SortRule } from "../index";

/**
 * 选择排序
 */
export const selectionSort = (arr: number[], rule: SortRule = SortRule.ASC): ReturnT => {
  const len = arr.length;
  let count = 0
  let exchangeCount = 0

  for (let i = 0; i < len - 1; i++) {
    let index = i

    for (let j = i + 1; j < len; j++) {
      if (checkQualified(arr[j], arr[index], rule)) {
        index = j
      }
      count++
    }

    if (index !== i) {
      swap(arr, i, index)
      exchangeCount++
    }
  }

  return { arr, count, exchangeCount }
};
