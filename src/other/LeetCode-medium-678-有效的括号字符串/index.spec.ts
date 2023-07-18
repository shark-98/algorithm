import { describe, it, expect } from 'vitest';
import { checkValidString } from './index';

describe('有效的括号字符串', () => {
  it(`()`,
    () => {
      expect(checkValidString('()')).toBe(true)
    }
  )

  it(`(*)`,
    () => {
      expect(checkValidString('(*)')).toBe(true)
    }
  )

  it(`())`,
    () => {
      expect(checkValidString('())')).toBe(false)
    }
  )

  it(`(()`,
    () => {
      expect(checkValidString('(()')).toBe(false)
    }
  )

  it(`(*))`,
    () => {
      expect(checkValidString('(*))')).toBe(true)
    }
  )

  it(`((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()`,
    () => {
      expect(checkValidString('((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()')).toBe(true)
    }
  )

  it(`(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())`,
    () => {
      expect(checkValidString('(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())')).toBe(false)
    }
  )
})
