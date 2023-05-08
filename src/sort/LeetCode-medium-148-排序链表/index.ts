export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function sortList(head: ListNode | null): ListNode | null {
  return case1(head)
};

// 归并排序
const case1 = (head: ListNode | null): ListNode | null => {
  const getLength = (head: ListNode | null): number => {
    let n = 0
    while (head) {
      n++;
      head = head.next
    }

    return n
  }
  const merge = (head: ListNode | null, n: number): ListNode | null => {
    if (n <= 1) return head

    const l = Math.floor(n / 2), r = n - l

    let p = head
    for (let i = 1; i < l; i++) {
      p = p?.next!
    }

    let p1 = head, p2 = p?.next || null
    p && (p.next = null)
    p1 = merge(p1, l)
    p2 = merge(p2, r)

    const new_head = new ListNode()
    let q = new_head
    while (p1 || p2) {
      if (p2 === null || (p1 && p1.val < p2.val)) {
        q.next = p1
        q = q.next!
        p1 = p1?.next || null
      } else {
        q.next = p2
        q = q.next!
        p2 = p2?.next || null
      }
    }

    return new_head.next
  }

  const length = getLength(head)

  const new_head = merge(head, length)

  return new_head
}
