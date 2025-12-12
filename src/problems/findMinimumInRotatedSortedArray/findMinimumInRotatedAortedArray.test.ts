import { Solution } from "./Solution";

const findMin = Solution.findMin;

const cases = [
    {
        nums: [3,4,5,1,2],
        expected: 1
    },
    {
        nums: [4,5,6,7,0,1,2],
        expected: 0
    },
    {
        nums: [11,13,15,17],
        expected: 11
    },
    {
        nums: [0],
        expected: 0
    },
    {
        nums: [10, 1],
        expected: 1
    },
    {
        nums: [1, 10],
        expected: 1
    },
    {
        nums: [2,3,1],
        expected: 1
    }
];

describe("Find Minimum In Rotated Array", () => {
    test.each(cases)("%j", ({ nums, expected }) => {
        expect(findMin(nums)).toBe(expected);
    });
});
