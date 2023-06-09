export function spiralOrder(matrix: number[][]): number[] {
  return case2(matrix)
};

function case1(matrix: number[][]): number[] {
  const m = matrix[0].length // 行
  const n = matrix.length // 列

  const result: number[] = []

  let top = 0, bottom = n - 1, left = 0, right = m - 1
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) {
      result.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) {
      result.push(matrix[i][left])
    }
    top++
    bottom--
    left++
    right--
  }

  if (top === bottom)
    for (let i = left; i <= right; i++) result.push(matrix[top][i])

  else if (left === right)
    for (let i = top; i <= bottom; i++) result.push(matrix[i][left])

  return result
};

function case2(matrix: number[][]): number[] {
  const result: number[] = []

  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    if (top > bottom || left > right) break

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }

  return result
};
