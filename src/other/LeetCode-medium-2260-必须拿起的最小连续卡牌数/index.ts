export function minimumCardPickup(cards: number[]): number {
  return case1(cards)
};

function case1(cards: number[]): number {
  const hash = {}
  let min = Infinity

  for (let i = 0, len = cards.length; i < len; i++) {
    const item = cards[i];

    if (hash[item] !== undefined) {
      min = Math.min(i - hash[item] + 1, min)
    }

    hash[item] = i
  }

  return min === Infinity ? -1 : min
};
