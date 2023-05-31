export function searchInsert(nums: number[], target: number): number {
  return case1(nums, target)
};

function case1(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const val = nums[mid]
    if (val === target) return mid

    if (val > target) right = mid - 1
    if (val < target) left = mid + 1
  }

  return left
};
