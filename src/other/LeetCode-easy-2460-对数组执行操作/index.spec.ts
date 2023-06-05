import { describe, it, expect } from 'vitest';
import { applyOperations } from './index';

describe('对数组执行操作', () => {
  it('[1,2,2,1,1,0]', () => {
    const r = applyOperations([1, 2, 2, 1, 1, 0])
    expect(r).toEqual([1, 4, 2, 0, 0, 0])
  })

  it('[0,1]', () => {
    const r = applyOperations([0, 1])
    expect(r).toEqual([1, 0])
  })

  it('[847,847,0,0,0,399,416,416,879,879,206,206,206,272]', () => {
    const r = applyOperations([847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272])
    expect(r).toEqual([1694, 399, 832, 1758, 412, 206, 272, 0, 0, 0, 0, 0, 0, 0])
  })
})
