import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('逆序对个数', () => {
  it('[9,1,0,5,4]', () => {
    expect(fn([9, 1, 0, 5, 4])).toBe(6)
  })

  it('[9,1,4,0,5,4]', () => {
    expect(fn([9, 1, 4, 0, 5, 4])).toBe(8)
  })

  it('[1,2,3]', () => {
    expect(fn([1, 2, 3])).toBe(0)
  })
})
