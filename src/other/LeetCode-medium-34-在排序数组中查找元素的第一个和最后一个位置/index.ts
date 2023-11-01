export function searchRange(nums: number[], target: number): number[] {
  return case1(nums, target)
};

function case1(nums: number[], target: number): number[] {
  const len = nums.length

  const getIndex = (val: number) => {
    let head = 0, tail = len - 1

    while (head <= tail) {
      const mid = parseInt(String((head + tail) / 2), 10)

      if (nums[mid] < val) {
        head = mid + 1
      } else {
        tail = mid - 1
      }
    }

    return head
  }

  const first = getIndex(target)
  if (first >= len || nums[first] !== target) {
    return [-1, -1]
  }

  return [first, getIndex(target + 1) - 1]
};

