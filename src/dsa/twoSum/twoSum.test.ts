import { Solution } from "./Solution";

const twoSum = new Solution().twoSum;

describe('Two Sum', () => {
    test('should return indices of the two numbers that add up to target', () => {
        expect(twoSum([2,7,11,15], 9).sort()).toEqual([0, 1]);
        expect(twoSum([3,2,4], 6).sort()).toEqual([1,2]);
        expect(twoSum([3,3], 6).sort()).toEqual([0,1]);
    });
    test('should return an empty array if no solution exists', () => {
        expect(twoSum([1,2,3], 7)).toEqual([]);
    });
});
