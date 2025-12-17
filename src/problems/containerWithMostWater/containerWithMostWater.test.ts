import { Solution } from "./Solution";

const maxArea = Solution.maxArea;

export const cases = [
    {
        height: [1,8,6,2,5,4,8,3,7],
        expected: 49
    },
    {
        height: [1,1],
        expected: 1
    },
    {
        height: [4,3,2,1,4],
        expected: 16
    },
    {
        height: [1,2,1],
        expected: 2
    },
    {
        height: [2,3,10,5,7,8,9],
        expected: 36
    },
    {
        height: [1,3,2,5,25,24,5],
        expected: 24
    },
    {
        height: [5,5,5,5,5],
        expected: 20
    },
    {
        height: [1,1000,1,1,1,1000,1],
        expected: 4000
    }
];

describe("Container With Most Water", () => {
    test.each(cases)("%j", ({ height, expected}) => {
        expect(maxArea(height)).toBe(expected);
    });
});

