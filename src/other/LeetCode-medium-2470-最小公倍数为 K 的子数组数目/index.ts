export function subarrayLCM(nums: number[], k: number): number {
  return case1(nums, k)
};

function case1(nums: number[], k: number): number {
  // 最大公因数 
  const GCD = (a: number, b: number) => b ? GCD(b, a % b) : a;
  // 最小公倍数 
  const LCM = (a: number, b: number) => a * b / GCD(a, b);

  const len = nums.length
  let r = 0;

  for (let i = 0; i < len; i++) {
    let num = nums[i];

    for (let j = i; j < len; j++) {
      num = LCM(nums[j], num);
      // 如果当前区间不能被k整除，那继续算出来的公倍数一定不等于k
      if (k % num !== 0) {
        break;
      }

      if (k === num) {
        r++
      }
    }
  }

  return r;
};
