import { describe, it, expect } from 'vitest';
import { dailyTemperatures } from './index';

describe('每日温度', () => {
  it('temperatures = [73,74,75,71,69,72,76,73]', () => {
    const v = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
    expect(v).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
  })

  it('temperatures = [30,40,50,60]', () => {
    const v = dailyTemperatures([30, 40, 50, 60])
    expect(v).toEqual([1, 1, 1, 0])
  })

  it('temperatures = [30,60,90]', () => {
    const v = dailyTemperatures([30, 60, 90])
    expect(v).toEqual([1, 1, 0])
  })
})
