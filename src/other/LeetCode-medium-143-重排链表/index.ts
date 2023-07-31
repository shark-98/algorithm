export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
export function reorderList(head: ListNode | null): void {
  const hash = {}
  let len = 0
  let p = head
  while (p) {
    hash[len] = p
    len++
    p = p.next
  }

  for (let i = 0; i < len / 2; i++) {
    const node = hash[i];

    const index = len - 1 - i
    const hasNext = index >= i + 1
    if (hasNext) {
      const nextNode = hash[index]
      nextNode.next = nextNode === node.next ? null : node.next
      node.next = nextNode
    } else {
      node.next = null
    }
  }
};
