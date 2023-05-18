const f = (num: number) => {
  let rate = 0
  if (num <= 3000) {
    rate = 0.03
  } else if (num <= 12000) {
    rate = 0.1
  } else if (num <= 25000) {
    rate = 0.2
  } else if (num <= 35000) {
    rate = 0.25
  } else if (num <= 55000) {
    rate = 0.3
  } else if (num <= 80000) {
    rate = 0.35
  } else {
    rate = 0.4
  }

  return num * (1 - rate)
}

const getFixedVal = (num: number) => {
  return Number(num.toFixed(0))
}

export const fn = (target: number) => {
  const t = getFixedVal(target)
  let head = t, tail = getFixedVal(t * 2), mid = 0
  IS_CONSOLE && console.log(`----${t}------`);

  while (f(head) < f(tail)) {
    mid = getFixedVal((head + tail) / 2)
    const val = getFixedVal(f(mid))
    IS_CONSOLE && console.log(`head: ${head}, tail: ${tail}, mid: ${mid}, val: ${val}`);

    if (val === t) return mid
    if (val < t) head = mid
    else tail = mid
  }

  return -1
};

const IS_CONSOLE = false
