class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  return case2(head, n)
};

function case1(head: ListNode | null, n: number): ListNode | null {
  let p = head
  let hash = {}

  let i = 0
  while (p) {
    hash[`${p.val}-${i}`] = p
    p = p.next
    i++
  }

  const len = i
  const pos = len - n
  p = head

  if (pos === 0) {
    if (len === 1) {
      return null
    }

    return p?.next || null
  } else {
    for (let i = 0; i <= pos; i++) {
      if ((i === pos - 1) && p) {
        p.next = p?.next?.next || null
        return head
      } else {
        p = p?.next || null
      }
    }
  }

  return head
}

function case2(head: ListNode | null, n: number): ListNode | null {
  type PartialListNode = Partial<ListNode> | null

  const new_head = { next: head }
  let p: PartialListNode = new_head
  let q: PartialListNode = new_head

  for (let i = 0; i <= n; i++) {
    q = q?.next || null
  }

  while (q) {
    p = p?.next || null
    q = q?.next || null
  }

  if (p) {
    p.next = p?.next?.next || null
  }

  return new_head.next
}

