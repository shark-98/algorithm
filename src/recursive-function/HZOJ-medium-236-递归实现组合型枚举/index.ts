type LogObjType = {
  value: string
}

const printf = (n: number, arr: number[], obj: LogObjType) => {
  let row = ''

  for (let i = 0; i <= n; i++) {
    if (i > 0) {
      row += ' '
    }
    row += arr[i]
  }

  if (obj.value) {
    obj.value += '\n'
  }
  obj.value += row
}

const func = (i: number, j: number, n: number, m: number, arr: number[], obj: LogObjType): string | undefined => {
  if (i === m) {
    printf(i - 1, arr, obj)
    return
  }

  for (let k = j; k <= n && m - i - 1 <= n - k; k++) {
    arr[i] = k
    func(i + 1, k + 1, n, m, arr, obj)
  }

  return obj.value
};

export const fn = (n: number, m: number): string | undefined => {
  return func(0, 1, n, m, [], { value: '' })
};


// 思路：
// 1.定义 —— func(i, j, n, m): 第i个位置，最小值为j最大值为n且长度为n的集合

// 2.边界条件 —— i > n return 

// 3.本层函数逻辑 —— 
