import { describe, it, expect } from 'vitest';
import { SeqList } from '.';

describe('SeqList', () => {
  it('new', () => {
    const s = new SeqList(5)
    expect(s.size).toBe(5)
    expect(s.count).toBe(0)
  })

  describe('insert', () => {
    it('insert tail', () => {
      const s = new SeqList(5)
      s.insert(s.count, 10)
      expect(s.data).toEqual([10])

      s.insert(s.count, 20)
      expect(s.data).toEqual([10, 20])

      s.insert(s.count, 30)
      expect(s.data).toEqual([10, 20, 30])
    })
    it('insert head', () => {
      const s = new SeqList(5)
      s.insert(0, 10)
      expect(s.data).toEqual([10])

      s.insert(0, 20)
      expect(s.data).toEqual([20, 10])
    })
    it('insert middle', () => {
      const s = new SeqList(5)
      const source = [10, 20, 30]
      source.forEach((item, index) => s.insert(index, item))
      expect(s.data).toEqual(source)

      s.insert(1, 40)
      expect(s.data).toEqual([10, 40, 20, 30])

      s.insert(2, 50)
      expect(s.data).toEqual([10, 40, 50, 20, 30])
    })
    it('insert discontinuous pos', () => {
      const s = new SeqList(3)
      s.insert(0, 10)
      expect(s.data).toEqual([10])

      s.insert(2, 20)
      expect(s.data).toEqual([10])
    })
    it('insert can automatic expansion pos', () => {
      const s = new SeqList(3)
      const source = [1, 2, 3]
      source.forEach((item, index) => s.insert(index, item))
      expect(s.data).toEqual(source)

      s.insert(3, 4)
      expect(s.data).toEqual([1, 2, 3, 4])
    })
  })

  describe('remove', () => {
    it('remove tail', () => {
      const s = new SeqList(5)
      const source = [1, 2, 3, 4, 5]
      source.forEach((item, index) => s.insert(index, item))
      expect(s.data).toEqual(source)

      s.remove(s.count - 1)
      expect(s.data).toEqual([1, 2, 3, 4])

      s.remove(s.count - 1)
      expect(s.data).toEqual([1, 2, 3])
    })
    it('remove head', () => {
      const s = new SeqList(5)
      const source = [1, 2, 3, 4, 5]
      source.forEach((item, index) => s.insert(index, item))
      expect(s.data).toEqual(source)

      s.remove(0)
      expect(s.data).toEqual([2, 3, 4, 5])

      s.remove(0)
      expect(s.data).toEqual([3, 4, 5])
    })
    it('remove middle', () => {
      const s = new SeqList(5)
      const source = [1, 2, 3, 4, 5]
      source.forEach((item, index) => s.insert(index, item))
      expect(s.data).toEqual(source)

      s.remove(1)
      expect(s.data).toEqual([1, 3, 4, 5])

      s.remove(2)
      expect(s.data).toEqual([1, 3, 5])
    })
    it('remove illegal pos', () => {
      const s = new SeqList(2)
      const source = [1, 2]
      source.forEach((item, index) => s.insert(index, item))
      expect(s.data).toEqual(source)

      s.remove(2)
      expect(s.data).toEqual(source)

      s.remove(3)
      expect(s.data).toEqual(source)
    })
  })

})
