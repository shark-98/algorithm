import { describe, it, expect } from 'vitest';
import { hasCycle, ListNode } from '.';

describe('环形链表', () => {
  it('head = [3,2,0,4], pos = 1', () => {
    let pos3: ListNode = { val: 4, next: null }
    const pos1 = { val: 2, next: { val: 0, next: pos3 } }
    const pos0 = { val: 3, next: pos1 }
    pos3.next = pos1

    expect(hasCycle(pos0)).toEqual(true)
  })

  it('head = [1,2], pos = 0', () => {
    let pos1: ListNode = { val: 2, next: null }
    const pos0 = { val: 1, next: pos1 }
    pos1.next = pos0

    expect(hasCycle(pos0)).toEqual(true)
  })

  it('head = [1], pos = -1', () => {
    const pos0 = { val: 1, next: null }
    expect(hasCycle(pos0)).toEqual(false)
  })
})
