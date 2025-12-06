
import { Solution } from "./solution"; 

const solution = new Solution();

describe("factorialTrailingZeros", () => {
    test("should return 0 for n = 0", () => {
        expect(solution.factorialTrailingZeros(0)).toBe(0);
    });

    test("should return 0 for n = 4", () => {
        expect(solution.factorialTrailingZeros(4)).toBe(0);
    });

    test("should return 1 for n = 5", () => {
        expect(solution.factorialTrailingZeros(5)).toBe(1);
    });

    test("should return 6 for n = 25", () => {
        expect(solution.factorialTrailingZeros(25)).toBe(6);
    });

    test("should return 31 for n = 125", () => {
        expect(solution.factorialTrailingZeros(125)).toBe(31);
    });
});
