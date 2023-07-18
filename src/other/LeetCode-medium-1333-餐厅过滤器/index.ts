export function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
  return case1(restaurants, veganFriendly, maxPrice, maxDistance)
};

function case1(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
  const isAll = veganFriendly === 0

  return restaurants
    .filter(item =>
      (isAll || veganFriendly === item[2])
      && maxPrice >= item[3]
      && maxDistance >= item[4]
    )
    .sort((a, b) => (b[1] - a[1]) || (b[0] - a[0]))
    .map(item => item[0])
};
