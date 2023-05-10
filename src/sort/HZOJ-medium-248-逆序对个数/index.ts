export const fn = (arr: number[]): number => {
  return case2(arr)
};

function case1(arr: number[]): number {
  const len = arr.length
  const arr1: number[] = []
  const hash = {}
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    arr1[i] = item
    hash[item] = i
  }
  arr1.sort((a, b) => a - b)

  let count = 0
  for (let i = 0; i < len; i++) {
    const prevI = hash[arr1[i]]

    for (let j = 0; j < i; j++) {
      const prevJ = hash[arr1[j]]
      if (prevJ > prevI) {
        count++
      }
    }
  }

  return count
}

function case2(arr: number[]): number {
  const base = (arr: number[], l: number, r: number): number => {
    if (r - l <= 1) return 0

    const mid = Math.floor((l + r) / 2)
    const a = base(arr, l, mid)
    const b = base(arr, mid, r)

    let i = l, j = mid, k = 0, c = 0
    const temp: number[] = []
    while (i < mid || j < r) {
      if (j >= r || (i < mid && arr[i] <= arr[j])) {
        temp[k++] = arr[i++]
      } else {
        temp[k++] = arr[j++]
        c += (mid - i)
      }
    }

    for (let i = l; i < r; i++) arr[i] = temp[i - l]

    return a + b + c
  }

  return base(arr, 0, arr.length)
}
