import { HeapType, priorityQueue } from '../priority-queue/index';

export function nthUglyNumber(n: number): number {
  return case3(n)
};

// 结果没问题，但leetcode会报超时
const case1 = (n: number): number => {
  const isUglyNumber = (val: number, radix: number) => {
    if (uglyNumberHash[val]) return true
    if (val < 1) return false

    return isUglyNumber(val / radix, radix)
  }
  const uglyNumberHash = { 1: true }

  let i = 0
  let val = 1

  while (i < n) {
    if (isUglyNumber(val, 2) || isUglyNumber(val, 3) || isUglyNumber(val, 5)) {
      i += 1
      uglyNumberHash[val] = true
    }

    if (i === n) return val

    val++
  }

  return val
}

// 结果没问题，但leetcode会报超时
const case2 = (n: number): number => {
  let i = 0, val = 1

  const isUglyNumber = (radix: number) => {
    let temp = val

    while (temp >= 1) {
      if (uglyNumberHash[temp]) {
        return true
      }
      temp /= radix
    }
  }
  const uglyNumberHash = { 1: true }

  while (i < n) {
    if (isUglyNumber(2) || isUglyNumber(3) || isUglyNumber(5)) {
      i++
      uglyNumberHash[val] = true
    }

    if (i === n) return val
    val++
  }

  return val
}

const case3 = (n: number): number => {
  const minHeap = new priorityQueue(n, HeapType.Min)
  minHeap.push(1)

  let val = 0
  let flag = 0
  while (n) {
    val = minHeap.top()
    minHeap.pop()
    flag = val % 5 === 0 ? 2
      : val % 3 === 0 ? 1
        : 0

    switch (flag) {
      case 0: minHeap.push(val * 2)
      case 1: minHeap.push(val * 3)
      case 2: minHeap.push(val * 5)
    }

    n -= 1
  }

  return val
}
