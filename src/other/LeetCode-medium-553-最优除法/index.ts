export function optimalDivision(nums: number[]): string {
  return case1(nums)
};

function case1(nums: number[]): string {
  // 考虑到除法运算用分数 x / y 来表示
  // 其中分子 x 为被除数，分母 y 为除数
  // 为了最大化 x / y，应该使分子 x 尽可能的大，分母 y 尽可能的小。
  // x最大为nums[0]

  const n = nums.length
  if (n === 1) return `${nums[0]}`
  if (n === 2) return `${nums[0]}/${nums[1]}`

  let r = `${nums[0]}/(`
  for (let i = 1; i < n - 1; i++) {
    r += `${nums[i]}/`
  }
  r += `${nums[n - 1]})`

  return r
}
