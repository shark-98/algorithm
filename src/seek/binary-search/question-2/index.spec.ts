import { describe, expect, it } from "vitest";
import { fn } from ".";

describe('根据个人所得税率，由税后算出税前', () => {
  // 不超过3000  -> 3%
  // 不超过12000 -> 10%
  // 不超过25000 -> 20%
  // 不超过35000 -> 25%
  // 不超过55000 -> 30%
  // 不超过80000 -> 35%
  // 超过80000   -> 45%
  it('1', () => {
    const target = 2813

    const r = fn(target)

    expect(r).toBe(2900)
  })

  it('2', () => {
    const target = 16000

    const r = fn(target)

    expect(r).toBe(20000)
  })

  it('3', () => {
    const target = 45000

    const r = fn(target)

    expect(r).toBe(69231)
  })
})
