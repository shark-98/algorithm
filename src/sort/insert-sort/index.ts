import { swap } from "../../shared";
import { checkQualified, ReturnT, SortRule } from "../index";

/**
 * 插入排序
 */
export const insertSort = (arr: number[], rule: SortRule = SortRule.ASC): ReturnT => {
  let count = 0
  let exchangeCount = 0

  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let hit = 0

    let j = i
    while (j > 0 && checkQualified(arr[j], arr[j - 1], rule)) {
      hit++
      exchangeCount++
      swap(arr, j, j - 1)
      j--
    }

    count += hit || 1
  }

  return {
    arr,
    count,
    exchangeCount
  }
};
