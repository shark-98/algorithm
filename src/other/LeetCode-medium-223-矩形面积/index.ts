export function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
  return case1(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)
};

function case1(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
  const areaSum = (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1)

  if (bx1 > ax2 || bx2 < ax1 || by1 > ay2 || by2 < ay1) {
    return areaSum
  }

  const x = Math.min(ax2, bx2) - Math.max(ax1, bx1)
  const y = Math.min(ay2, by2) - Math.max(ay1, by1)

  return areaSum - x * y
};
