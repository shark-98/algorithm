export const fn = (i: number, n: number, arr: number[]): number => {
  if (i >= n) {
    return 0
  }

  return 1 + fn(i + arr[i], n, arr)
};

// 思路：
// 1.定义 —— f(n): 小球从i位置开始，被弹出需要的次数

// 2.边界条件 —— i >= n return 0

// 3.本层函数逻辑 —— f(n) = 1 + f(i + arr[i])
