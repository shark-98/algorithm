export function findContinuousSequence(target: number): number[][] {
  return case1(target)
};

function case1(target: number): number[][] {
  const result: number[][] = []

  let l = 1, r = 2, sum = l + r, arr = [l, r]
  while (l < r && r < target) {
    if (sum === target) {
      result.push(JSON.parse(JSON.stringify(arr)))
      sum -= l
      l++
      arr.shift()
    } else if (sum < target) {
      r++
      sum += r
      arr.push(r)
    } else {
      sum -= l
      l++
      arr.shift()
    }
  }

  return result
};
