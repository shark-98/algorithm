import { describe, it, expect } from 'vitest';
import { robotSim } from './index';

describe('模拟行走机器人', () => {
  it('commands = [4,-1,3], obstacles = []', () => {
    const commands = [4, -1, 3], obstacles = []
    const v = robotSim(commands, obstacles)
    expect(v).toBe(25)
  })

  it('commands = [4,-1,4,-2,4], obstacles = [[2,4]]', () => {
    const commands = [4, -1, 4, -2, 4], obstacles = [[2, 4]]
    const v = robotSim(commands, obstacles)
    expect(v).toBe(65)
  })

  it('commands = [6,-1,-1,6], obstacles = []', () => {
    const commands = [6, -1, -1, 6], obstacles = []
    const v = robotSim(commands, obstacles)
    expect(v).toBe(36)
  })

  it('commands = [7,-2,-2,7,5], obstacles = [[-3,2],[-2,1],[0,1],[-2,4],[-1,0],[-2,-3],[0,-3],[4,4],[-3,3],[2,2]]', () => {
    const commands = [7, -2, -2, 7, 5], obstacles = [[-3, 2], [-2, 1], [0, 1], [-2, 4], [-1, 0], [-2, -3], [0, -3], [4, 4], [-3, 3], [2, 2]]
    const v = robotSim(commands, obstacles)
    expect(v).toBe(4)
  })
})
