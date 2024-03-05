export function findTheWinner(n: number, k: number): number {
  return case1(n, k)
};

function case1(n: number, k: number): number {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  let startIndex = 0
  let endIndex = 0
  while (arr.length > 1) {
    endIndex = (startIndex + k - 1) % arr.length
    arr.splice(endIndex, 1)
    startIndex = endIndex
  }

  return arr[0]
};
