import { describe, it, expect } from 'vitest';
import { removeNthFromEnd } from '.';

describe('删除链表的倒数第 N 个结点', () => {
  it('head = [1,2,3,4,5], n = 2', () => {
    const pos4 = { val: 5, next: null }
    const pos3 = { val: 4, next: pos4 }
    const pos2 = { val: 3, next: pos3 }
    const pos1 = { val: 2, next: pos2 }
    const pos0 = { val: 1, next: pos1 }

    const target = { val: 1, next: { val: 2, next: { val: 3, next: pos4 } } }

    expect(removeNthFromEnd(pos0, 2)).toEqual(target)
  })

  it('head = [1], n = 1', () => {
    const pos0 = { val: 1, next: null }

    expect(removeNthFromEnd(pos0, 1)).toEqual(null)
  })

  it('head = [1,2], n = 1', () => {
    const pos1 = { val: 2, next: null }
    const pos0 = { val: 1, next: pos1 }

    const target = { val: 1, next: null }
    expect(removeNthFromEnd(pos0, 1)).toEqual(target)
  })

  it('head = [3,7,9,3,5,8,0], n = 1', () => {
    const pos6 = { val: 0, next: null }
    const pos5 = { val: 8, next: pos6 }
    const pos4 = { val: 5, next: pos5 }
    const pos3 = { val: 3, next: pos4 }
    const pos2 = { val: 9, next: pos3 }
    const pos1 = { val: 7, next: pos2 }
    const pos0 = { val: 3, next: pos1 }

    const target = {
      val: 3,
      next: {
        val: 7,
        next: {
          val: 9,
          next: {
            val: 3,
            next: {
              val: 5,
              next: {
                val: 8,
                next: null
              }
            }
          }
        }
      }
    }

    expect(removeNthFromEnd(pos0, 1)).toEqual(target)
  })
})
