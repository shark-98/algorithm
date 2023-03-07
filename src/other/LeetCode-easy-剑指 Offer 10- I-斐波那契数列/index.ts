export const base = 1e9 + 7

export function fib(n: number): number {
  const val = case1(n)

  return val
};

function case1(n: number, hash: { [key: string]: number } = {}): number {
  if ([0, 1].includes(n)) return n

  const prev = hash[n - 1] || (hash[n - 1] = case1(n - 1, hash))
  const prev2 = hash[n - 2] || (hash[n - 2] = case1(n - 2, hash))

  return (prev + prev2) % base
}
