type LogObjType = {
  value: string
}
let usedNumberArr: boolean[] = []

const printf = (n: number, arr: number[], obj: LogObjType) => {
  let row = ''
  for (let i = 0; i < n; i++) {
    row += `${i > 0 ? ' ' : ''}${arr[i]}`
  }

  if (obj.value) {
    obj.value += '\n'
  }
  obj.value += row
  return
}
const func = (i: number, n: number, arr: number[], obj: LogObjType) => {
  if (i === n) {
    printf(i, arr, obj)
    return
  }

  for (let k = 1; k <= n; k++) {
    if (usedNumberArr[k]) {
      continue
    }

    arr[i] = k
    usedNumberArr[k] = true
    func(i + 1, n, arr, obj)
    usedNumberArr[k] = false
  }

  return obj.value
}

export const fn = (n: number): string | undefined => {
  const result = func(0, n, [], { value: '' })

  return result
};


// 思路：
// 1.定义 —— func(i, n): 从第i个位置开始向后，一直枚举到第n位的全排列的结果

// 2.边界条件 —— i === n return 

// 3.本层函数逻辑 —— 
