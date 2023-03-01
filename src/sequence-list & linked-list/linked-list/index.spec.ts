import { describe, it, expect } from 'vitest';
import { LinkList } from '.';

describe('LinkList', () => {
  it('new', () => {
    const p = new LinkList(1)
    expect(p).toEqual({ val: 1, next: null })
  })

  describe('insert', () => {
    it('insert tail', () => {
      const p = new LinkList(1)

      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      p.insert(2, 3)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })
    })
    it('insert head', () => {
      const p = new LinkList(1)

      p.insert(0, 2)
      expect(p).toEqual({ val: 2, next: { val: 1, next: null } })

      p.insert(0, 3)
      expect(p).toEqual({ val: 3, next: { val: 2, next: { val: 1, next: null } } })
    })
    it('insert middle', () => {
      const p = new LinkList(1)

      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      p.insert(2, 3)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })

      p.insert(1, 4)
      expect(p).toEqual({ val: 1, next: { val: 4, next: { val: 2, next: { val: 3, next: null } } } })
    })
    it('insert discontinuous pos', () => {
      const p = new LinkList(1)
      expect(p).toEqual({ val: 1, next: null })

      p.insert(-1, 2)
      expect(p).toEqual({ val: 1, next: null })

      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      p.insert(2, 3)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })

      p.insert(4, 4)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })
    })
  })

  describe('remove', () => {
    it('remove tail', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      p.remove(1)
      expect(p).toEqual({ val: 1, next: null })
    })
    it('remove head', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      p.remove(0)
      expect(p).toEqual({ val: 2, next: null })
    })
    it('remove middle', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })
      p.insert(2, 3)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })

      p.remove(1)
      expect(p).toEqual({ val: 1, next: { val: 3, next: null } })
    })
    it('remove discontinuous pos', () => {
      const p = new LinkList(1)
      expect(p).toEqual({ val: 1, next: null })
      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })
      p.insert(2, 3)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })

      p.remove(-1)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })

      p.remove(3)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: null } } })
    })
  })

  describe('find', () => {
    it('find tail', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      const node = p.find(2)
      expect(node).toEqual({ val: 2, next: null })
    })
    it('find head', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })

      const node = p.find(1)
      expect(p).toEqual({ val: 1, next: { val: 2, next: null } })
    })
    it('find middle', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      p.insert(2, 3)
      p.insert(3, 4)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } })

      const node = p.find(3)
      expect(node).toEqual({ val: 3, next: { val: 4, next: null } })
    })
    it('find nonexistent val', () => {
      const p = new LinkList(1)
      p.insert(1, 2)
      p.insert(2, 3)
      p.insert(3, 4)
      expect(p).toEqual({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } })

      const node = p.find(5)
      expect(node).toEqual(null)
    })
  })
})
