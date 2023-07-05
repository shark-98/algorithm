import { describe, it, expect } from 'vitest';
import { eliminateMaximum } from './index';

describe('消灭怪物的最大数量', () => {
  it('dist = [1,3,4], speed = [1,1,1]', () => {
    const dist = [1, 3, 4], speed = [1, 1, 1]
    const r = eliminateMaximum(dist, speed);
    expect(r).toBe(3)
  })

  it('dist = [1,1,2,3], speed = [1,1,1,1]', () => {
    const dist = [1, 1, 2, 3], speed = [1, 1, 1, 1]
    const r = eliminateMaximum(dist, speed);
    expect(r).toBe(1)
  })

  it('dist = [3,2,4], speed = [5,3,2]', () => {
    const dist = [3, 2, 4], speed = [5, 3, 2]
    const r = eliminateMaximum(dist, speed);
    expect(r).toBe(1)
  })
})
