export function distinctAverages(nums: number[]): number {
  return case1(nums)
};

function case1(nums: number[]): number {
  const len = nums.length

  if (len === 2) return 1

  const hash = {}

  nums.sort((a, b) => a - b)

  let left = 0, right = len - 1

  while (left < right) {
    const sum = nums[left] + nums[right]
    if (!hash[sum]) {
      hash[sum] = sum / 2
    }
    left++
    right--
  }

  return Object.keys(hash).length
};
