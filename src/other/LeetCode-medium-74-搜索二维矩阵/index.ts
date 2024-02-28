export function searchMatrix(matrix: number[][], target: number): boolean {
  return case3(matrix, target)
};

function case1(matrix: number[][], target: number): boolean {
  let row = 0, col = 0
  const rowLastIndex = matrix.length - 1
  const colLastIndex = matrix[0].length - 1

  while (0 <= row && row <= rowLastIndex && 0 <= col && col <= colLastIndex) {
    const head = matrix[row][0]
    if (target < head) return false

    const tail = matrix[row][colLastIndex]
    if (target > tail) {
      row++
    } else {
      for (let i = 0; i <= colLastIndex; i++) {
        const item = matrix[row][i]
        if (item === target) return true
        if (item > target) return false
      }
    }
  }

  return false
};

function case2(matrix: number[][], target: number): boolean {
  const binarySearchFirstColumn = () => {
    let head = -1, tail = matrix.length - 1
    while (head < tail) {
      const mid = Math.floor((tail - head + 1) / 2) + head
      if (matrix[mid][0] <= target) {
        head = mid
      } else {
        tail = mid - 1
      }
    }

    return head
  }
  const binarySearchRow = () => {
    let head = 0, tail = matrix[0].length - 1
    while (head <= tail) {
      const mid = Math.floor((head + tail) / 2)
      const item = matrix[row][mid]
      if (item === target) {
        return true
      }
      if (item > target) {
        tail = mid - 1
      } else {
        head = mid + 1
      }
    }

    return false
  }

  let row = binarySearchFirstColumn()
  if (row < 0) {
    return false
  }

  return binarySearchRow()
};

function case3(matrix: number[][], target: number): boolean {
  const rowLength = matrix.length
  const colLength = matrix[0].length
  let head = 0, tail = rowLength * colLength - 1

  while (head <= tail) {
    const mid = Math.floor((head + tail) / 2)
    const rowIndex = Math.floor(mid / colLength)
    const colIndex = mid - rowIndex * colLength
    const item = matrix[rowIndex][colIndex]
    if (item === target) return true
    if (item > target) {
      tail = mid - 1
    } else {
      head = mid + 1
    }
  }

  return false
}
