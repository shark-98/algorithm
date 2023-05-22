import { describe, it, expect } from 'vitest';
import { intToRoman } from './index';

describe('整数转罗马数字', () => {
  it('3', () => {
    const r = intToRoman(3)
    expect(r).toBe('III')
  })

  it('4', () => {
    const r = intToRoman(4)
    expect(r).toBe('IV')
  })

  it('9', () => {
    const r = intToRoman(9)
    expect(r).toBe('IX')
  })

  it('58', () => {
    const r = intToRoman(58)
    expect(r).toBe('LVIII')
  })

  it('1994', () => {
    const r = intToRoman(1994)
    expect(r).toBe('MCMXCIV')
  })
})
