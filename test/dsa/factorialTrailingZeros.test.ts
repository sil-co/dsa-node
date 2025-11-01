
import { factorialTrailingZeros } from "../../src/dsa/factorialTrailingZeros";

describe("factorialTrailingZeros", () => {
    test("should return 0 for n = 0", () => {
        expect(factorialTrailingZeros(0)).toBe(0);
    });

    test("should return 0 for n = 4", () => {
        expect(factorialTrailingZeros(4)).toBe(0);
    });

    test("should return 1 for n = 5", () => {
        expect(factorialTrailingZeros(5)).toBe(1);
    });

    test("should return 6 for n = 25", () => {
        expect(factorialTrailingZeros(25)).toBe(6);
    });

    test("should return 31 for n = 125", () => {
        expect(factorialTrailingZeros(125)).toBe(31);
    });
});
