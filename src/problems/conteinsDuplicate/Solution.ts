
/**
 * https://leetcode.com/problems/contains-duplicate/
 * 217. Contains Duplicate
 */
export class Solution {
    /**
     * Aim: time:O(n), space:O(n) 
     * Approach:
     *      1. creates a new set
     *      2. check with loop
     * Result:
     *      Runtime: 19 ms Beats 51.50%
     *      Memory: 73.38 MB Beats 90.65%
     */
    static containsDuplicate(nums: number[]): boolean {
        const set = new Set<number>();

        for (const num of nums) {
            if (set.has(num)) { return true; }
            else { set.add(num); }
        }
        return false;
    }

    // But space:O(1) solution is existing.
    // -> https://leetcode.com/problems/contains-duplicate/solutions/7134327/contains-duplicate-on-log-n-time-o1-spac-u2st/
}
