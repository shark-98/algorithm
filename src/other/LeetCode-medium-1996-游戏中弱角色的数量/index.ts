export function numberOfWeakCharacters(properties: number[][]): number {
  return case1(properties)
};

function case1(properties: number[][]): number {
  properties.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);

  let r = 0
  let maxDefense = 0

  for (const p of properties) {
    if (p[1] < maxDefense) {
      r++
    } else {
      maxDefense = p[1];
    }
  }

  return r
};
