class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  return case2(head)
};

function case1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  const new_head: ListNode = { val: 0, next: { val: head.val, next: null } }
  let p: ListNode | null = head.next

  while (p) {
    const q = new ListNode(p.val, new_head.next)
    new_head.next = q
    p = p.next
  }

  return new_head.next
}

function case2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  const tail = head.next
  const new_head = case2(head.next)
  head.next = tail.next
  tail.next = head

  return new_head
};
