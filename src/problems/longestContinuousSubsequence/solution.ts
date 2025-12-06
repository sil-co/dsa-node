
/**
 * Problem: Given an array of integers, return the length of the longest continuous increasing subsequence.
 * Example: 
 *  Input: [1, 3, 5, 4, 7]
 *  Output: 3 (because the longest increasing part is [1, 3, 5]).
 */
export class Solution {
    longestContinuousSubsequence(input: number[]): number {
        if (input.length === 0) return 0;
        let maxLen = 1;
        let current = 1;
        for (let i = 1; i < input.length; i++) {
            if (input[i] > input[i - 1]) {
                current++;
                maxLen = Math.max(maxLen, current);
            } else {
                current = 1;
            }
        }
        return maxLen;
    }
}
