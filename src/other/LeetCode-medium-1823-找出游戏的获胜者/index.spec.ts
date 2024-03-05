import { describe, it, expect } from 'vitest';
import { findTheWinner } from './index';

describe('找出游戏的获胜者', () => {
  it('n = 5, k = 2', () => {
    const n = 5, k = 2

    expect(findTheWinner(n, k)).toBe(3)
  })
  it('n = 6, k = 5', () => {
    const n = 6, k = 5

    expect(findTheWinner(n, k)).toBe(1)
  })
})
