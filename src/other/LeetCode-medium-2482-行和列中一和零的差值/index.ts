export function onesMinusZeros(grid: number[][]): number[][] {
  return case2(grid)
};

function case1(grid: number[][]): number[][] {
  const m = grid.length
  const n = grid[0].length

  const onesRow: number[] = new Array(m).fill(0)
  const onesCol: number[] = new Array(n).fill(0)
  const zerosRow: number[] = new Array(m).fill(0)
  const zerosCol: number[] = new Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = grid[i][j]
      if (val === 1) {
        onesRow[i]++
        onesCol[j]++
      }
      if (val === 0) {
        zerosRow[i]++
        zerosCol[j]++
      }
    }
  }

  const r: number[][] = new Array(m).fill(0).map(i => [])
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      r[i][j] = onesRow[i] + onesCol[j] - (zerosRow[i] + zerosCol[j])
    }
  }

  return r
};

function case2(grid: number[][]): number[][] {
  const m = grid.length
  const n = grid[0].length

  const countRow: number[] = new Array(m).fill(0)
  const countCol: number[] = new Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = grid[i][j]
      if (val === 1) {
        countRow[i]++
        countCol[j]++
      }
      if (val === 0) {
        countRow[i]--
        countCol[j]--
      }
    }
  }

  const r: number[][] = []

  for (let i = 0; i < m; i++) {
    const arr: number[] = []
    for (let j = 0; j < n; j++) {
      arr[j] = countRow[i] + countCol[j]
    }
    r[i] = arr
  }

  return r
};
