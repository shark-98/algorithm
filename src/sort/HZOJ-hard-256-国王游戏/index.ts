export const fn = (arr: number[][]): number => {
  return case1(arr)
};

function case1(arr: number[][]): number {
  // 左 * 右的值越大的往后排，这样获得奖赏最多的大臣，所获奖赏会尽可能的少
  arr.sort((a, b) => a[0] * a[1] - b[0] * b[1])

  let p = arr[0][0], num = 0
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i]
    const val = p / item[1]
    
    if (val > num) num = val
    p *= item[0]
  }

  return num
}


