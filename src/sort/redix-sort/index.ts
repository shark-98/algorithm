import { SortRule } from "../index";

/**
 * 基数排序
 */
export const radixSort = (arr: number[], rule: SortRule = SortRule.ASC): number[] => {
  const len = arr.length
  const radix = 65536

  let cnt: number[] = []
  let temp: number[] = []

  const getDigit = (val: number) => val % radix
  const getDecade = (val: number) => Math.floor(val / radix)

  const base = (fn: Function) => {
    cnt = new Array(radix).fill(0)
    for (let i = 0; i < len; i++) {
      const index = fn(arr[i])
      cnt[index]++
    }
    if (rule === SortRule.ASC) {
      for (let i = 1; i < cnt.length; i++) {
        cnt[i] += cnt[i - 1]
      }
    } else {
      for (let i = cnt.length - 2; i >= 0; i--) {
        cnt[i] += cnt[i + 1]
      }
    }

    temp = []
    for (let i = len - 1; i >= 0; i--) {
      const item = arr[i]
      temp[--cnt[fn(item)]] = item
    }
    arr = temp
  }

  base(getDigit)
  base(getDecade)

  return arr
};
