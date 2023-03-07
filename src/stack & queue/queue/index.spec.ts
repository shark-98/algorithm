import { describe, it, expect } from 'vitest';
import { Queue } from '.';

describe('queue', () => {
  it('init', () => {
    const size = 10
    const q = new Queue<number>(size)
    expect(q).toEqual({
      size,
      count: 0,
      head: 0,
      tail: 0,
      data: [],
    })
  })

  describe('push', () => {
    it('push normal', () => {
      const size = 10
      const q = new Queue<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [1],
      })
      q.push(2)
      expect(q).toEqual({
        size,
        count: 2,
        head: 0,
        tail: 2,
        data: [1, 2],
      })
    })
    it('push over', () => {
      const size = 1
      const q = new Queue<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [1],
      })
      q.push(2)
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [1],
      })
    })
  })

  describe('pop', () => {
    it('pop normal', () => {
      const size = 10
      const q = new Queue<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [1],
      })
      q.push(2)
      expect(q).toEqual({
        size,
        count: 2,
        head: 0,
        tail: 2,
        data: [1, 2],
      })
      q.pop()
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [2],
      })
    })
    it('pop over', () => {
      const size = 1
      const q = new Queue<number>(size)
      q.pop()
      expect(q).toEqual({
        size,
        count: 0,
        head: 0,
        tail: 0,
        data: [],
      })
    })
  })

  describe('empty', () => {
    it('empty false', () => {
      const size = 10
      const q = new Queue<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [1],
      })
      expect(q.empty()).toBe(false)
    })
    it('empty true', () => {
      const size = 10
      const q = new Queue<number>(size)
      q.push(1)
      expect(q).toEqual({
        size,
        count: 1,
        head: 0,
        tail: 1,
        data: [1],
      })
      expect(q.empty()).toBe(false)

      q.pop()
      expect(q).toEqual({
        size,
        count: 0,
        head: 0,
        tail: 0,
        data: [],
      })
      expect(q.empty()).toBe(true)
    })
  })

  it('front', () => {
    const size = 10
    const q = new Queue<number>(size)
    q.push(1)
    expect(q).toEqual({
      size,
      count: 1,
      head: 0,
      tail: 1,
      data: [1],
    })
    q.push(2)
    expect(q).toEqual({
      size,
      count: 2,
      head: 0,
      tail: 2,
      data: [1, 2],
    })
    expect(q.front()).toBe(1)
  })
})
