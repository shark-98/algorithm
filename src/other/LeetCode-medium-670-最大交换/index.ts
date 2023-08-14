export function maximumSwap(num: number): number {
  return case2(num)
};

function case1(num: number): number {
  const str = String(num)
  const len = str.length

  const arr: { val: string, index: number }[] = []
  for (let i = 0; i < len; i++) {
    arr.push({
      val: str[i],
      index: i
    })
  }
  arr.sort((a, b) => (Number(b.val) - Number(a.val)) || (b.index - a.index))

  const r = str.split('')

  for (let i = 0; i < len; i++) {
    const { val, index } = arr[i]
    if (r[i] !== val) {
      const temp = r[i]
      r[i] = val
      r[index] = temp
      break
    }
  }

  return Number(r.join(''))
};

function case2(num: number): number {
  const str = num.toString()
  const len = str.length

  const arr = str.split('')

  for (let i = 0; i < len - 1; i++) {
    const val1 = arr[i]

    let max = { val: val1, index: i }
    for (let j = i + 1; j < len; j++) {
      const val2 = arr[j]
      if (val2 >= max.val) {
        max = { val: val2, index: j }
      }
    }

    if (max.val > val1) {
      const temp = max.val
      arr[max.index] = arr[i]
      arr[i] = temp
      break
    }
  }

  return Number(arr.join(''))
}
