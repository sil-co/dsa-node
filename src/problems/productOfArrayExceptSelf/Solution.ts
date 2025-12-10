/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 238. Product of Array Except Self
 */
export class Solution {
    /**
     * Aim: time:O(n), space:O(n)
     * Approach:
     *      1. Creates two new Arrays for prefix and suffix
     *      2. Creates the result array
     *      3. Multiply each element prefix array and suffix array
     *      4. Push to result array.
     */
    static productExceptSelf(nums: number[]): number[] {
        const n = nums.length;

        if (n === 0) return [];
        if (n === 1) return [1];

        const left: number[] = [];
        const right: number[] = [];
        const result: number[] = [];

        left.push(1);
        for (let i = 1; i < n; i++) {
            left.push(left[i - 1] * nums[i - 1]);
        }

        right.push(1);
        for (let i = n - 2; i >= 0; i--) {
            right.push(right[right.length - 1] * nums[i + 1]);
        }
        right.reverse(); 

        for (let i = 0; i < n; i++) {
            const r = left[i] * right[i];
            result.push(r === -0 ? 0 : r);
        }

        return result;
    }

    static productExceptSelfGpt(nums: number[]): number[] {
        const n = nums.length;
        const result = new Array(n).fill(1);

        let prefix = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }

    /**
     * Aim: time:O(n), space:O(n)
     * Approach:
     *      1. Creates new Array (`exceptNums`) except itself
     *      2. Product of `exceptNums` and store result array
     *      3. Replace `exceptNums` to new Array
     * Result: Failed: because not efficient
     */
    static productExceptSelfFailed(nums: number[]): number[] {
        if (nums.length === 0) return [];
        else if (nums.length === 1) return [1];

        const result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            let product: number = 1;
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                product *= nums[j];
            }
            if (product === -0) product = 0;
            result.push(product);
        }

        return result;
    }
}
