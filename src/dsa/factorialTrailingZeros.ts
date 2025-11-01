
export function factorialTrailingZeros(num: number): number {
    let count = 0;
    let crrPowerOfFive = 5;
    while (num >= crrPowerOfFive) {
        count += Math.floor(num / crrPowerOfFive);
        crrPowerOfFive *= 5;
    }
    return count;
}
