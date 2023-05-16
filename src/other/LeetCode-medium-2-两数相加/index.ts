export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return case1(l1, l2)
};

export function case1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  const new_head = new ListNode()
  let q = new_head, prevNum = 0

  while (l1 || l2) {
    const val = (l1?.val || 0) + (l2?.val || 0) + prevNum
    prevNum = Math.floor(val / 10)
    q.next = new ListNode(val % 10)
    q = q.next
    l1 = l1?.next || null
    l2 = l2?.next || null
  }

  if (prevNum) {
    q.next = new ListNode(prevNum)
  }

  return new_head.next
}

// 大数字会有问题
export function case2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let p1 = l1, p2 = l2, val1 = '', val2 = ''
  while (p1) {
    val1 = `${p1.val}${val1}`
    p1 = p1.next
  }

  while (p2) {
    val2 = `${p2.val}${val2}`
    p2 = p2.next
  }

  const val = `${Number(val1) + Number(val2)}`

  const new_head = new ListNode()
  for (let i = 0; i < val.length; i++) {
    const node = new ListNode(Number(val[i]))
    node.next = new_head.next
    new_head.next = node
  }

  return new_head.next
}
