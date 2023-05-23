export function threeSum(nums: number[]): number[][] {
  return case1(nums)
};

function case1(nums: number[]): number[][] {
  let res: number[][] = []

  const len = nums.length;
  if (len < 3) return res

  nums.sort((a, b) => a - b)

  // 最小值 > 0 或者 最大值 < 0，说明没有任意一个组合满足相加 === 0
  if (nums[0] > 0 || nums[len - 1] < 0) return res


  for (let i = 0; i < len; i++) {
    // 当前值 > 0，此时数组中剩余可用的最小值不是负数，说明从当前开始已经没有任意一个组合满足相加 === 0
    if (nums[i] > 0) return res

    // 当前最小值和上次的最小值一样，跳过，避免重复值
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let l = i + 1, r = len - 1
    while (l < r) {
      const val = nums[i] + nums[l] + nums[r]
      IS_CONSOLE && console.log('-----');
      IS_CONSOLE && console.log(`当前值与下标：[${i}]${nums[i]}, [${l}]${nums[l]}, [${r}]${nums[r]}`);
      IS_CONSOLE && console.log(`结果：${val}`);

      if (val > 0) r--
      if (val < 0) l++

      if (val === 0) {
        res.push([nums[i], nums[l], nums[r]])
        IS_CONSOLE && console.log('添加');

        // 将第二个值和第三个值的指针，分别移动到与当前值不相等的下一个位置，避免重复值
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++, r--
      }
    }
  }

  return res
};

const IS_CONSOLE = false
