import { describe, it, expect } from 'vitest';
import { SortRule } from '../index';
import { quickSort, quickSort1, quickSort2, quickSort3, quickSort4 } from './index';

describe('快速排序', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const arr = quickSort([2, 1], rule)
      expect(arr).toEqual([1, 2])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([1, 2, 4, 5, 7])
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const arr = quickSort([2, 1], rule)
      expect(arr).toEqual([2, 1])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([7, 5, 4, 2, 1])
    })
  })
})

describe('快速排序-优化1', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const arr = quickSort1([2, 1], rule)
      expect(arr).toEqual([1, 2])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort1([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([1, 2, 4, 5, 7])
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const arr = quickSort1([2, 1], rule)
      expect(arr).toEqual([2, 1])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort1([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([7, 5, 4, 2, 1])
    })
  })
})

describe('快速排序-优化2', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const arr = quickSort2([2, 1], rule)
      expect(arr).toEqual([1, 2])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort2([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([1, 2, 4, 5, 7])
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const arr = quickSort2([2, 1], rule)
      expect(arr).toEqual([2, 1])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort2([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([7, 5, 4, 2, 1])
    })
  })
})

describe('快速排序-优化3', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const arr = quickSort3([2, 1], rule)
      expect(arr).toEqual([1, 2])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort3([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([1, 2, 4, 5, 7])
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const arr = quickSort3([2, 1], rule)
      expect(arr).toEqual([2, 1])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort3([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([7, 5, 4, 2, 1])
    })
  })
})

describe('快速排序-优化4', () => {
  describe('升序', () => {
    const rule = SortRule.ASC

    it('[2,1]', () => {
      const arr = quickSort4([2, 1], rule)
      expect(arr).toEqual([1, 2])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort4([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([1, 2, 4, 5, 7])
    })
  })

  describe('降序', () => {
    const rule = SortRule.DESC

    it('[2,1]', () => {
      const arr = quickSort4([2, 1], rule)
      expect(arr).toEqual([2, 1])
    })

    it('[2,1,5,7,4]', () => {
      const arr = quickSort4([2, 1, 5, 7, 4], rule)
      expect(arr).toEqual([7, 5, 4, 2, 1])
    })
  })
})
