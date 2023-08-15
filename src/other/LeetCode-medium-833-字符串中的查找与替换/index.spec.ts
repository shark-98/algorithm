import { describe, it, expect } from 'vitest';
import { findReplaceString } from './index';

describe('字符串中的查找与替换', () => {
  it(`
    s = "abcd",
    indices = [0, 2],
    sources = ["a", "cd"],
    targets = ["eee", "ffff"]
  `,
    () => {
      const s = "abcd",
        indices = [0, 2],
        sources = ["a", "cd"],
        targets = ["eee", "ffff"]

      const r = findReplaceString(s, indices, sources, targets)
      expect(r).toBe('eeebffff')
    }
  )

  it(`
    s = "abcd",
    indices = [0, 2],
    sources = ["ab", "ec"],
    targets = ["eee", "ffff"]
  `,
    () => {
      const s = "abcd",
        indices = [0, 2],
        sources = ["ab", "ec"],
        targets = ["eee", "ffff"]

      const r = findReplaceString(s, indices, sources, targets)
      expect(r).toBe('eeecd')
    }
  )
})
