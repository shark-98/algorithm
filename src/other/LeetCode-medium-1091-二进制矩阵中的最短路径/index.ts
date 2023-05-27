export function shortestPathBinaryMatrix(grid: number[][]): number {
  return case1(grid)
};

function case1(grid: number[][]): number {
  const lastPoint = grid.length - 1

  if (grid[0][0] !== 0 || grid[lastPoint][lastPoint] !== 0) return -1

  const directionList = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, -1], // left
    [0, 1], // right
    [-1, -1], // top-left
    [-1, 1], // top-right
    [1, -1], // bottom-left
    [1, 1], // bottom-right
  ]

  let r = 0

  const queue = [[0, 0]]
  grid[0][0] = 1 // 走过的标记为1

  while (queue.length) {
    r++

    let length = queue.length
    IS_CONSOLE && console.log('*********');
    IS_CONSOLE && console.log(`队列：${queue}, 结果：${r}`);
    IS_CONSOLE && console.log('-----------');

    while (length) {
      const [x, y] = queue.shift()!
      IS_CONSOLE && console.log(`当前坐标: (${x}, ${y})`);

      if (x === lastPoint && y === lastPoint) return r

      for (let dir of directionList) {
        const curX = x + dir[0], curY = y + dir[1]
        let log = `下一个坐标: (${curX}, ${curY})`

        if (
          curX < 0
          || curY < 0
          || curX > lastPoint
          || curY > lastPoint
          || grid[curX][curY] === 1
        ) {
          IS_CONSOLE && console.log(log)
          continue
        }

        IS_CONSOLE && console.log(log, '---加入队列')
        queue.push([curX, curY])
        grid[curX][curY] = 1
      }

      length--
    }
  }

  return -1
};

const IS_CONSOLE = false
