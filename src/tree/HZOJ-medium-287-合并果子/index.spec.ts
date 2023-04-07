import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('合并果子', () => {
  it('n=3, count=[1, 2, 9]', () => {
    const count = [1, 2, 9]
    const min = fn(count)
    expect(min).toBe(15)
  })

  it('n=5, count=[1, 2, 9, 20, 5]', () => {
    const count = [1, 2, 9, 20, 5]
    const min = fn(count)
    expect(min).toBe(65)
  })
})
