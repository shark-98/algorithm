import { describe, it, expect } from 'vitest';
import { isItPossible } from './index';

describe('使字符串总不同字符的数目相等', () => {
  it('word1 = "ac", word2 = "b"', () => {
    const word1 = "ac", word2 = "b"

    expect(isItPossible(word1, word2)).toBe(false)
  })

  it('word1 = "abcc", word2 = "aab"', () => {
    const word1 = "abcc", word2 = "aab"

    expect(isItPossible(word1, word2)).toBe(true)
  })

  it('word1 = "abcde", word2 = "fghij"', () => {
    const word1 = "abcde", word2 = "fghij"

    expect(isItPossible(word1, word2)).toBe(true)
  })

  it('word1 = "aa", word2 = "ab"', () => {
    const word1 = "aa", word2 = "ab"

    expect(isItPossible(word1, word2)).toBe(false)
  })
})
