import { describe, it, expect } from 'vitest';
import { longestPalindrome } from './index';

describe('最长回文子串', () => {
  it('babad', () => {
    const r = longestPalindrome('babad')
    expect(r).toBe('bab')
  })

  it('cbbd', () => {
    const r = longestPalindrome('cbbd')
    expect(r).toBe('bb')
  })
})
