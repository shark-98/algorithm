import { describe, it, expect } from 'vitest';
import { PeekingIterator, Iterator } from './index';

describe('顶端迭代器', () => {
  it('1', () => {
    const obj = new PeekingIterator(new Iterator([1, 2, 3]))
    const param_1 = obj.next()
    const param_2 = obj.peek()
    const param_3 = obj.next()
    const param_4 = obj.next()
    const param_5 = obj.hasNext()

    const r = [param_1, param_2, param_3, param_4, param_5]
    const e = [1, 2, 2, 3, false]

    expect(r).toEqual(e)
  })
})
