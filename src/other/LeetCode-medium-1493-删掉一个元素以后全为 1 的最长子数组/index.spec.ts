import { describe, it, expect } from 'vitest';
import { longestSubarray } from './index';

describe('删掉一个元素以后全为 1 的最长子数组', () => {
  it('[1,1,0,1]', () => {
    const r = longestSubarray([1, 1, 0, 1])
    expect(r).toBe(3)
  })

  it('[0,1,1,1,0,1,1,0,1]', () => {
    const r = longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])
    expect(r).toBe(5)
  })

  it('[1,1,1]', () => {
    const r = longestSubarray([1, 1, 1])
    expect(r).toBe(2)
  })

  it('[1,1,1,0]', () => {
    const r = longestSubarray([1, 1, 1, 0])
    expect(r).toBe(3)
  })

  it('[0,1,1,1]', () => {
    const r = longestSubarray([0, 1, 1, 1])
    expect(r).toBe(3)
  })

  it('[1,1,1,0,0,0]', () => {
    const r = longestSubarray([1, 1, 1, 0, 0, 0])
    expect(r).toBe(3)
  })

  it('[0,0,1,1]', () => {
    const r = longestSubarray([0, 0, 1, 1])
    expect(r).toBe(2)
  })

  it('[1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1]', () => {
    const r = longestSubarray([1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1])
    expect(r).toBe(14)
  })
})
