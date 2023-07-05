import { describe, it, expect } from 'vitest';
import { findContinuousSequence } from './index';

describe('和为s的连续正数序列', () => {
  it('9', () => {
    expect(findContinuousSequence(9)).toEqual([[2, 3, 4], [4, 5]])
  })

  it('15', () => {
    expect(findContinuousSequence(15)).toEqual([[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]])
  })
})
