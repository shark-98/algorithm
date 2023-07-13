export function minFallingPathSum(matrix: number[][]): number {
  return case1(matrix)
};

function case1(matrix: number[][]): number {
  const len = matrix.length;

  const memo = new Array(len).fill(null).map(() => new Array(len).fill(Infinity))

  function dfs(row: number, col: number) {
    if (col < 0 || col >= len) return Infinity; // 出界
    if (row === 0) return matrix[0][col]; // 到达第一行
    if (memo[row][col] !== Infinity) return memo[row][col];

    const top_left = dfs(row - 1, col - 1)
    const top = dfs(row - 1, col)
    const top_right = dfs(row - 1, col + 1)

    const val = Math.min(top_left, top, top_right) + matrix[row][col];

    memo[row][col] = val
    return val
  }

  let r = Infinity;
  for (let col = 0; col < len; col++) {
    r = Math.min(r, dfs(len - 1, col));
  }

  return r;
}

