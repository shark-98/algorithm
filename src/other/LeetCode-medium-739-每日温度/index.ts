export function dailyTemperatures(temperatures: number[]): number[] {
  return case1(temperatures)
};

function case1(temperatures: number[]): number[] {
  const len = temperatures.length

  const r: number[] = new Array(len).fill(0)

  const stack: number[] = []

  for (let i = 0; i < len; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const topIndex = stack.pop()!
      r[topIndex] = i - topIndex
    }

    stack.push(i)
  }

  return r
};
