export function oddString(words: string[]): string {
  return case2(words)
};

const getGap = (s: string): string => {
  let gap = ''

  for (let i = 0; i < s.length - 1; i++) {
    gap += `${s[i + 1].charCodeAt(0) - s[i].charCodeAt(0)}`
  }

  return gap
}

function case1(words: string[]): string {
  const hash = {}
  let isRepeated = false

  for (let i = 0; i < words.length; i++) {
    const str = words[i]

    const gap = getGap(str)

    if (!hash[gap]) {
      if (!isRepeated) {
        hash[gap] = str
      } else {
        return str
      }
    } else {
      isRepeated = true

      const keys = Object.keys(hash)
      if (keys.length === 2) {
        return hash[keys.find(k => k !== gap)!]
      }
    }
  }

  return ''
};

function case2(words: string[]): string {
  const gap1 = getGap(words[0])
  const gap2 = getGap(words[1])

  if (gap1 !== gap2) return getGap(words[2]) === gap1 ? words[1] : words[0]

  for (let i = 2; i < words.length; i++) {
    const str = words[i]
    if (getGap(str) !== gap1) return str
  }

  return ''
}
