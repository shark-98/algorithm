export function maxStrength(nums: number[]): number {
  return case2(nums)
};

function case1(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let product = 0

  const negativeList: number[] = []
  for (const item of nums) {
    if (item < 0) {
      negativeList.push(item)
    } else if (item > 0) {
      product = (product || 1) * item
    }
  }

  negativeList.sort((a, b) => a - b)
  const negativeListLength = negativeList.length
  const length = negativeListLength % 2 === 1 ? negativeListLength - 1 : negativeListLength
  for (let i = 0; i < length; i++) {
    product = (product || 1) * negativeList[i]
  }

  return product
};

function case2(nums: number[]): number {
  let max = nums[0], min = nums[0]

  for (let i = 1, len = nums.length; i < len; i++) {
    const item = nums[i]

    const productMax = max * item
    const productMin = min * item

    max = Math.max(productMax, productMin, item, max);

    min = Math.min(productMax, productMin, item, min);
  }

  return max;
}
