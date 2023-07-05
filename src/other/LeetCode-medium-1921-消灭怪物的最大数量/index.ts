export function eliminateMaximum(dist: number[], speed: number[]): number {
  return case1(dist, speed)
};

function case1(dist: number[], speed: number[]): number {
  let count = 0

  const arr: number[] = []
  for (let i = 0; i < dist.length; i++) {
    arr.push(Math.ceil(dist[i] / speed[i]))
  }
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (count >= arr[i]) {
      break
    } else {
      count++
    }
  }

  return count
};
