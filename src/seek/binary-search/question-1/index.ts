export const fn = (arr: number[], target: number) => {
  let head = 0, tail = arr.length - 1, mid = 0

  while (head <= tail) {
    mid = Math.floor((head + tail) / 2)
    const val = arr[mid]

    if (val === target) return mid
    if (val < target) head = mid + 1
    if (val > target) tail = mid - 1
  }

  return -1
};
