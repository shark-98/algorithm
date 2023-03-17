import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('括号画家', () => {
  it('[[[[]]{}]]', () => {
    const s = '[[[[]]{}]]'

    expect(fn(s)).toBe(10)
  })

  it(')({)[}](', () => {
    const s = ')({)[}]('

    expect(fn(s)).toBe(0)
  })

  it(')[]', () => {
    const s = ')[]'

    expect(fn(s)).toBe(2)
  })

  it('{()})[]', () => {
    const s = '{()})[]'

    expect(fn(s)).toBe(4)
  })

  it('{()})([{}])', () => {
    const s = '{()})([{}])'

    expect(fn(s)).toBe(6)
  })
})
