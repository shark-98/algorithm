export function countServers(grid: number[][]): number {
  return case2(grid)
};

function case1(grid: number[][]): number {
  const coord: { [key: string]: number[] } = {}

  for (let i = 0, len = grid.length; i < len; i++) {
    const row = grid[i];

    for (let j = 0, len1 = row.length; j < len1; j++) {
      if (row[j] === 1) {
        const rowKey = `row-${i}`
        if (!coord[rowKey]) {
          coord[rowKey] = []
        }
        coord[rowKey].push(j)

        const colKey = `col-${j}`
        if (!coord[colKey]) {
          coord[colKey] = []
        }
        coord[colKey].push(i)
      }
    }
  }

  const arr: string[] = []
  Object.keys(coord).forEach(k => {
    if (coord[k].length <= 1) {
      return
    }

    const [a, b] = k.split('-')

    coord[k].forEach(v => {
      const isRow = a === 'row'
      const x = isRow ? b : v
      const y = isRow ? v : b
      const val = `${x}-${y}`
      if (!arr.includes(val)) {
        arr.push(val)
      }
    })
  })

  return arr.length
};

function case2(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  const row = {}
  const col = {}
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        row[i] = (row[i] || 0) + 1
        col[j] = (col[j] || 0) + 1
      }
    }
  }

  let r = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (row[i] > 1 || col[j] > 1)) {
        r++
      }
    }
  }

  return r
}
