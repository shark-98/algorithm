export const fn = (arr: number[][]): number => {
  return case1(arr)
};

function case1(arr: number[][]): number {
  const n = arr.length
  const xList: number[] = []
  const yList: number[] = []
  for (let i = 0; i < n; i++) {
    xList.push(arr[i][0])
    yList.push(arr[i][1])
  }
  const mid = Math.floor(n / 2)

  // X为排序后的x坐标集合中间数，所有点的x坐标向X靠拢移动，是x轴移动的最短移动长度
  xList.sort((a, b) => a - b)
  const X = xList[mid]

  // Y为排序后的y坐标集合中间数，所有点的y坐标移动到Y，是y轴移动的最短移动长度
  yList.sort((a, b) => a - b)
  const Y = yList[mid]

  let x = 0, y = 0
  for (let i = 0; i < n; i++) {
    const xPoint = X - (mid - i) // 当前点计算后需要移动到的最近x坐标
    const xStep = Math.abs(xPoint - xList[i]) // 当前点在x轴的移动长度
    x += xStep

    // Y即为当前点需要移动到的所有点统一y坐标
    const yStep = Math.abs(Y - yList[i]) // 当前点在y轴的移动长度
    y += yStep
  }

  return x + y
}


