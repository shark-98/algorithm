export function removeDuplicates(nums: number[]): number {
  return case2(nums)
};

function case1(nums: number[]): number {
  const hash = {}

  for (let i = 0; i < nums.length;) {
    const item = nums[i];

    if (hash[item] === 2) {
      nums.splice(i, 1)
    } else {
      hash[item] = (hash[item] || 0) + 1
      i++
    }
  }

  return nums.length
};

function case2(nums: number[]): number {
  const len = nums.length

  if (len <= 2) return len

  let l = 2, r = 2
  while (r < len) {
    if (nums[l - 2] !== nums[r]) {
      nums[l] = nums[r]
      l++
    }

    r++
  }

  return l
}
