import { Solution } from "./Solution";

const merge = Solution.merge;

describe("Merge Intervals", () => {
    const cases: Array<{ input: number[][], expected: number[][] }> = [
        {
            input: [[1,3], [2,6], [8,10], [1500,1800], [3,40]],
            expected: [[1,40], [1500,1800]]
        },
        {
            input: [[1, 3], [2, 6], [8, 10], [15, 18]],
            expected: [[1, 6], [8, 10], [15, 18]]
        },
        {
            input: [[1, 4], [4, 5]],
            expected: [[1, 5]]
        },
        {
            input: [[1, 4], [0, 4]],
            expected: [[0, 4]]
        },
        {
            input: [[1, 4], [2, 3]],
            expected: [[1, 4]]
        },
        {
            input: [],
            expected: []
        },
        {
            input: [[5, 7]],
            expected: [[5, 7]]
        },
    ];

    test.each(cases)("Data: %j", ({ input, expected }) => {
        expect(merge(input)).toEqual(expected);
    });
});
