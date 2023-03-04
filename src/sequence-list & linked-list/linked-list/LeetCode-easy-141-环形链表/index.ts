export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function hasCycle(head: ListNode | null): boolean {
  return case2(head)
};

function case1(head: ListNode | null): boolean {
  const hash = {}
  let p = head

  while (p && p.next) {
    if (hash[p.val] === p) {
      return true
    }

    hash[p.val] = p
    p = p.next
  }

  return false
};

function case2(head: ListNode | null): boolean {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (slow && slow.next) {
    slow = slow?.next
    fast = fast?.next?.next || null

    if (fast == slow) {
      return true
    }
  }

  return false
}
