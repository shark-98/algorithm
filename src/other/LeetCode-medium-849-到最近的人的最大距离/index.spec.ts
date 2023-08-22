import { describe, it, expect } from 'vitest';
import { maxDistToClosest } from './index';

describe('到最近的人的最大距离', () => {
  it('[1,0,0,0,1,0,1]', () => {
    const r = maxDistToClosest([1, 0, 0, 0, 1, 0, 1])
    expect(r).toBe(2)
  })

  it('[1,0,0,0]', () => {
    const r = maxDistToClosest([1, 0, 0, 0])
    expect(r).toBe(3)
  })

  it('[0,1]', () => {
    const r = maxDistToClosest([0, 1])
    expect(r).toBe(1)
  })

  it('[1,0,0,1]', () => {
    const r = maxDistToClosest([1, 0, 0, 1])
    expect(r).toBe(1)
  })
})
