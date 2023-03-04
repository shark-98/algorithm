export function isHappy(n: number): boolean {
  return case3(n)
};

const getConvertedNumber = (n: number): number => {
  let sum: number = 0

  while (n / 10) {
    sum += Math.pow(n % 10, 2)
    n = parseInt(`${n / 10}`)
  }

  return sum
}

export function case1(n: number, hash: { [key: number]: boolean } = {}): boolean {
  if (n === 1) {
    return true
  }

  hash[n] = true

  const sum = getConvertedNumber(n)

  if (hash[sum] && sum !== 1) {
    return false
  }

  return case1(sum, hash)
};

export function case2(n: number): boolean {
  if (n === 1) {
    return true
  }

  const hash = {}

  while (!hash[n]) {
    hash[n] = true
    n = getConvertedNumber(n)

    if (n === 1) {
      return true
    }
  }

  return false
};

export function case3(n: number): boolean {
  let p = n
  let q = n

  while (q !== 1) {
    p = getConvertedNumber(p)
    q = getConvertedNumber(getConvertedNumber(q))

    if (p === q && p !== 1) {
      return false
    }
  }

  return true
}
