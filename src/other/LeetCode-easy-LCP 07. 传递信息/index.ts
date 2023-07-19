export function numWays(n: number, relation: number[][], k: number): number {
  return case1(n, relation, k)
};

function case1(n: number, relation: number[][], k: number): number {
  let r = 0;
  const end = n - 1

  const hash = relation.reduce((total, item) => {
    const [cur, next] = item
    if (!total[cur]) {
      total[cur] = []
    }
    total[cur].push(next)
    return total
  }, {})

  const dfs = (index: number, length: number) => {
    if (length === k) {
      if (index === end) {
        r++;
      }
      return;
    }

    const list = hash[index] || [];
    list.forEach((item: number) => {
      dfs(item, length + 1);
    })
  }

  dfs(0, 0);
  return r;
};
