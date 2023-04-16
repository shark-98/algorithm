import { HeapType, priorityQueue } from "../priority-queue"

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  return case2(lists)
};

const case1 = (lists: Array<ListNode | null>): ListNode | null => {
  const len = lists.length
  const minHeap = new priorityQueue(len, HeapType.Min)

  for (let i = 0; i < len; i++) {
    const node = lists[i]
    if (node) {
      minHeap.push(Number(`${node.val}.${i + 1}`))
    }
  }

  const new_head = new ListNode()
  let p: ListNode | null = new_head
  let q: ListNode | null

  while (minHeap.count) {
    const minNode = minHeap.top()
    const val = String(minNode).split('.') || []
    const i = Number(val[1])
    if (i) {
      const j = i - 1
      minHeap.pop()
      q = lists[j]
      lists[j] = lists[j]?.next || null

      p && (p.next = q)
      q && (q.next = null)
      p = q
      if (lists[j]) {
        minHeap.push(Number(`${lists[j]?.val}.${i}`))
      }
    }
  }

  return new_head.next
}

const case2 = (lists: Array<ListNode | null>): ListNode | null => {
  return lists.reduce((total: number[], cur: ListNode | null) => {
    while (cur) {
      total.push(cur.val)
      cur = cur.next
    }
    return total
  }, [])
    .sort((a, b) => a - b)
    .reduceRight((total: ListNode | null, cur) => {
      const node = new ListNode(cur)
      node.next = total
      return node
    }, null)
}
