export function maximumEvenSplit(finalSum: number): number[] {
  return case1(finalSum)
};

function case1(finalSum: number): number[] {
  if (finalSum % 2 !== 0) return []

  const r: number[] = [];
  for (let i = 2; i <= finalSum; i += 2) {
    r.push(i);
    finalSum -= i;
  }

  r[r.length - 1] += finalSum;

  return r;
};
