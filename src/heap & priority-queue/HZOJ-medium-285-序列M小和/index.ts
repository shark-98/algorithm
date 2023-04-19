import { priorityQueue } from "../priority-queue";

export const fn = (n: number, m: number, arr: number[][]): number[] => {
  return case1(n, m, arr)
};

const case1 = (n: number, m: number, arr: number[][]): number[] => {
  const maxHeap = new priorityQueue(m);

  for (let i = 0; i < n - 1; i++) {
    for (let x = 0; x < m; x++) {
      for (let j = i + 1; j < n; j++) {
        for (let y = 0; y < m; y++) {
          const sum = arr[i][x] + arr[j][y];
          if (maxHeap.count < m) {
            maxHeap.push(sum)
          } else {
            if (sum < maxHeap.top()) {
              maxHeap.pop()
              maxHeap.push(sum)
            }
          }
        }
      }
    }
  }

  let result: number[] = []
  for (let i = 0; i < m; i++) {
    result.unshift(maxHeap.top())
    maxHeap.pop()
  }

  return result
}
