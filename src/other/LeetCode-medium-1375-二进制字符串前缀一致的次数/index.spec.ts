import { describe, it, expect } from 'vitest';
import { numTimesAllBlue } from './index';

describe('二进制字符串前缀一致的次数', () => {
  it('[3,2,4,1,5]', () => {
    expect(numTimesAllBlue([3, 2, 4, 1, 5])).toBe(2)
  })

  it('[4,1,2,3]', () => {
    expect(numTimesAllBlue([4, 1, 2, 3])).toBe(1)
  })
})
