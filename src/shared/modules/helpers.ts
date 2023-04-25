/**
 * 缓存
 */
export const cached = (fn: Function) => {
  const cache = Object.create(null)

  return function cachedFn(key: any) {
    const hit = cache[key];
    return hit || (cache[key] = fn(key))
  }
}

/**
 * 生成n个元素值为[0, 5000]的数组
 */
export const getRandomArr = (n: number) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (n + 1)))
};

/**
 * 缓存随机数组
 */
export const getRandomArrCached = cached(getRandomArr);

/**
 * 获得函数运行耗时
 */
export const getExpendTime = <R>(fn: (...args: any[]) => R): { res: R, expendTime: string } => {
  const startTime = new Date().getTime()

  const res = fn()

  const endTime = new Date().getTime()

  const expendTime = `耗时：${(endTime - startTime) / 1000}s`

  return {
    res,
    expendTime
  }
};

/**
 * 深拷贝
 */
export const cloneDeep = (val: any) => JSON.parse(JSON.stringify(val || ''))
