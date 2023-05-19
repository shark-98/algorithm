/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  return case1(matrix)
};

function case1(matrix: number[][]): void {
  const n = matrix.length - 1
  const arr: number[][] = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = 0; i <= n; i++) {
    IS_CONSOLE && console.log(`\n--第${i}行--`);
    for (let j = 0; j <= n; j++) {
      IS_CONSOLE && console.log(`${matrix[i][j]}(${i},${j}) -> ${matrix[n - j][i]}(${n - j},${i})`);
      arr[i][j] = matrix[n - j][i]
    }
  }

  for (let i = 0; i <= n; i++) {
    matrix[i] = arr[i]
  }
};

const IS_CONSOLE = false
