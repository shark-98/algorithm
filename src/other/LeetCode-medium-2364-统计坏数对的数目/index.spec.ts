import { describe, it, expect } from 'vitest';
import { countBadPairs } from './index';

describe('统计坏数对的数目', () => {
  it('[4,1,3,3]', () => {
    const v = countBadPairs([4, 1, 3, 3])
    expect(v).toEqual(5)
  })

  it('[1,2,3,4,5]', () => {
    const v = countBadPairs([1, 2, 3, 4, 5])
    expect(v).toEqual(0)
  })
})
