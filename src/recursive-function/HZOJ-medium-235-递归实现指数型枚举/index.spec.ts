import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('递归实现指数型枚举', () => {
  it('1-3', () => {
    const n = 3
    const arr = ['1', '1 2', '1 2 3', '1 3', '2', '2 3', '3']
    const expected = arr.join('\n')
    const result = fn(n)
    expect(result).toBe(expected)
  })

  it('1-4', () => {
    const n = 4
    const arr = ['1', '1 2', '1 2 3', '1 2 3 4', '1 2 4', '1 3', '1 3 4', '1 4', '2', '2 3', '2 3 4', '2 4', '3', '3 4', '4']
    const expected = arr.join('\n')
    const result = fn(n)
    expect(result).toBe(expected)
  })
})
