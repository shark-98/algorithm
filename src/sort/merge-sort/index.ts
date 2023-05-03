import { checkQualified, SortRule } from "../index";

/**
 * 归并排序
 */
export const mergeSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const tempArr: number[] = []

  const base = (l: number, r: number) => {
    if (r - l <= 1) return

    const mid = Math.floor((r + l) / 2)

    base(l, mid)
    base(mid, r)

    let p1 = l, p2 = mid, k = 0
    while (p1 < mid || p2 < r) {
      if (p2 === r || (p1 < mid && checkQualified(arr[p1], arr[p2], rule))) {
        tempArr[k++] = arr[p1++]
      } else {
        tempArr[k++] = arr[p2++]
      }
    }

    for (let i = l; i < r; i++) {
      arr[i] = tempArr[i - l]
    }
  }

  base(0, arr.length)

  return arr
};
