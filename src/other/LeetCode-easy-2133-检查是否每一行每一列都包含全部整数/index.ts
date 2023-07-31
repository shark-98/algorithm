export function checkValid(matrix: number[][]): boolean {
  return case1(matrix)
};

function case1(matrix: number[][]): boolean {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    const row = {};
    const col = {};

    for (let j = 0; j < n; j++) {
      const rowVal = matrix[i][j]
      if (row[rowVal]) return false;
      row[rowVal] = true;

      const colVal = matrix[j][i]
      if (col[colVal]) return false;
      col[colVal] = true;
    }
  }

  return true
};
