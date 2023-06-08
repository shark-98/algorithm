import { describe, it, expect } from 'vitest';
import { computeArea } from './index';

describe('矩形面积', () => {
  it('ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2', () => {
    const ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
    const r = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)
    expect(r).toBe(45)
  })

  it('ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2', () => {
    const ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
    const r = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)
    expect(r).toBe(16)
  })
})
