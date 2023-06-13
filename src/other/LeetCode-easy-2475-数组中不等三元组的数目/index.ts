export function unequalTriplets(nums: number[]): number {
  return case2(nums)
};

function case1(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let r = 0
  const len = nums.length

  for (let i = 0, j = 0; i < len; i = j) {
    while (j < len && nums[j] === nums[i]) {
      j++
    }

    r += i * (j - i) * (len - j)
  }

  return r
};

function case2(nums: number[]): number {
  const len = nums.length
  const hash: { [key: string]: number } = nums.reduce((total, cur) => {
    if (!total[cur]) {
      total[cur] = 1
    } else {
      total[cur]++
    }

    return total
  }, {})

  let prev = 0
  return Object.values(hash).reduce((total: number, cur: number) => {
    const last = len - prev - cur
    total += prev * cur * last
    prev += cur
    return total
  }, 0)
}
