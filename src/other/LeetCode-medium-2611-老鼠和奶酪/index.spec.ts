import { describe, it, expect } from 'vitest';
import { miceAndCheese } from './index';

describe('老鼠和奶酪', () => {
  it('reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2', () => {
    const reward1 = [1, 1, 3, 4], reward2 = [4, 4, 1, 1], k = 2
    const r = miceAndCheese(reward1, reward2, k)
    expect(r).toEqual(15)
  })

  it('reward1 = [1,1], reward2 = [1,1], k = 2', () => {
    const reward1 = [1, 1], reward2 = [1, 1], k = 2
    const r = miceAndCheese(reward1, reward2, k)
    expect(r).toEqual(2)
  })

  it('reward1 = [2,1], reward2 = [1,2], k = 1', () => {
    const reward1 = [2, 1], reward2 = [1, 2], k = 1
    const r = miceAndCheese(reward1, reward2, k)
    expect(r).toEqual(4)
  })

  it('reward1 = [1,4,4,6,4], reward2 = [6,5,3,6,1], k = 1', () => {
    const reward1 = [1, 4, 4, 6, 4], reward2 = [6, 5, 3, 6, 1], k = 1
    const r = miceAndCheese(reward1, reward2, k)
    expect(r).toEqual(24)
  })

  it('reward1 = [1,3,3,1,2,3], reward2 = [2,2,1,2,1,2], k = 4', () => {
    const reward1 = [1, 3, 3, 1, 2, 3], reward2 = [2, 2, 1, 2, 1, 2], k = 4
    const r = miceAndCheese(reward1, reward2, k)
    expect(r).toEqual(15)
  })
})
