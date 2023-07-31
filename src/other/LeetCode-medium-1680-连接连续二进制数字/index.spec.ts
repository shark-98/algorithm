import { describe, it, expect } from 'vitest';
import { concatenatedBinary } from './index';

describe('连接连续二进制数字', () => {
  it('1', () => {
    const r = concatenatedBinary(1)
    expect(r).toBe(1)
  })

  it('3', () => {
    const r = concatenatedBinary(3)
    expect(r).toBe(27)
  })

  it('12', () => {
    const r = concatenatedBinary(12)
    expect(r).toBe(505379714)
  })

  it('42', () => {
    const r = concatenatedBinary(42)
    expect(r).toBe(727837408)
  })
})
