import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('递归实现排列型枚举', () => {
  it('1-3中3位数字的组合', () => {
    const n = 3
    const arr = ['1 2 3', '1 3 2', '2 1 3', '2 3 1', '3 1 2', '3 2 1']
    const expected = arr.join('\n')
    const result = fn(n)
    expect(result).toBe(expected)
  })
})
