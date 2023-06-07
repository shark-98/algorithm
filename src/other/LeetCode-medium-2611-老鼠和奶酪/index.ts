export function miceAndCheese(reward1: number[], reward2: number[], k: number): number {
  return case1(reward1, reward2, k)
};

// 贪心 + 排序
// 时间复杂度：O(nlog⁡n)，其中 n 是数组 reward1 和 reward2的长度。
// 创建数组 diff 需要 O(n) 的时间，将数组 diff 排序需要 O(nlog⁡n) 的时间，排序后计算 diff 的 k 个最大值之和需要 O(k) 的时间，其中 k≤n，因此时间复杂度是 O(nlog⁡n)。
// 空间复杂度：O(n)，其中 n 是数组 reward1 和 reward2的长度。
// 需要创建长度为 n 的数组 diff并排序，数组需要 O(n) 的空间，排序需要 O(log⁡n) 的递归调用栈空间，因此空间复杂度是 O(n)。
function case1(reward1: number[], reward2: number[], k: number): number {
  const n = reward1.length

  let sum = 0
  const diff: number[] = []

  for (let i = 0; i < n; i++) {
    sum += reward2[i]
    diff[i] = reward1[i] - reward2[i]
  }

  diff.sort((a, b) => b - a)

  for (let i = 0; i < k; i++) {
    sum += diff[i]
  }

  return sum
};

// 贪心 + 优先队列
// 时间复杂度：O(nlog⁡k)，其中 n 是数组 reward1 和 reward2的长度，k 是第一只老鼠吃掉的奶酪块数。
// 遍历两个数组的过程中，每个下标处的优先队列操作时间是 O(log⁡k)，共需要 O(nlog⁡k) 的时间，遍历数组之后计算优先队列中的 k 个元素之和需要 O(klog⁡k) 的时间，其中 k≤n，因此时间复杂度是 O(nlog⁡k+klog⁡k)=O(nlog⁡k)。
// 空间复杂度：O(k)，其中 k 是第一只老鼠吃掉的奶酪块数。优先队列需要 O(k) 的空间。
function case2(reward1: number[], reward2: number[], k: number): number {
  // 小顶堆
  class Queue {
    size: number
    count: number = 0
    data: any[] = []

    constructor(_size: number) {
      this.size = _size
    }

    empty() {
      return this.count === 0
    }
    full() {
      return this.count === this.size
    }
    top() {
      return this.data[0]
    }
    private getFatherIndex(i: number) {
      return Math.ceil(i / 2) - 1
    }
    private getLeftChildIndex(i: number) {
      return i * 2 + 1
    }
    private getRightChildIndex(i: number) {
      return i * 2 + 2
    }
    private up() {
      let curIndex = this.count - 1
      let parent = this.getFatherIndex(curIndex)
      while (parent >= 0 && this.data[parent] > this.data[curIndex]) {
        const temp = this.data[parent]
        this.data[parent] = this.data[curIndex]
        this.data[curIndex] = temp

        curIndex = parent
        parent = this.getFatherIndex(curIndex)
      }
    }
    private down() {
      let curIndex = 0
      let leftChildIndex = this.getLeftChildIndex(curIndex)
      while (leftChildIndex < this.count) {
        let pos = curIndex
        if (this.data[curIndex] > this.data[leftChildIndex]) {
          pos = leftChildIndex
        }

        let rightChildIndex = this.getRightChildIndex(curIndex)
        if (rightChildIndex < this.count && this.data[pos] > this.data[rightChildIndex]) {
          pos = rightChildIndex
        }

        if (pos === curIndex) break

        const temp = this.data[curIndex]
        this.data[curIndex] = this.data[pos]
        this.data[pos] = temp

        curIndex = pos
        leftChildIndex = this.getLeftChildIndex(curIndex)
      }
    }
    pop() {
      if (this.empty()) {
        return false
      }

      this.data[0] = this.data[this.count - 1]
      this.count -= 1
      this.down()
      return true
    }
    push(val: any) {
      let flag = false
      if (this.full()) {
        if (val > this.top()) {
          this.pop()
          this.count += 1
          this.data[this.count - 1] = val
          flag = true
        }
      } else {
        this.count += 1
        this.data[this.count - 1] = val
        flag = true
      }

      if (flag) {
        this.up()
      }
    }
  }

  const n = reward1.length

  let sum = 0
  const queue = new Queue(k)

  for (let i = 0; i < n; i++) {
    sum += reward2[i]
    queue.push(reward1[i] - reward2[i])
  }

  while (!queue.empty()) {
    const val = queue.top()
    queue.pop()
    sum += val
  }

  return sum
};
function case3(reward1: number[], reward2: number[], k: number): number {
  // 小顶堆
  class Queue {
    heap: any[]

    constructor() {
      this.heap = [];
    }

    push(value: any) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }

    poll() {
      const result = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.sinkDown(0);
      }
      return result;
    }

    size() {
      return this.heap.length;
    }

    empty() {
      return this.heap.length === 0;
    }

    bubbleUp(index: number) {
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element >= parent) {
          break;
        }
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }

    sinkDown(index: number) {
      const element = this.heap[index];
      const length = this.heap.length;
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild: number = this.heap[leftChildIndex], rightChild: number;
        let swap = -1;

        if (leftChildIndex < length) {
          if (leftChild < element) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if ((swap === -1 && rightChild < element) ||
            (swap !== -1 && rightChild < leftChild)) {
            swap = rightChildIndex;
          }
        }

        if (swap === -1) {
          break;
        }

        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }

  const n = reward1.length

  let sum = 0
  const queue = new Queue()

  for (let i = 0; i < n; i++) {
    sum += reward2[i]
    queue.push(reward1[i] - reward2[i])
    if (queue.size() > k) {
      queue.poll();
    }
  }

  while (!queue.empty()) {
    sum += queue.poll()
  }

  return sum
};
