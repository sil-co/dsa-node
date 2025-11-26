import { longestContinuousSubsequence } from "../../src/dsa/longestContinuousSubsequence";

describe("Find the longest continuous subsequence", () => {
    test("return 0 for empty array", () => {
        expect(longestContinuousSubsequence([])).toBe(0);
    });

    test("return 4 for simple increasing sequence", () => {
        expect(longestContinuousSubsequence([1, 2, 3, 4])).toBe(4);
    });

    test("return 3 for mixed sequence", () => {
        expect(longestContinuousSubsequence([1, 3, 5, 4, 7])).toBe(3);
    });

    test("decreasing sequence", () => {
        expect(longestContinuousSubsequence([5, 4, 3, 2, 1])).toBe(1);
    });

    test("multiple increasing segments", () => {
        expect(longestContinuousSubsequence([2, 2, 2, 3, 4, 1, 2, 3, 4, 5])).toBe(5);
    });
});
