import { describe, it, expect } from 'vitest';
import { ListNode, sortList } from './index';

describe('排序链表', () => {
  it('[4,2,1,3]', () => {
    const head = new ListNode(4)
    const node1 = new ListNode(2)
    const node2 = new ListNode(1)
    const node3 = new ListNode(3)
    head.next = node1
    node1.next = node2
    node2.next = node3

    const new_head = new ListNode(1)
    const new_node1 = new ListNode(2)
    const new_node2 = new ListNode(3)
    const new_node3 = new ListNode(4)
    new_head.next = new_node1
    new_node1.next = new_node2
    new_node2.next = new_node3

    const r = sortList(head)

    expect(r).toEqual(new_head)
  })

  it('[-1,5,3,4,0]', () => {
    const head = new ListNode(-1)
    const node1 = new ListNode(5)
    const node2 = new ListNode(3)
    const node3 = new ListNode(4)
    const node4 = new ListNode(0)
    head.next = node1
    node1.next = node2
    node2.next = node3
    node3.next = node4

    const new_head = new ListNode(-1)
    const new_node1 = new ListNode(0)
    const new_node2 = new ListNode(3)
    const new_node3 = new ListNode(4)
    const new_node4 = new ListNode(5)
    new_head.next = new_node1
    new_node1.next = new_node2
    new_node2.next = new_node3
    new_node3.next = new_node4

    const r = sortList(head)

    expect(r).toEqual(new_head)
  })

  it('[]', () => {
    const head = new ListNode()
    expect(sortList(head)).toEqual(head)
  })
})
