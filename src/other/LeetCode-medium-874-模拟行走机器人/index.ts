export function robotSim(commands: number[], obstacles: number[][]): number {
  return case1(commands, obstacles)
};

function case1(commands: number[], obstacles: number[][]): number {
  const coord = {
    x: 0,
    y: 0
  }
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 上、右、下、左
  let direction = 0

  let max = 0

  const obstaclesHash = obstacles.reduce((total, cur) => {
    if (!total[cur[0]]) {
      total[cur[0]] = [cur[1]]
    } else {
      total[cur[0]].push(cur[1])
    }
    return total
  }, {})

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    if (command < 0) {
      direction += command === -1 ? 1 : 3
      direction %= 4
    } else {
      const stepArr = directions[direction]

      for (let j = 0; j < command; j++) {
        const x = coord.x + stepArr[0]
        const y = coord.y + stepArr[1]
        if (obstaclesHash[x] && obstaclesHash[x].includes(y)) {
          break
        }
        coord.x = x
        coord.y = y
      }
      const val = Math.pow(coord.x, 2) + Math.pow(coord.y, 2)
      if (val > max) {
        max = val
      }
    }
  }

  return max
};
