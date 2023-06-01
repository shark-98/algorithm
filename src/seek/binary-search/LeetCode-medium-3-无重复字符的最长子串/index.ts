export function lengthOfLongestSubstring(s: string): number {
  return case3(s)
};

function case1(s: string): number {
  const len = s.length
  if (len === 1) return 1

  let max = 0, cur = 0, hash = {}

  for (let i = 0; i < len; i++) {
    const val = s[i]

    if (hash[val] || hash[val] === 0) {
      i = hash[val]
      hash = {}
      if (cur > max) max = cur
      cur = 0
    } else {
      hash[val] = i
      cur++
    }
  }

  if (cur > max) max = cur

  return max
};

function case2(s: string): number {
  const len = s.length
  if (len === 1) return 1

  let max = 0, cur = 0, hash = {}

  for (let i = 0; i < len; i++) {
    const val = s[i]

    const index = hash[val]
    if (index || index === 0) {
      if (cur > max) max = cur

      for (const key in hash) {
        if (Object.prototype.hasOwnProperty.call(hash, key)) {
          if (key <= index) {
            delete hash[hash[key]]
            delete hash[key]
            cur--
          }
        }
      }
    }

    hash[val] = i
    hash[i] = val
    cur++
  }

  if (cur > max) max = cur

  return max
};

function case3(s: string): number {
  const len = s.length
  if (len === 1) return 1

  let max = 0, count = 0, arr: string[] = [], left = 0, right = 0

  while (left <= right && right < len) {
    const val = s[right]

    if (arr.includes(val)) {
      arr.shift()
      left++
      count--
    } else {
      arr.push(val)
      right++
      count++
      if (count > max) max = count
    }
  }

  return max
};
