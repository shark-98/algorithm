import { describe, it, expect } from 'vitest';
import { ListNode, addTwoNumbers } from './index';

describe('两数相加', () => {
  it('l1 = [9,8,1], l2 = [7,6,2]', () => {
    const l1 = new ListNode(9)
    const l1_1 = new ListNode(8)
    const l1_2 = new ListNode(1)
    l1.next = l1_1
    l1_1.next = l1_2

    const l2 = new ListNode(7)
    const l2_1 = new ListNode(6)
    const l2_2 = new ListNode(2)
    l2.next = l2_1
    l2_1.next = l2_2

    const r = new ListNode(6)
    const r_1 = new ListNode(5)
    const r_2 = new ListNode(4)
    r.next = r_1
    r_1.next = r_2

    const v = addTwoNumbers(l1, l2)
    expect(v).toEqual(r) // [6, 5, 4] -> 189 + 267 = 456
  })

  it('l1 = [2,4,3], l2 = [5,6,4]', () => {
    const l1 = new ListNode(2)
    const l1_1 = new ListNode(4)
    const l1_2 = new ListNode(3)
    l1.next = l1_1
    l1_1.next = l1_2

    const l2 = new ListNode(5)
    const l2_1 = new ListNode(6)
    const l2_2 = new ListNode(4)
    l2.next = l2_1
    l2_1.next = l2_2

    const r = new ListNode(7)
    const r_1 = new ListNode(0)
    const r_2 = new ListNode(8)
    r.next = r_1
    r_1.next = r_2

    const v = addTwoNumbers(l1, l2)
    expect(v).toEqual(r) // [7, 0, 8] -> 342 + 465 = 807
  })

  it('l1 = [0], l2 = [0]', () => {
    const l1 = new ListNode(0)
    const l2 = new ListNode(0)

    const r = new ListNode(0)

    const v = addTwoNumbers(l1, l2)
    expect(v).toEqual(r)
  })

  it('l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', () => {
    const l1 = new ListNode(9)
    const l1_1 = new ListNode(9)
    const l1_2 = new ListNode(9)
    const l1_3 = new ListNode(9)
    const l1_4 = new ListNode(9)
    const l1_5 = new ListNode(9)
    const l1_6 = new ListNode(9)
    l1.next = l1_1
    l1_1.next = l1_2
    l1_2.next = l1_3
    l1_3.next = l1_4
    l1_4.next = l1_5
    l1_5.next = l1_6

    const l2 = new ListNode(9)
    const l2_1 = new ListNode(9)
    const l2_2 = new ListNode(9)
    const l2_3 = new ListNode(9)
    l2.next = l2_1
    l2_1.next = l2_2
    l2_2.next = l2_3

    const r = new ListNode(8)
    const r_1 = new ListNode(9)
    const r_2 = new ListNode(9)
    const r_3 = new ListNode(9)
    const r_4 = new ListNode(0)
    const r_5 = new ListNode(0)
    const r_6 = new ListNode(0)
    const r_7 = new ListNode(1)
    r.next = r_1
    r_1.next = r_2
    r_2.next = r_3
    r_3.next = r_4
    r_4.next = r_5
    r_5.next = r_6
    r_6.next = r_7

    const v = addTwoNumbers(l1, l2)
    expect(v).toEqual(r) // [8, 9, 9, 9, 0, 0, 0, 1]
  })
})
