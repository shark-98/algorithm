export const fn = (n: number, count: number[]): number => {
  count.sort((a, b) => a - b) // 按照坐标升序排序
  const pos = parseInt(`${n / 2}`, 10) // 居中的位置是最总距离最短的位置
  return count.reduce((total, cur) => {
    total += Math.abs(cur - count[pos])
    return total
  }, 0)
};
