import { priorityQueue, HeapType } from '../priority-queue/index';

type Item = {
  p: number,
  d: number,
}
export const fn = (n: number, arr: Item[]): number => {
  // 1.对数据源进行排序：a.整体按照过期日期升序; b.相同日期时，按照利润降序
  arr.sort((a, b) => {
    if (a.d < b.d) {
      return -1
    }

    if (a.d === b.d) {
      if (a.p > b.p) {
        return -1
      }
    }

    return 1
  })

  // 2.构建依据利润的小顶堆。根据排序后的数据源，依次操作：
  // 如果当前过期日期d > 堆中数量c，说明第c~d可以任选一天卖，直接添加进堆;
  // 如果当前过期日期d === 堆中数量c，且当前利润p > 堆中最小利润q，删除q，添加p;
  const minHeap = new priorityQueue(n, HeapType.Min)
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.d > minHeap.count) {
      minHeap.push(item.p)
    } else if (item.d === minHeap.count) {
      if (item.p > minHeap.top()) {
        minHeap.pop()
        minHeap.push(item.p)
      }
    }
  }

  return minHeap.data.reduce((total, cur) => total += cur, 0)
};
