const getMin = (count: number[]): number => {
  let min = Infinity
  let index = 0

  for (let i = 0; i < count.length; i++) {
    if (count[i] < min) {
      min = count[i]
      index = i
    }
  }

  count.splice(index, 1)
  return min
}

export const fn = (count: number[]): number => {
  const deepFn = (count: number[]) => {
    if (count.length === 1) return

    const a = getMin(count)
    const b = getMin(count)
    const val = a + b
    result += val
    count.push(val)

    deepFn(count)
  }

  let result: number = 0
  deepFn(count)
  return result
};
