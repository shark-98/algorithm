export function search(nums: number[], target: number): number {
  return case1(nums, target)
};

function case1(nums: number[], target: number): number {
  let head = 0, tail = nums.length - 1

  const first = nums[0]
  const last = nums[tail]

  while (head <= tail) {
    const mid = parseInt(String((head + tail) / 2), 10)
    const value = nums[mid]

    if (value === target) {
      return mid
    }

    if (first <= value) {
      if (first <= target && target <= value) {
        tail = mid - 1
      } else {
        head = mid + 1
      }
    } else {
      if (value <= target && target <= last) {
        head = mid + 1
      } else {
        tail = mid - 1
      }
    }
  }

  return -1
}
