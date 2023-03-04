import { describe, it, expect } from 'vitest';
import { isHappy } from '.';

describe('快乐数', () => {
  it('19', () => {
    expect(isHappy(19)).toBe(true)
  })

  it('2', () => {
    expect(isHappy(2)).toBe(false)
  })
})
