import { describe, it, expect } from 'vitest';
import { ListNode, mergeTwoLists } from './index';

describe('合并两个有序链表', () => {
  it('l1 = [1,2,4], l2 = [1,3,4]', () => {
    const l1 = new ListNode(1)
    const l1_1 = new ListNode(2)
    const l1_2 = new ListNode(4)
    l1.next = l1_1
    l1_1.next = l1_2

    const l2 = new ListNode(1)
    const l2_1 = new ListNode(3)
    const l2_2 = new ListNode(4)
    l2.next = l2_1
    l2_1.next = l2_2

    const head = new ListNode(1)
    const head_1 = new ListNode(1)
    const head_2 = new ListNode(2)
    const head_3 = new ListNode(3)
    const head_4 = new ListNode(4)
    const head_5 = new ListNode(4)
    head.next = head_1
    head_1.next = head_2
    head_2.next = head_3
    head_3.next = head_4
    head_4.next = head_5

    expect(mergeTwoLists(l1, l2)).toEqual(head)
  })

  it('l1 = [], l2 = []', () => {
    const l1 = null

    const l2 = null

    const head = null

    expect(mergeTwoLists(l1, l2)).toEqual(head)
  })

  it('l1 = [], l2 = [0]', () => {
    const l1 = null

    const l2 = new ListNode(0)

    const head = new ListNode(0)

    expect(mergeTwoLists(l1, l2)).toEqual(head)
  })
})
