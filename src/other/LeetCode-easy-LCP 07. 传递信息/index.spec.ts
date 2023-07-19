import { describe, it, expect } from 'vitest';
import { numWays } from './index';

describe('传递信息', () => {
  it(`
    n = 5, 
    relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], 
    k = 3`,
    () => {
      const n = 5,
        relation = [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]],
        k = 3
      expect(numWays(n, relation, k)).toBe(3)
    }
  )

  it(`
    n = 3,
    relation = [[0, 2], [2, 1]],
    k = 2`,
    () => {
      const n = 3,
        relation = [[0, 2], [2, 1]],
        k = 2
      expect(numWays(n, relation, k)).toBe(0)
    }
  )
})
