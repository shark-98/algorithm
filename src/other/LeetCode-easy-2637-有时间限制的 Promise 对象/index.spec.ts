import { describe, it, expect } from 'vitest';
import { timeLimit } from './index';

describe('有时间限制的 Promise 对象', () => {
  it('1', async () => {
    const fn = async (n) => {
      await new Promise(res => setTimeout(res, 100));
      return n * n;
    }
    const t = 50
    const inputs = [5]

    const func = timeLimit(fn, t)
    const r = await func(...inputs)

    expect(r).toBe('Time Limit Exceeded')
  })

  it('2', async () => {
    const fn = async (n) => {
      await new Promise(res => setTimeout(res, 100));
      return n * n;
    }
    const t = 150
    const inputs = [5]

    const func = timeLimit(fn, t)
    const r = await func(...inputs)

    expect(r).toBe(25)
  })

  it('3', async () => {
    const fn = async (a, b) => {
      await new Promise(res => setTimeout(res, 120));
      return a + b;
    }
    const t = 150
    const inputs = [5, 10]

    const func = timeLimit(fn, t)
    const r = await func(...inputs)
    expect(r).toBe(15)
  })

  it('4', async () => {
    const fn = async () => {
      throw "Error";
    }
    const t = 1000
    const inputs = []

    const func = timeLimit(fn, t)
    const r = await func(...inputs)
    expect(r).toBe('Error')
  })
})
