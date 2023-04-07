import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('货仓选址', () => {
  it('n=5, count=[1, 3, 5, 6, 10]', () => {
    const n = 5
    const count = [1, 3, 6, 5, 10]
    expect(fn(n, count)).toBe(12)
  })
})
