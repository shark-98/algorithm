import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('生日礼物', () => {
  it('1', () => {
    const n = 6, m = 2
    const list = [2, -3, 2, 8, -1, 2] // (2) + (2 + 8 + -1 + 2) = 13

    expect(fn(n, m, list)).toBe(13)
  })
})
