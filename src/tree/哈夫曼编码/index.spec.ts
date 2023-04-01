import { describe, it, expect } from 'vitest';
import { createHuffmanCode } from './index';

describe('哈夫曼编码', () => {
  it('abdcdbdcdf', () => {
    const code = createHuffmanCode('abdcdbdcdf')
    expect(code).toEqual({ d: '0', c: '10', b: '110', f: '1110', a: '1111' })
  })
})
