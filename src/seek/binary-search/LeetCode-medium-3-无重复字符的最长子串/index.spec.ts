import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './index';

describe('无重复字符的最长子串', () => {
  it('abcabcbb', () => {
    const r = lengthOfLongestSubstring("abcabcbb")
    expect(r).toBe(3)
  })

  it('bbbbb', () => {
    const r = lengthOfLongestSubstring("bbbbb")
    expect(r).toBe(1)
  })

  it('pwwkew', () => {
    const r = lengthOfLongestSubstring("pwwkew")
    expect(r).toBe(3)
  })

  it('au', () => {
    const r = lengthOfLongestSubstring("au")
    expect(r).toBe(2)
  })

  it('aab', () => {
    const r = lengthOfLongestSubstring("aab")
    expect(r).toBe(2)
  })
})
