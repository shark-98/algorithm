export function findNthDigit(n: number): number {
  return case1(n)
};

function case1(n: number): number {
  let digit = 1 // 当前区域的数字长度（1是1位，10是2位）
  let start = 1 // 当前区域的起始数字
  let count = 9 // 当前区域的字符个数（10～99是90个数字，180个字符）
  let length = n

  while (length > count) {
    length -= count
    digit++
    start *= 10
    count = digit * start * 9
  }

  // 因为要从start的第一位开始找，所以length-1
  const num = start + Math.floor((length - 1) / digit)
  return Number(String(num)[Math.floor((length - 1) % digit)])
};
