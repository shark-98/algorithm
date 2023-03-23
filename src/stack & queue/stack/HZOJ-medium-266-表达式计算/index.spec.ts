import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('表达式计算', () => {
  it('8', () => {
    const s = '8'
    expect(fn(s)).toBe(8)
  })

  it('-8', () => {
    const s = '-8'
    expect(fn(s)).toBe(-8)
  })

  it('1+2', () => {
    const s = '1+2'
    expect(fn(s)).toBe(3)
  })

  it('(2+2)^(1+1)', () => {
    const s = '(2+2)^(1+1)'
    expect(fn(s)).toBe(16)
  })

  it('9/-9', () => {
    const s = '9/-9'
    expect(fn(s)).toBe(-1)
  })
})
