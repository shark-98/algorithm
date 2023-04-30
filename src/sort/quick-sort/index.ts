
import { checkQualified, SortRule } from "../index";

/**
 * 快速排序
 */
export const quickSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const base = (arr: number[], l: number, r: number) => {
    if (r - l <= 1) return
    if (r - l === 2) {
      if (checkQualified(arr[l + 1], arr[l], rule)) {
        const temp = arr[l]
        arr[l] = arr[l + 1]
        arr[l + 1] = temp
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

/**
 * 快速排序-优化1（将头尾指针的依次修改值，改为头尾指针位置的值直接交换）
 */
export const quickSort1 = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const base = (arr: number[], l: number, r: number) => {
    if (r - l <= 1) return
    if (r - l === 2) {
      if (checkQualified(arr[l + 1], arr[l], rule)) {
        const temp = arr[l]
        arr[l] = arr[l + 1]
        arr[l + 1] = temp
      }
      return
    }

    const mid = arr[l]
    let x = l, y = r - 1
    while (x <= y) {
      while (checkQualified(arr[x], mid, rule)) ++x
      while (checkQualified(mid, arr[y], rule)) --y

      if (x <= y) {
        const temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
        ++x, --y
      }
    }

    base(arr, l, x)
    base(arr, x, r)
  }

  base(arr, 0, arr.length)

  return arr
}

const threePointSelect = (a: number, b: number, c: number) => {
  const arr = [a, b, c].sort((a, b) => a - b)

  return arr[1]
}

/**
 * 快速排序-优化2（修改基准值取值，三点取中法）
 */
export const quickSort2 = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {

  const base = (arr: number[], l: number, r: number) => {
    if (r - l <= 1) return
    if (r - l === 2) {
      if (checkQualified(arr[l + 1], arr[l], rule)) {
        const temp = arr[l]
        arr[l] = arr[l + 1]
        arr[l + 1] = temp
      }
      return
    }

    let x = l, y = r - 1
    const mid = threePointSelect(arr[x], arr[y], arr[parseInt(`${(l + r) / 2}`)])
    while (x <= y) {
      while (checkQualified(mid, arr[y], rule)) y--
      while (checkQualified(arr[x], mid, rule)) x++

      if (x <= y) {
        const temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
        x++, y--
      }
    }

    base(arr, l, x)
    base(arr, x, r)
  }

  base(arr, 0, arr.length)

  return arr
}

/**
 * 快速排序-优化3（减少递归调用，单边递归法）
 */
export const quickSort3 = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {

  const base = (arr: number[], l: number, r: number) => {
    if (r - l <= 1) return
    if (r - l === 2) {
      if (checkQualified(arr[l + 1], arr[l], rule)) {
        const temp = arr[l]
        arr[l] = arr[l + 1]
        arr[l + 1] = temp
      }
      return
    }

    while (l < r) {
      let x = l, y = r - 1
      const mid = threePointSelect(arr[x], arr[y], arr[parseInt(`${(l + r) / 2}`)])
      while (x <= y) {
        while (checkQualified(mid, arr[y], rule)) y--
        while (checkQualified(arr[x], mid, rule)) x++

        if (x <= y) {
          const temp = arr[x]
          arr[x] = arr[y]
          arr[y] = temp
          x++, y--
        }
      }

      base(arr, l, x)
      l = x
    }
  }

  base(arr, 0, arr.length)

  return arr
}

/**
 * 快速排序-优化4（快速排序+插入排序）
 */
export const quickSort4 = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const THRESHOLD = 16
  const unGuarderInsertSort = (arr: number[]): number[] => {
    const len = arr.length;

    let index = 0
    for (let i = 1; i < len; i++) {
      if (checkQualified(arr[i], arr[index], rule)) {
        index = i
      }
    }
    while (index > 0) {
      const temp = arr[index]
      arr[index] = arr[index - 1]
      arr[index - 1] = temp
      index--
    }

    for (let i = 1; i < len; i++) {
      let j = i
      while (checkQualified(arr[j], arr[j - 1], rule)) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
        j--
      }
    }

    return arr
  };

  const base = (arr: number[], l: number, r: number) => {
    while (r - l > THRESHOLD) {
      let x = l, y = r - 1
      const mid = threePointSelect(arr[x], arr[y], arr[parseInt(`${(l + r) / 2}`)])
      while (x <= y) {
        while (checkQualified(mid, arr[y], rule)) y--
        while (checkQualified(arr[x], mid, rule)) x++

        if (x <= y) {
          const temp = arr[x]
          arr[x] = arr[y]
          arr[y] = temp
          x++, y--
        }
      }

      base(arr, l, x)
      l = x
    }
  }

  base(arr, 0, arr.length)
  unGuarderInsertSort(arr)

  return arr
}
