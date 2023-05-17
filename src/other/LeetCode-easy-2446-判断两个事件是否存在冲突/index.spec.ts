import { describe, it, expect } from 'vitest';
import { haveConflict } from './index';

describe('判断两个事件是否存在冲突', () => {
  it('event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]', () => {
    const event1 = ["01:15", "02:00"], event2 = ["02:00", "03:00"]
    const r = haveConflict(event1, event2)
    expect(r).toBe(true)
  })

  it('event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]', () => {
    const event1 = ["01:00", "02:00"], event2 = ["01:20", "03:00"]
    const r = haveConflict(event1, event2)
    expect(r).toBe(true)
  })

  it('event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]', () => {
    const event1 = ["10:00", "11:00"], event2 = ["14:00", "15:00"]
    const r = haveConflict(event1, event2)
    expect(r).toBe(false)
  })
})
