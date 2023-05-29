import { describe, it, expect } from 'vitest';
import { freqAlphabets } from './index';

describe('解码字母到整数映射', () => {
  it('10#11#12', () => {
    const r = freqAlphabets("10#11#12")
    expect(r).toBe("jkab")
  })

  it('1326#', () => {
    const r = freqAlphabets("1326#")
    expect(r).toBe("acz")
  })
})
