import { describe, it, expect } from 'vitest';
import { maximumSwap } from './index';

describe('最大交换', () => {
  it(`2736`,
    () => {
      expect(maximumSwap(2736)).toBe(7236)
    }
  )

  it(`9973`,
    () => {
      expect(maximumSwap(9973)).toBe(9973)
    }
  )

  it(`1993`,
    () => {
      expect(maximumSwap(1993)).toBe(9913)
    }
  )

  it(`98368`,
    () => {
      expect(maximumSwap(98368)).toBe(98863)
    }
  )
})
