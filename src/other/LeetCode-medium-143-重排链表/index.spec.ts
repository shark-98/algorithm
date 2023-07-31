import { describe, it, expect } from 'vitest';
import { reorderList, ListNode } from './index';

describe('重排链表', () => {
  it('[1,2,3,4]', () => {
    const r = new ListNode(1)
    const r_1 = new ListNode(2)
    const r_2 = new ListNode(3)
    const r_3 = new ListNode(4)
    r.next = r_1
    r_1.next = r_2
    r_2.next = r_3

    const e = new ListNode(1)
    const e_1 = new ListNode(4)
    const e_2 = new ListNode(2)
    const e_3 = new ListNode(3)
    e.next = e_1
    e_1.next = e_2
    e_2.next = e_3

    reorderList(r)
    expect(r).toEqual(e)
  })

  it('[1,2,3,4,5]', () => {
    const r = new ListNode(1)
    const r_1 = new ListNode(2)
    const r_2 = new ListNode(3)
    const r_3 = new ListNode(4)
    const r_4 = new ListNode(5)
    r.next = r_1
    r_1.next = r_2
    r_2.next = r_3
    r_3.next = r_4

    const e = new ListNode(1)
    const e_1 = new ListNode(5)
    const e_2 = new ListNode(2)
    const e_3 = new ListNode(4)
    const e_4 = new ListNode(3)
    e.next = e_1
    e_1.next = e_2
    e_2.next = e_3
    e_3.next = e_4

    reorderList(r)
    expect(r).toEqual(e)
  })
})
