export function rowAndMaximumOnes(mat: number[][]): number[] {
  return case1(mat)
};

function case1(mat: number[][]): number[] {
  let index = 0, max = 0

  for (let i = 0, rowMaxIndex = mat.length - 1; i <= rowMaxIndex; i++) {
    let count = 0

    for (let j = 0, colMaxIndex = mat[0].length - 1; j <= colMaxIndex; j++) {
      if (mat[i][j] === 1) {
        count++
      }
    }

    if (count > max) {
      index = i
      max = count
    }
  }

  return [index, max]
}
