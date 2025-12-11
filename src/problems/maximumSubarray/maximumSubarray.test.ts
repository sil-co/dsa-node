import { Solution } from "./Solution";

const maxSubArray = Solution.maxSubArray;

const cases = [
    {
        nums: [-2,1,-3,4,-1,2,1,-5,4],
        expected: 6
    },
    {
        nums: [1],
        expected: 1
    },
    {
        nums: [5,4,-1,7,8],
        expected: 23
    },
    {
        nums: [-1],
        expected: -1
    },
    {
        nums: [-2, 1],
        expected: 1
    }
];

describe("Maximum Subarray", () => {
    test.each(cases)("%j", ({ nums, expected }) => {
        expect(maxSubArray(nums)).toBe(expected);
    });
});
