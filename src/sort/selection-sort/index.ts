import { swap } from "../../shared";
import { checkQualified, SortRule } from "../index";

/**
 * 选择排序
 */
export const selectionSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let index = i

    for (let j = i + 1; j < len; j++) {
      if (checkQualified(arr[j], arr[index], rule)) {
        index = j
      }
    }

    if (index !== i) {
      swap(arr, i, index)
    }
  }

  return arr
};
