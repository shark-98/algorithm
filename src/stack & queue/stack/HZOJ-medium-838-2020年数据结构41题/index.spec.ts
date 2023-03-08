import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('2020年数据结构41题', () => {
  it('[9, 10, 9]', () => {
    const que1 = [-1, 0, 9]
    const que2 = [-25, -10, 10, 11]
    const que3 = [2, 9, 17, 30, 41]

    expect(fn(que1, que2, que3)).toBe(2) // [9, 10, 9]
  })

})
