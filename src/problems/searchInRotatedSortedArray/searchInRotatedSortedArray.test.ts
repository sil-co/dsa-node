import { Solution } from "./Solution";

const search = Solution.search;

const cases = [
    {
        nums: [0],
        target: 0,
        expected: 0 
    },
    {
        nums: [4,5,6,7,0,1,2],
        target: 0,
        expected: 4
    },
    {
        nums: [4,5,6,7,0,1,2],
        target: 3,
        expected: -1 
    },
    {
        nums: [1],
        target: 0,
        expected: -1 
    },
    {
        nums: [8,9,10,1,2,3,4],
        target: 1,
        expected: 3 
    },
    {
        nums: [4,5,6,7,8,1,2,3],
        target: 8,
        expected: 4
    },
];

describe("searchInRotatedSortedArray", () => {
    test.each(cases)("%j", ({ nums, target, expected }) => {
        expect(search(nums, target)).toBe(expected);
    });
});
