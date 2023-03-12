import { describe, it, expect } from 'vitest';
import { backspaceCompare } from '.';

describe('比较含退格的字符串', () => {
  it('s = "ab#c", t = "ad#c"', () => {
    const s = "ab#c";
    const t = "ad#c";
    expect(backspaceCompare(s, t)).toBe(true)
  })

  it('s = "ab##", t = "c#d#"', () => {
    const s = "ab##";
    const t = "c#d#";
    expect(backspaceCompare(s, t)).toBe(true)
  })

  it('s = "a#c", t = "b"', () => {
    const s = "a#c";
    const t = "b";
    expect(backspaceCompare(s, t)).toBe(false)
  })
})
