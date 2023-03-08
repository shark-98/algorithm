export const fn = (n: number, source: string[], target: string): string => {
  return case1(n, source, target)
};

function case1(n: number, source: string[], target: string): string {
  const arr: string[] = []
  let isFountTarget = false

  for (let i = 0; i < n; i++) {
    const char = source[i];

    if (char === target) {
      arr.push(char)
      isFountTarget = true
      break
    }

    if (char === 'return') {
      arr.pop()
    } else {
      arr.push(char)
    }
  }

  if (!isFountTarget) {
    return 'NOT REFERENCED'
  }

  return arr.join('->')
}
