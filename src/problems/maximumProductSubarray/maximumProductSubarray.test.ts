import { Solution } from "./Solution";

const maxProduct = Solution.maxProduct;

const cases = [
    {
        nums: [2,3,-2,4],
        expected: 6
    },
    {
        nums: [-2,0,-1],
        expected: 0
    },
    {
        nums: [1],
        expected: 1
    },
    {
        nums: [-1, -2, -3],
        expected: 6
    },
    {
        nums: [0, 0, 0, 0, 0, 1, 2, 3],
        expected: 6
    },
    {
        nums: [0, 0, 0, 0, 0, 1, 2, 3, 0, 0],
        expected: 6
    },
    {
        nums: [0,0,0,-1,0],
        expected: 0
    },
    {
        nums: [0,0,0,-3,-2,0,0,-4],
        expected: 6
    },
    {
        nums: [0,0,0],
        expected: 0
    }
];

describe("Maximum Product Subarray", () => {
    test.each(cases)("%j", ({ nums, expected }) => {
        expect(maxProduct(nums)).toBe(expected);
    });
});
