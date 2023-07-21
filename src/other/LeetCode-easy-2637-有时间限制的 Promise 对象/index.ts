type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    let timer
    const handleError = new Promise((resolve, reject) => {
      timer = setTimeout(() => reject('Time Limit Exceeded'), t)
    })

    return Promise.race([fn(...args), handleError]).then(res => {
      clearTimeout(timer)
      return res
    }).catch(e => e)
  }
};
