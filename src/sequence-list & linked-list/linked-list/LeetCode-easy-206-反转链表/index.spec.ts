import { describe, it, expect } from 'vitest';
import { reverseList } from '.';

describe('反转链表', () => {
  it('[1,2,3,4,5]', () => {
    const source = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    }
    const target = {
      val: 5,
      next: {
        val: 4,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 1,
              next: null
            }
          }
        }
      }
    }
    expect(reverseList(source)).toEqual(target)
  })
  it('[1,2]', () => {
    const source = {
      val: 1,
      next: {
        val: 2,
        next: null
      }
    }
    const target = {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
    expect(reverseList(source)).toEqual(target)
  })
  it('[1]', () => {
    const source = {
      val: 1,
      next: null
    }
    expect(reverseList(source)).toEqual(source)
  })
  it('[]', () => {
    const source = null
    expect(reverseList(source)).toEqual(source)
  })
})
