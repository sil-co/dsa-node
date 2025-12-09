import { Solution } from "./Solution";

const topKFrequent = Solution.topKFrequent;

const cases = [
    {
        nums: [1,1,1,2,2,3],
        k: 2,
        expected: [1,2]
    },
    {
        nums: [1],
        k: 1,
        expected: [1]
    },
    {
        nums: [4,4,4,4],
        k: 1,
        expected: [4]
    },
    {
        nums: [1,2,3,4,5],
        k: 3,
        expected: [1,2,3]
    },
    {
        nums: [5,3,3,2,2,2,1],
        k: 2,
        expected: [2,3]
    },
    {
        nums: [7,7,8,8,8,9],
        k: 1,
        expected: [8]
    },
    {
        nums: [1,2,2,3,3,3,4,4,4,4],
        k: 2,
        expected: [4,3]
    }
];

describe("Top K Frequent Elements", () => {
    test.each(cases)("%j", ({ nums, k, expected }) => {
        const result = topKFrequent(nums, k);
        expect(new Set(result)).toEqual(new Set(expected));
        expect(result.length).toBe(expected.length);
    });
});
