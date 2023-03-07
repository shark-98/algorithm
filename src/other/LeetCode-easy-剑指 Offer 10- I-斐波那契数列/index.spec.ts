import { describe, it, expect } from 'vitest';
import { fib, base } from './index';

describe('斐波那契数列', () => {
  it('0', () => {
    expect(fib(0)).toBe(0)
  })

  it('1', () => {
    expect(fib(1)).toBe(1)
  })

  it('2', () => {
    expect(fib(2)).toBe(1)
  })

  it('5', () => {
    expect(fib(5)).toBe(5)
  })

  it('8', () => {
    expect(fib(8)).toBe(21)
  })

  it('43', () => {
    expect(fib(43)).toBe(433494437)
  })

  it('45', () => {
    expect(fib(45)).toBe(1134903170 % base)
  })
})
