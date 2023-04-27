import { swap } from "../../shared";
import { checkQualified, SortRule } from "../index";

/**
 * 插入排序
 */
export const insertSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i

    while (j > 0 && checkQualified(arr[j], arr[j - 1], rule)) {
      swap(arr, j, j - 1)
      j--
    }
  }

  return arr
};

/**
 * 无监督的插入排序
 */
export const unGuarderInsertSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length;

  let index = 0
  for (let i = 1; i < len; i++) {
    if (checkQualified(arr[i], arr[index], rule)) {
      index = i
    }
  }
  while (index > 0) {
    swap(arr, index, index - 1)
    index--
  }

  for (let i = 1; i < len; i++) {
    let j = i
    while (checkQualified(arr[j], arr[j - 1], rule)) {
      swap(arr, j, j - 1)
      j--
    }
  }

  return arr
};
