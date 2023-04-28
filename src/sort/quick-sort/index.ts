
import { swap } from "../../shared";
import { checkQualified, SortRule } from "../index";

/**
 * 快速排序
 */
export const quickSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const base = (arr: number[], l: number, r: number) => {
    if (r - l <= 1) return
    if (r - l === 2) {
      if (checkQualified(arr[l + 1], arr[l], rule)) {
        swap(arr, l, l + 1)
      }
      return
    }

    const mid = arr[l]
    let x = l, y = r - 1
    while (x < y) {
      while (x < y && checkQualified(mid, arr[y], rule)) y--
      if (x < y) arr[x++] = arr[y]

      while (x < y && checkQualified(arr[x], mid, rule)) x++
      if (x < y) arr[y--] = arr[x]
    }

    arr[x] = mid
    base(arr, l, x)
    base(arr, x + 1, r)
  }

  base(arr, 0, arr.length)

  return arr
}


