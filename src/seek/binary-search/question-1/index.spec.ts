import { describe, expect, it } from "vitest";
import { fn } from ".";

describe('在有序数组中，寻找目标值的下标', () => {
  it('1', () => {
    const arr = [3, 5, 8, 12, 50, 99]
    const target = 12

    const r = fn(arr, target)

    expect(r).toBe(3)
  })

  it('2', () => {
    const n = 100000
    const arr = Array.from({ length: n }, (_, i) => i + 1)
    const target = 9999

    const r = fn(arr, target)

    expect(r).toBe(9998)
  })

  it('3', () => {
    const n = 100
    const arr = Array.from({ length: n }, (_, i) => i + 1)
    const target = 101

    const r = fn(arr, target)

    expect(r).toBe(-1)
  })
})
