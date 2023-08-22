export function maxDistToClosest(seats: number[]): number {
  return case1(seats)
};

function case1(seats: number[]): number {
  const len = seats.length

  let result = 0, l = 0
  while (l < len && seats[l] === 0) {
    l++
  }

  result = Math.max(result, l)

  while (l < len) {
    let r = l + 1
    while (r < len && seats[r] === 0) {
      r++
    }

    let item = 0
    if (r === len) {
      item = r - l - 1
    } else if (r < len) {
      item = Math.floor((r - l) / 2)
    }
    result = Math.max(result, item)

    l = r
  }

  return result
};
