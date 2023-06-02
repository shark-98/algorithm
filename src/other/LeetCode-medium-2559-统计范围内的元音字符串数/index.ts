export function vowelStrings(words: string[], queries: number[][]): number[] {
  return case1(words, queries)
};

function case1(words: string[], queries: number[][]): number[] {
  const hash = {}
  const list = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0, len = words.length; i < len; i++) {
    const s = words[i]
    const count = list.includes(s[0]) && list.includes(s[s.length - 1])
    hash[i] = (hash[i - 1] || 0) + count
  }

  const r: number[] = []

  for (let i = 0, len = queries.length; i < len; i++) {
    const [start, end] = queries[i]
    r[i] = hash[end] - (hash[start - 1] || 0)
  }

  return r
};
