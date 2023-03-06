import { describe, it, expect } from 'vitest';
import { reverseBetween, ListNode } from '.';

describe('反转链表 II', () => {
  it('head = [1,2,3,4,5], left = 2, right = 4', () => {
    let pos4 = { val: 5, next: null }
    let pos3 = { val: 4, next: pos4 }
    const pos2 = { val: 3, next: pos3 }
    const pos1 = { val: 2, next: pos2 }
    const pos0 = { val: 1, next: pos1 }

    const target = { val: 1, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 5, next: null } } } } }

    expect(reverseBetween(pos0, 2, 4)).toEqual(target)
  })

  it('head = [5], left = 1, right = 1', () => {
    const pos0 = { val: 5, next: null }
    expect(reverseBetween(pos0, 1, 1)).toEqual(pos0)
  })
})
