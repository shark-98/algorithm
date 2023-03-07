import { describe, expect, it } from 'vitest';
import { Stack } from '.';

describe('stack', () => {
  it('init', () => {
    const size = 10
    const s = new Stack<number>(size)
    expect(s).toEqual({
      size,
      data: [],
      top: -1
    })
  })

  describe('push', () => {
    it('push normal', () => {
      const size = 10
      const q = new Stack<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
      q.push(2)
      expect(q).toEqual({
        size,
        top: 1,
        data: [1, 2],
      })
    })
    it('push over', () => {
      const size = 1
      const q = new Stack<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
      q.push(2)
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
    })
  })

  describe('pop', () => {
    it('pop normal', () => {
      const size = 10
      const q = new Stack<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
      q.push(2)
      expect(q).toEqual({
        size,
        top: 1,
        data: [1, 2],
      })
      q.pop()
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
    })
    it('pop over', () => {
      const size = 1
      const q = new Stack<number>(size)
      q.pop()
      expect(q).toEqual({
        size,
        top: -1,
        data: [],
      })
    })
  })

  describe('empty', () => {
    it('empty false', () => {
      const size = 10
      const q = new Stack<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
      expect(q.empty()).toBe(false)
    })
    it('empty true', () => {
      const size = 10
      const q = new Stack<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        top: 0,
        data: [1],
      })
      expect(q.empty()).toBe(false)

      q.pop()
      expect(q).toEqual({
        size,
        top: -1,
        data: [],
      })
      expect(q.empty()).toBe(true)
    })
  })

  it('getTop', () => {
    const size = 10
    const q = new Stack<number>(size)
    q.push(1)
    expect(q).toEqual({
      size,
      top: 0,
      data: [1],
    })
    q.push(2)
    expect(q).toEqual({
      size,
      top: 1,
      data: [1, 2],
    })
    expect(q.getTop()).toBe(2)
  })
})
