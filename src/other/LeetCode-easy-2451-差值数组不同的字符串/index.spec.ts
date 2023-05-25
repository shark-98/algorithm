import { describe, it, expect } from 'vitest';
import { oddString } from './index';

describe('差值数组不同的字符串', () => {
  it('["adc","wzy","abc"]', () => {
    const r = oddString(["adc", "wzy", "abc"])
    expect(r).toBe("abc")
  })

  it('["abc","adc","wzy"]', () => {
    const r = oddString(["abc", "adc", "wzy"])
    expect(r).toBe("abc")
  })

  it('["aaa","bob","ccc","ddd"]', () => {
    const r = oddString(["aaa", "bob", "ccc", "ddd"])
    expect(r).toBe("bob")
  })
})
