import { describe, it, expect } from 'vitest';
import { isValid } from '.';

describe('有效的括号', () => {
  it('()', () => {
    expect(isValid('()')).toBe(true);
  })

  it('()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true);
  })

  it('(]', () => {
    expect(isValid('(]')).toBe(false);
  })

  it('(', () => {
    expect(isValid('(')).toBe(false);
  })
})
