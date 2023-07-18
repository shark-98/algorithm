import { describe, it, expect } from 'vitest';
import { filterRestaurants } from './index';

describe('餐厅过滤器', () => {
  it(`
    restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 
    veganFriendly = 1, 
    maxPrice = 50, 
    maxDistance = 10`,
    () => {
      const restaurants = [[1, 4, 1, 40, 10], [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
        veganFriendly = 1,
        maxPrice = 50,
        maxDistance = 10
      expect(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)).toEqual([3, 1, 5])
    })

  it(`
    restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 
    veganFriendly = 0, 
    maxPrice = 50, 
    maxDistance = 10`,
    () => {
      const restaurants = [[1, 4, 1, 40, 10], [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
        veganFriendly = 0,
        maxPrice = 50,
        maxDistance = 10
      expect(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)).toEqual([4, 3, 2, 1, 5])
    })

  it(`
    restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 
    veganFriendly = 0, 
    maxPrice = 30, 
    maxDistance = 3`,
    () => {
      const restaurants = [[1, 4, 1, 40, 10], [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
        veganFriendly = 0,
        maxPrice = 30,
        maxDistance = 3
      expect(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)).toEqual([4, 5])
    })
})
