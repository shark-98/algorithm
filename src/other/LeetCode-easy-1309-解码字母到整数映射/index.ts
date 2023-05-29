export function freqAlphabets(s: string): string {
  return case2(s)
};

function case1(s: string): string {
  const base = 'a'.charCodeAt(0) - 1 // 97 - 1

  let r = ''

  let unionChar = ''

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i]

    let charGroup = ''

    if (unionChar || i + 2 < len && s[i + 2] === '#') {
      unionChar += char
    } else {
      charGroup = char
    }

    if (unionChar.length === 3) {
      charGroup = unionChar.slice(0, 2)
      unionChar = ''
    }

    if (charGroup) {
      r += String.fromCharCode(base + Number(charGroup))
    }
  }

  return r
};

function case2(s: string): string {
  const base = 'a'.charCodeAt(0) // 97
  const hash = new Array(26).fill(0).reduce((total, item, i) => {
    const key = i >= 9 ? `${i + 1}#` : i + 1
    total[key] = String.fromCharCode(base + i)
    return total
  }, {})

  let r = ''

  for (let i = 0, len = s.length; i < len; i++) {
    const endIndex = i + 2
    if (endIndex < len && s[endIndex] === '#') {
      r += hash[s.slice(i, endIndex + 1)]
      i += 2
      continue
    }

    r += hash[s[i]]
  }

  return r
}
