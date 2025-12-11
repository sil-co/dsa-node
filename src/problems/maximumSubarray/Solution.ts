/**
 * https://leetcode.com/problems/maximum-subarray/
 * 53. Maximum Subarray
 */
export class Solution {
    /**
     * Aim: Time:O(n), Space:O(n)
     * Approach:
     *      In this problem, `i` (array index pointer) check `nums[i]` if what minus
     *      1. Initialize `maxNums` that is possible maximum numbers list
     *      2. If `nums[i]` is `minus`, add `currentMaxNum` into `maxNums`
     *      3. Math.max(currentMaxNums)
     */
    static maxSubArray(nums: number[]): number {
        const maxNums: number[] = [];
        let currentMaxNum: number = 0;
        let onlyMinus: number = nums[0];

        let i = 0;
        while (i < nums.length && nums[i] <= 0) {
            i++;
            if (nums[i] > onlyMinus) onlyMinus = nums[i];
        }
        if (i === nums.length) { return onlyMinus; }

        for (let j = i; j < nums.length; j++) {
            if (nums[j] > 0) {
                currentMaxNum += nums[j];
            } else {
                maxNums.push(currentMaxNum);
                if (currentMaxNum > (-1 * nums[j])) currentMaxNum += nums[j];
                else currentMaxNum = 0;
            }
        }
        maxNums.push(currentMaxNum);

        return Math.max(...maxNums);
    }
}
