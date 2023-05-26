export function longestSubarray(nums: number[]): number {
  return case1(nums)
};

function case1(nums: number[]): number {
  const arr: number[] = []

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      arr.push(0)
    } else {
      if (arr[arr.length - 1] >= 1) {
        arr[arr.length - 1] += 1
      } else {
        arr.push(1)
      }
    }
  }

  const length = arr.length

  if (length <= 2) {
    if (length === 1) return arr[0] > 0 ? arr[0] - 1 : 0
    if (length === 2) return arr[0] || arr[1]
  }

  let max = arr[0]
  for (let i = 1; i < length - 1; i++) {
    const prev = arr[i - 1]
    const next = arr[i + 1]

    let newMax = 0
    if (arr[i] === 0 && prev > 0 && next > 0) {
      newMax = prev + next
    } else {
      newMax = arr[i]
    }

    if (newMax > max) {
      max = newMax
    }
  }

  if (arr[length - 1] > max) {
    max = arr[length - 1]
  }

  return max
};
