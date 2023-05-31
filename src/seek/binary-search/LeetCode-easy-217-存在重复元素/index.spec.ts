import { describe, it, expect } from 'vitest';
import { containsDuplicate } from './index';

describe('存在重复元素', () => {
  it('[1,2,3,1]', () => {
    const r = containsDuplicate([1, 2, 3, 1])
    expect(r).toBe(true)
  })

  it('[1,2,3,4]', () => {
    const r = containsDuplicate([1, 2, 3, 4])
    expect(r).toBe(false)
  })

  it('[1,1,1,3,3,4,3,2,4,2]', () => {
    const r = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
    expect(r).toBe(true)
  })
})
