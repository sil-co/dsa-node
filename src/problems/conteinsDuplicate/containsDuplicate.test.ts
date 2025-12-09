
import { Solution } from "./Solution";

const containsDuplicate = Solution.containsDuplicate;

const cases = [
    {
        nums: [1,2,3,1],
        expected: true
    },
    {
        nums: [],
        expected: false
    },
    {
        nums: [1,2,3,4],
        expected: false
    },
    {
        nums: [1,1,1,3,3,4,3,2,4,2],
        expected: true
    }
];

describe("Contains Duplicate", () => {
    test.each(cases)("%j", ({ nums, expected }) => {
        const bool = containsDuplicate(nums);
        expect(bool).toBe(bool);
    });
});
