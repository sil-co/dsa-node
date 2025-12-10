import { Solution } from "./Solution";

const productExceptSelf = Solution.productExceptSelf;

const cases = [
    {
        nums: [2,3,4,5,2,3],
        expected: [360,240,180,144,360,240]
    },
    {
        nums: [1,2,3,4],
        expected: [24,12,8,6]
    },
    {
        nums: [-1,1,0,-3,3],
        expected: [0,0,9,0,0]
    },
    {
        nums: [2,3,4,5],
        expected: [60,40,30,24]
    },
    {
        nums: [5,0,2],
        expected: [0,10,0]
    },
    {
        nums: [0,0],
        expected: [0,0]
    },
    {
        nums: [10],
        expected: [1]
    },
    {
        nums: [-2,-3,-4],
        expected: [12,8,6]
    }
];

describe("Product of Array Expect Self", () => {
    test.each(cases)("%j", ({ nums, expected }) => {
        expect(productExceptSelf(nums)).toEqual(expected);
    });
});
