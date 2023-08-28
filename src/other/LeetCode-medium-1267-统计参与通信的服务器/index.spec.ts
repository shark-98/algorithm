import { describe, it, expect } from 'vitest';
import { countServers } from './index';

describe('统计参与通信的服务器', () => {
  it('[[1,0],[0,1]]', () => {
    const r = countServers([[1, 0], [0, 1]])
    expect(r).toBe(0)
  })

  it('[[1,0],[1,1]]', () => {
    const r = countServers([[1, 0], [1, 1]])
    expect(r).toBe(3)
  })

  it('[[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]', () => {
    const r = countServers([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    expect(r).toBe(4)
  })
})
