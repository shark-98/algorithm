import { describe, it, expect } from 'vitest';
import { solveEquation } from './index';

const test = (equation: string, s: string) => {
  return () => {
    const r = solveEquation(equation)
    expect(r).toBe(s)
  }
}

describe('求解方程', () => {
  it('"x+5-3+x=6+x-2"', test("x+5-3+x=6+x-2", "x=2"))

  it('"x=x"', test("x=x", "Infinite solutions"))

  it('"2x=x"', test("2x=x", "x=0"))

  it('"2x+3x-6x=x+2"', test("2x+3x-6x=x+2", "x=-1"))

  it('"x=x+2"', test("x=x+2", "No solution"))

  it('"0x=0"', test("0x=0", "Infinite solutions"))
})
