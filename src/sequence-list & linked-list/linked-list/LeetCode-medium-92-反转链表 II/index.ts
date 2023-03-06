export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  return case2(head, left, right)
};

function case1(head: ListNode | null, left: number, right: number): ListNode | null {
  let p: ListNode | null = head

  let new_head: ListNode | null = new ListNode(undefined, null)
  let q = new_head
  for (let i = 1; i < left && p; i++) {
    q.next = p
    q = q.next
    p = p.next
  }

  const arr: ListNode[] = []
  for (let i = left; i <= right && p; i++) {
    arr.push(p)
    p = p.next
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    q.next = arr[i]
    arr[i].next = null
    q = q.next
  }

  q.next = p

  return new_head.next
}

export function case2(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === 1 && right === 1) return head

  if (head) {
    if (left !== 1) {
      head.next = case2(head.next, left - 1, right - 1)
    } else {
      let tail = head.next
      const new_head = case2(head?.next || null, left, right - 1)
      head.next = tail?.next || null
      if (tail) {
        tail.next = head
      }

      head = new_head
    }
  }

  return head
}


