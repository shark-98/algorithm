export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  return case2(nums, k)
};

function case1(nums: number[], k: number): boolean {
  const hash: { [key: string]: number } = {}

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const prevIndex = hash[num]
    if (prevIndex !== undefined && i - prevIndex <= k) {
      return true
    } else {
      hash[num] = i
    }
  }

  return false
};

function case2(nums: number[], k: number): boolean {
  const map = new Map()

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (map.has(num)) {
      return true
    }

    map.set(num, i)
    if (map.size > k) {
      map.delete(nums[i - k])
    }
  }

  return false
};
