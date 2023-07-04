export function matrixSum(nums: number[][]): number {
  return case2(nums)
};

function case1(nums: number[][]): number {
  const len = nums.length
  let r = 0
  let maxItemCount = 0

  for (let i = 0; i < len; i++) {
    const item = nums[i]
    if (item.length > maxItemCount) maxItemCount = item.length
    item.sort((a, b) => b - a)
  }

  while (maxItemCount > 0) {
    let max = 0
    for (let i = 0; i < len; i++) {
      const item = nums[i]
      const val = item.shift()!
      if (val > max) max = val
    }
    maxItemCount--
    r += max
  }

  return r
};

function case2(nums: number[][]): number {
  const m = nums.length, n = nums[0].length
  let r = 0

  for (let i = 0; i < m; i++) {
    const item = nums[i]
    item.sort((a, b) => b - a)
  }

  for (let i = 0; i < n; i++) {
    let max = 0
    for (let j = 0; j < m; j++) {
      const item = nums[j][i]
      if (item > max) max = item
    }
    r += max
  }

  return r
};
