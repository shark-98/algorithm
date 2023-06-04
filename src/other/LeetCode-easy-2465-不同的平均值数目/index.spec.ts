import { describe, it, expect } from 'vitest';
import { distinctAverages } from './index';

describe('不同的平均值数目', () => {
  it('[4,1,4,0,3,5]', () => {
    const r = distinctAverages([4, 1, 4, 0, 3, 5])
    expect(r).toBe(2)
  })

  it('[1,100]', () => {
    const r = distinctAverages([1, 100])
    expect(r).toBe(1)
  })
})
