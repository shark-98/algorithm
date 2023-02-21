import { describe, it, expect } from 'vitest';
import { fn } from './index';

describe('路飞吃桃', () => {
  it('吃两天桃子的数量', () => {
    const num = fn(2)
    expect(num).toBe(4)
  })

  it('吃三天桃子的数量', () => {
    const num = fn(3)
    expect(num).toBe(10)
  })
})
