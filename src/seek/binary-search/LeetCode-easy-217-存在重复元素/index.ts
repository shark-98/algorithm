export function containsDuplicate(nums: number[]): boolean {
  return case1(nums)
};

function case1(nums: number[]): boolean {
  const hash = {}

  for (let i = 0, len = nums.length; i < len; i++) {
    const val = nums[i]

    if (hash[val]) {
      return true
    } else {
      hash[val] = true
    }
  }

  return false
};
