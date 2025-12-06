
import { Solution } from "./Solution";

const maxProfit = Solution.maxProfit;

describe("Best Time to Buy and sell Stock", () => {
    const cases: Array<{ prices: number[]; expected: number; }> = [
        { prices: [7, 5, 6, 4, 10000, 1000, 100, 10, 10004, 0], expected: 10000 },
        { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
        { prices: [7, 6, 4, 3, 1], expected: 0 }, // no profit
        { prices: [1, 2, 3, 4, 5], expected: 4 }, // buy at start, sell at end 
        { prices: [2, 4, 1], expected: 2 },
        { prices: [1], expected: 0 },
        { prices: [], expected: 0 },
    ];

    test.each(cases)("prices:$prices, expected:$expected", ({ prices, expected }) => {
        expect(maxProfit(prices)).toBe(expected);
    });
});

