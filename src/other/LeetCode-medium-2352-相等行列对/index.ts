export function equalPairs(grid: number[][]): number {
  return case2(grid)
};

function case1(grid: number[][]): number {
  const n = grid.length
  const hashRow = {}
  const hashCol = {}
  const count: string[] = []

  for (let i = 0; i < n; i++) {
    let row = ''
    let col = ''
    for (let j = 0; j < n; j++) {
      row += grid[i][j] + ';'
      col += grid[j][i] + ';'
    }
    const index = i + 1
    hashRow[row] = `${hashRow[row] || ''}${index};`
    hashCol[col] = `${hashCol[col] || ''}${index};`

    if (hashCol[row]) {
      const arr = hashCol[row].split(';').filter(x => Boolean(x))
      arr.forEach(x => count.push(`${index}-${x}`))
    }
    if (hashRow[col]) {
      const arr = hashRow[col].split(';').filter(x => Boolean(x))
      arr.forEach(x => count.push(`${x}-${index}`))
    }
  }

  return [...new Set(count)].length
};

function case2(grid: number[][]): number {
  const n = grid.length
  let count = 0

  const hash = {}
  for (let i = 0; i < n; i++) {
    const row = grid[i].join('-')
    hash[row] = (hash[row] || 0) + 1
  }

  for (let i = 0; i < n; i++) {
    let col = ''
    for (let j = 0; j < n; j++) {
      col += `${j === 0 ? '' : '-'}${grid[j][i]}`
    }

    const c = hash[col] || 0
    count += c
  }

  return count
}
