export function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
  return case1(s, indices, sources, targets)
};

function case1(s: string, indices: number[], sources: string[], targets: string[]): string {
  let r = ''
  const hash = indices.reduce((total, cur, index) => {
    total[cur] = index
    return total
  }, {})

  for (let i = 0; i < s.length; i++) {
    const c = s[i]

    const index = hash[i]
    if (index !== undefined) {
      const sourcesStr = sources[index]
      const sourcesStrLen = sourcesStr.length
      const str = s.slice(i, i + sourcesStrLen)

      if (str === sourcesStr) {
        r += targets[index]
        i += sourcesStrLen - 1
      } else {
        r += c
      }
    } else {
      r += c
    }
  }

  return r
};
