import { describe, it, expect } from 'vitest';
import { ListNode, mergeKLists } from './index';

describe('合并 K 个升序链表', () => {
  it('[]', () => {
    const lists = []
    const result = mergeKLists(lists)
    expect(result).toEqual(null)
  })

  it('[[]]', () => {
    const lists = [null]
    const result = mergeKLists(lists)
    expect(result).toEqual(null)
  })

  it('[[1,4,5],[1,3,4],[2,6]]', () => {
    const node1 = new ListNode(1)
    const node1_1 = new ListNode(4)
    node1.next = node1_1
    const node1_2 = new ListNode(5)
    node1_1.next = node1_2

    const node2 = new ListNode(1)
    const node2_1 = new ListNode(3)
    node2.next = node2_1
    const node2_2 = new ListNode(4)
    node2_1.next = node2_2

    const node3 = new ListNode(2)
    const node3_1 = new ListNode(6)
    node3.next = node3_1

    const lists = [node1, node2, node3]

    const node0 = new ListNode(1)
    const node0_1 = new ListNode(1)
    node0.next = node0_1
    const node0_2 = new ListNode(2)
    node0_1.next = node0_2
    const node0_3 = new ListNode(3)
    node0_2.next = node0_3
    const node0_4 = new ListNode(4)
    node0_3.next = node0_4
    const node0_5 = new ListNode(4)
    node0_4.next = node0_5
    const node0_6 = new ListNode(5)
    node0_5.next = node0_6
    const node0_7 = new ListNode(6)
    node0_6.next = node0_7

    const result = mergeKLists(lists)
    expect(result).toEqual(node0)
  })

  it('[[],[-1,5,11],[],[6,10]]', () => {
    const node1 = new ListNode(-1)
    const node1_1 = new ListNode(5)
    node1.next = node1_1
    const node1_2 = new ListNode(11)
    node1_1.next = node1_2

    const node3 = new ListNode(6)
    const node3_1 = new ListNode(10)
    node3.next = node3_1

    const lists = [null, node1, null, node3]

    const node0 = new ListNode(-1)
    const node0_1 = new ListNode(5)
    node0.next = node0_1
    const node0_2 = new ListNode(6)
    node0_1.next = node0_2
    const node0_3 = new ListNode(10)
    node0_2.next = node0_3
    const node0_4 = new ListNode(11)
    node0_3.next = node0_4

    const result = mergeKLists(lists)
    expect(result).toEqual(node0)
  })
})
