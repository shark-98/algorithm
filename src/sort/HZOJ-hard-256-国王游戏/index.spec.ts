import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('国王游戏', () => {
  it('[[1, 1], [2, 3], [7, 4], [4, 6]]', () => {
    const arr = [[1, 1], [2, 3], [7, 4], [4, 6]]
    const num = fn(arr)
    expect(num).toBe(2)
    // 排序后为[ [ 1, 1 ], [ 2, 3 ], [ 4, 6 ], [ 7, 4 ] ]
    // 结果为(1 * 2 * 4) / 4 = 2
  })
})
