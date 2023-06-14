export function numTimesAllBlue(flips: number[]): number {
  return case2(flips)
};

function case1(flips: number[]): number {
  const hash = {}
  let activeIndex = 1
  let r = 0

  for (let i = 1, len = flips.length; i < len + 1; i++) {
    hash[flips[i - 1]] = true

    let isLack = false
    for (let j = activeIndex; j <= i; j++) {
      if (!hash[j]) {
        isLack = true
        activeIndex = j
        break
      }
    }

    if (!isLack) {
      activeIndex = i
      r += 1
    }
  }

  return r
};

function case2(flips: number[]): number {
  let r = 0, max = 0

  for (let i = 0, len = flips.length; i < len; i++) {
    max = Math.max(max, flips[i])

    if (max === i + 1) r++
  }

  return r
}
