export function fn(que1: number[], que2: number[], que3: number[]): number {
  return case1(que1, que2, que3)
}

function getMinItem(val1: number, val2: number, val3: number): number {
  let firstMin = val1 < val2 ? val1 : val2
  return firstMin < val3 ? firstMin : val3
}

function case1(que1: number[], que2: number[], que3: number[]): number {
  let result = Infinity

  while (que1.length && que2.length && que3.length) {
    const val1 = que1[0]
    const val2 = que2[0]
    const val3 = que3[0]
    const num = Math.abs(val1 - val2) + Math.abs(val2 - val3) + Math.abs(val3 - val1)

    if (result > num) result = num

    const min = getMinItem(val1, val2, val3)

    const map = new Map([
      [val1, () => que1.shift()],
      [val2, () => que2.shift()],
      [val3, () => que3.shift()],
    ])
    const removeQueueMinItemFn = map.get(min)

    if (removeQueueMinItemFn) {
      removeQueueMinItemFn()
    }
  }

  return result
}
