export function applyOperations(nums: number[]): number[] {
  return case3(nums)
};

function case1(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    }
  }

  let left = 0, right = left + 1

  while (left < right && right < len) {
    while (left < len && nums[left] !== 0) left++

    right = left + 1
    while (right < len && nums[right] === 0) right++

    if (right < len) {
      const temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
      right++
    }

  }

  return nums
};

function case2(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    }
  }

  let left = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[left++] = nums[i]
    }
  }
  while (left < len) {
    nums[left++] = 0
  }

  return nums
};

function case3(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    }
  }

  nums.sort((a, b) => {
    if (b === 0) return -1
    return 0
  })

  return nums
};
