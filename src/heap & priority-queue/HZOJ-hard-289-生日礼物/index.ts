import { HeapType, priorityQueue } from "../priority-queue";

export const fn = (n: number, m: number, list: number[]): number => {
  return case1(n, m, list)
};

const case1 = (n: number, m: number, list: number[]): number => {
  // 1.数据初始化
  const arr: number[] = [0]
  let k = 0
  for (let i = 0; i < n; i++) {
    // 1.1根据list生成新数组arr,并按照同符号（同正或同负）进行累加
    if (arr[k] * list[i] >= 0) {
      arr[k] += list[i]
    } else {
      arr[++k] = list[i]
    }
  }

  // 2.辅助数据收集
  // 2.1维护正数数量count、结果值s
  let count = 0
  let s = 0

  // 2.2维护l和r两个数组，分别用于记录arr当前下标的前一个有效值下标与后一个有效值下标
  const l: number[] = []
  const r: number[] = []

  // 2.3维护d数组，记录废弃的值下标
  const d: number[] = []

  // 2.4维护一个最小堆，存储当前所有有效值
  const minHeap = new priorityQueue(k + 1, HeapType.Min)
  for (let i = 0; i <= k; i++) {
    const item = arr[i];

    if (item > 0) {
      count += 1
      s += item
    }
    l[i] = i - 1
    r[i] = i + 1
    const val = parseFloat(`${Math.abs(item)}.${i}`)

    minHeap.push(val)
  }

  const del = (index: number) => {
    r[l[index]] = r[index]
    l[r[index]] = l[index]
    d[index] = 1
  }

  // 3.操作
  while (count > m) {
    let item = minHeap.top().toString()
    let index = item.split('.')[1] || 0
    while (d[index]) {
      minHeap.pop()
      item = minHeap.top().toString()
      index = item.split('.')[1] || 0
    }

    minHeap.pop()
    const left = l[index]
    const right = r[index]
    if ((left > 0 && right <= n) || arr[index] > 0) {
      s -= Math.abs(arr[index])
      count--
      arr[index] += arr[left] + arr[right]
      const val = parseFloat(`${Math.abs(arr[index])}.${index}`)
      minHeap.push(val)
      del(left)
      del(right)
    }
  }

  return s
}


