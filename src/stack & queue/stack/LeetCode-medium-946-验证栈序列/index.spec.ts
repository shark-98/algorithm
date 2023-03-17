import { describe, it, expect } from 'vitest';
import { validateStackSequences } from '.';

describe('验证栈序列', () => {
  it('pushed = [1,2,3,4,5], popped = [4,5,3,2,1]', () => {
    const pushed = [1, 2, 3, 4, 5]
    const popped = [4, 5, 3, 2, 1]
    const flag = validateStackSequences(pushed, popped)
    expect(flag).toBe(true)
  })

  it('pushed = [1,2,3,4,5], popped = [4,3,5,1,2]', () => {
    const pushed = [1, 2, 3, 4, 5]
    const popped = [4, 3, 5, 1, 2]
    const flag = validateStackSequences(pushed, popped)
    expect(flag).toBe(false)
  })

  it('pushed = [0,2,1], popped = [0,1,2]', () => {
    const pushed = [0, 2, 1]
    const popped = [0, 1, 2]
    const flag = validateStackSequences(pushed, popped)
    expect(flag).toBe(true)
  })
})
