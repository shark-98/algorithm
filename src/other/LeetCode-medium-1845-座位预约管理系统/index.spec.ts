import { describe, it, expect } from 'vitest';
import { SeatManager } from './index';

describe('座位预约管理系统', () => {
  it('1', () => {
    const s = new SeatManager(5)
    const r1 = s.reserve()
    const r2 = s.reserve()
    s.unreserve(2)
    const r3 = s.reserve()
    const r4 = s.reserve()
    const r5 = s.reserve()
    const r6 = s.reserve()
    s.unreserve(5)

    expect([r1, r2, r3, r4, r5, r6]).toEqual([1, 2, 2, 3, 4, 5])
  })

  it('2', () => {
    const s = new SeatManager(3)
    const r1 = s.reserve()
    const r2 = s.reserve()
    s.unreserve(1)
    s.unreserve(2)
    const r3 = s.reserve()
    s.unreserve(1)
    const r4 = s.reserve()
    s.unreserve(1)

    expect([r1, r2, r3, r4]).toEqual([1, 2, 1, 1])
  })
})
