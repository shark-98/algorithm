export function concatenatedBinary(n: number): number {
  return case1(n)
};

function case1(n: number): number {
  let sum = "";

  for (let i = 1; i <= n; i++) {
    sum += i.toString(2);
    let number = parseInt(sum, 2);
    if (number >= 1000000007) {
      number %= 1000000007;
      sum = (number).toString(2);
    }
  }

  return parseInt(sum, 2);
};
