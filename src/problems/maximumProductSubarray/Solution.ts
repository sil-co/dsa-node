/**
 * https://leetcode.com/problems/maximum-product-subarray/description/
 * 152. Maximum Product Subarray
 */
export class Solution {
    /**
     * Aim: time:O(N), space:O(1)
     * Result: 
     *      Time: O(n) Runtime: 4ms Beats 44.31%
     *      Space: O(1) Memory: 54MB Beats 65.23%
     * Points to reflect on:
     *      hard to understand
     *      this approach is complex
     */
    static maxProduct(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        let first = 0;
        while (first < nums.length && nums[first] === 0) {
            first++;
        }

        if (first === nums.length) return 0;

        let maxProduct = nums[first];
        let currProduct = nums[first];
        let currMinusP = nums[first];
        let currMinusP2 = 1;
        let isNextMinus = nums[first] < 0 ? true : false;

        for (let i = first + 1; i < nums.length; i++) {
            if (nums[i] === 0) {
                maxProduct = Math.max(maxProduct, 0);
                currProduct = 1;
                currMinusP = 1;
                currMinusP2 = 1;
                isNextMinus = false;
                continue;
            }

            currMinusP = currMinusP * nums[i];
            if (isNextMinus) currMinusP2 = currMinusP2 * nums[i];
            currProduct = Math.max(nums[i], currProduct * nums[i]);
            maxProduct = Math.max(currProduct, maxProduct);

            if (currMinusP > 0) {
                maxProduct = Math.max(maxProduct, currMinusP);
            }
            if (isNextMinus && currMinusP2 > 0) {
                maxProduct = Math.max(maxProduct, currMinusP2);
            }
            if (nums[i] < 0) {
                isNextMinus = true;
            }
        }

        if (first !== 0) {
            maxProduct = Math.max(maxProduct, 0);
        }

        return maxProduct;
    }

    static maxProductRefactorGPT(nums: number[]): number {
        if (nums.length === 0) return 0;

        let currMax = 1;
        let currMin = 1;
        let result = -Infinity;

        for (const n of nums) {
            if (n === 0) {
                result = Math.max(result, 0);
                currMax = 1;
                currMin = 1;
                continue;
            }

            const temp = currMax * n;
            currMax = Math.max(n, currMax * n, currMin * n);
            currMin = Math.min(n, temp, currMin * n);

            result = Math.max(result, currMax);
        }

        return result;
    }
}
