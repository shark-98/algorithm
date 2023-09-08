export function countBadPairs(nums: number[]): number {
  return case1(nums)
};

function case1(nums: number[]): number {
  const len = nums.length;
  const getCount = (n: number) => n * (n - 1) / 2
  let count = getCount(len)
  const hash = {}

  for (let i = 0; i < len; i++) {
    const val = nums[i] - i
    hash[val] = (hash[val] || 0) + 1
  }


  for (const key in hash) {
    if (Object.prototype.hasOwnProperty.call(hash, key)) {
      const val = hash[key];
      count -= getCount(val)
    }
  }

  return count;
};
