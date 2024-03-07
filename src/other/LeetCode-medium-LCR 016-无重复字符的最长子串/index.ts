export function lengthOfLongestSubstring(s: string): number {
  return case3(s)
};

function case1(s: string): number {
  const length = s.length
  let left = 0, right = 0

  let str = ''
  let hash = {}
  let max = 0

  while (right < length) {
    const char = s[right]
    if (hash[char]) {
      if (str.length > max) {
        max = str.length
      }
      str = ''
      hash = {}
      right = left + 1
      left = right
    } else {
      right++
      str += char
      hash[char] = true
    }
  }
  if (str.length > max) {
    max = str.length
  }

  return max
};

function case2(s: string): number {
  const length = s.length
  let left = 0, right = 0, max = 0, hash = {}

  while (right < length) {
    const char = s[right]
    const repetitiveIndex = hash[char]
    if (repetitiveIndex === undefined) {
      hash[char] = right
      right++
    } else {
      const count = right - left
      if (count > max) { max = count }

      for (let i = left; i <= repetitiveIndex; i++) {
        delete hash[s[i]]
      }
      left = repetitiveIndex + 1
    }
  }

  const count = right - left
  if (count > max) { max = count }

  return max
};

function case3(s: string): number {
  const n = s.length
  if (n <= 1) return n

  let left = 0, right = 0, maxLen = 0
  const hash = {}

  while (right < n) {
    const char = s[right]
    const rightCharIndex = hash[char] || 0
    left = Math.max(left, rightCharIndex)
    maxLen = Math.max(maxLen, right - left + 1)
    right++
    hash[char] = right
  }

  return maxLen
}
