import { describe, it, expect } from 'vitest';
import { fn } from '.';

describe('程序调用关系', () => {
  it('5', () => {
    const n = 5
    const source = ['fun1()', 'fun2()', 'return', 'fun3()', 'fun4()']
    const target = 'fun4()'

    const result = 'fun1()->fun3()->fun4()'
    expect(fn(n, source, target)).toBe(result)
  })

  it('1', () => {
    const n = 1
    const source = ['fun1()']
    const target = 'fun4()'

    const result = 'NOT REFERENCED'
    expect(fn(n, source, target)).toBe(result)
  })

  it('1', () => {
    const n = 1
    const source = ['fun1()']
    const target = 'fun1()'

    const result = 'fun1()'
    expect(fn(n, source, target)).toBe(result)
  })

  it('2', () => {
    const n = 2
    const source = ['fun1()', 'return']
    const target = 'fun1()'

    const result = 'fun1()'
    expect(fn(n, source, target)).toBe(result)
  })
})
