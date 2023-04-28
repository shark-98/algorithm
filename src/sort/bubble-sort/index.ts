import { swap } from "../../shared";
import { checkQualified, SortRule } from "../index";

/**
 * 冒泡排序
 */
export const bubbleSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length;

  for (let i = len - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (checkQualified(arr[j + 1], arr[j], rule)) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}

/**
 * 冒泡排序优化
 */
export const bubbleSort2 = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length;

  for (let i = len - 1; i >= 1; i--) {
    let isOrderly = true
    for (let j = 0; j < i; j++) {
      if (checkQualified(arr[j + 1], arr[j], rule)) {
        swap(arr, j, j + 1)
        isOrderly = false
      }
    }

    if (isOrderly) {
      break
    }
  }

  return arr
}
