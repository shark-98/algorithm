export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function detectCycle(head: ListNode | null): ListNode | null {
  return case2(head)
};

const case1 = (head: ListNode | null): ListNode | null => {
  let p: ListNode | null = head
  const map = new Map()

  while (p) {
    if (map.get(p)) {
      return p
    }

    map.set(p, true)
    p = p.next
  }

  return null
}

const case2 = (head: ListNode | null): ListNode | null => {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast && fast.next !== null) {
    slow = slow?.next || null
    fast = fast?.next?.next || null

    if (slow === fast) break
  }

  if (fast === null || fast.next === null) return null

  slow = head
  while (slow !== fast) {
    slow = slow?.next || null
    fast = fast?.next || null
  }

  return slow
}
