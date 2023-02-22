import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('弹簧板', () => {
  it('5个弹簧板[2, 2, 3, 1, 2]', () => {
    const n = 5
    const arr = [2, 2, 3, 1, 2]
    const num = fn(0, n, arr)
    expect(num).toBe(2)
  })

  it('5个弹簧板[1, 2, 3, 1, 2]', () => {
    const n = 5
    const arr = [1, 2, 3, 1, 2]
    const num = fn(0, n, arr)
    expect(num).toBe(4)
  })
})
