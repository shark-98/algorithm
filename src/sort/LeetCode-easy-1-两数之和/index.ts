export function twoSum(nums: number[], target: number): number[] {
  return case2(nums, target)
};

function case1(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {}

  for (let i = 0, len = nums.length; i < len; i++) {
    const num1 = nums[i]
    const num2 = target - num1

    if (hash[num2] === undefined) {
      hash[num1] = i
    } else {
      return [hash[num2], i]
    }
  }

  return []
};

function case2(nums: number[], target: number): number[] {
  const len = nums.length
  const indexArr = Array.from({ length: len }, (_, i) => ({ i, v: nums[i] }))
  indexArr.sort((a, b) => a.v - b.v)

  let l = 0, r = nums.length - 1
  while (l < r) {
    const num1 = indexArr[l].v
    const num2 = indexArr[r].v
    if (num1 + num2 > target) {
      r--
    } else if (num1 + num2 < target) {
      l++
    } else if (num1 + num2 === target) {
      return [indexArr[l].i, indexArr[r].i]
    }
  }
  return []
};
