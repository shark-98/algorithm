import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('递归实现组合型枚举', () => {
  it('1-3中2位数字的组合', () => {
    const n = 3
    const m = 2
    const arr = ['1 2', '1 3', '2 3']
    const expected = arr.join('\n')
    const result = fn(n, m)
    expect(result).toBe(expected)
  })

  it('1-5中3位数字的组合', () => {
    const n = 5
    const m = 3
    const arr = ['1 2 3', '1 2 4', '1 2 5', '1 3 4', '1 3 5', '1 4 5', '2 3 4', '2 3 5', '2 4 5', '3 4 5']
    const expected = arr.join('\n')
    const result = fn(n, m)
    expect(result).toBe(expected)
  })
})
