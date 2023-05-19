export function sumOfThree(num: number): number[] {
  return case1(num)
};

function case1(num: number): number[] {
  if (num % 3 !== 0) {
    return []
  }

  const mid = num / 3
  return [mid - 1, mid, mid + 1]
};
