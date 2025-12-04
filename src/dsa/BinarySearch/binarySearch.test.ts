import { Solution } from "./Solution";

const search = Solution.search;

describe("Binary Search", () => {
    const cases: Array<{ nums: number[]; target: number; expected: number }> = [
        { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
        { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
        { nums: [1, 2, 3, 4, 5], target: 3, expected: 2 },
        { nums: [1, 2, 3, 4, 5], target: 1, expected: 0 },
        { nums: [1, 2, 3, 4, 5], target: 5, expected: 4 },
        { nums: [], target: 10, expected: -1 },
        { nums: [2], target: 2, expected: 0 },
        { nums: [2], target: 3, expected: -1 },
    ];

    test.each(cases)("nums: $nums, target: $target, expected: $expected", ({ nums, target, expected }) => {
        expect(search(nums, target)).toBe(expected);
    });
});
