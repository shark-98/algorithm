export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  return case2(list1, list2)
};

function case1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const new_head = new ListNode()
  let p: ListNode | null = new_head

  while (list1 || list2) {
    if (!list2 || (list1 && list1.val < list2.val)) {
      p.next = list1
      list1 = list1?.next || null
    } else {
      p.next = list2
      list2 = list2.next
    }
    p = p.next!
  }

  return new_head.next
}

function case2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const new_head = new ListNode()
  let p: ListNode | null = new_head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      p.next = list1
      list1 = list1.next
    } else {
      p.next = list2
      list2 = list2.next
    }
    p = p.next
  }
  p.next = list1 ? list1 : list2

  return new_head.next
}
