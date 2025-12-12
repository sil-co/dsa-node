/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * 153. Find Minimum in Rotated Sorted Array
 */
export class Solution {
    /**
     * Aim: time:O(log n), space:O(1)
     * Approach:
     *  We can check whether th first element is greater than the middle element. 
     *  For example: [8,9,10,11,1,2,3,4,5,6,7]
     *  - first value: nums[0] => 8
     *  - middle value: nums[Math.floor(nums.length/2)] => nums[5] => 2
     *  - check whether 8 is grater than 2
     *      - if yes => the rotation point is before or at the middle 
     *          - ignored nums[5 through 10] because all are less than 8.
     * Result:
     *      Time:O(log n), Runtime:0ms Beats:100%
     *      Space:O(1), Memory:54MB Beats:76.29%
     * Points to reflect on:
     *      Should use binary search.
     *      My solution is similar binary search. 
     *      But my while loop code is little bit risky.
     */
    static findMin(nums: number[]): number {
        // If length is 1 or 2
        if (nums.length === 1) {
            return nums[0];
        } else if (nums.length === 2) {
            return nums[0] < nums[1] ? nums[0] : nums[1];
        }

        // not rotated
        if (nums[0] < nums[nums.length - 1]) return nums[0];

        let first = 0;
        let half = Math.floor(nums.length / 2);
        let last = nums.length - 1;
        let result = 0;

        while (half !== last) {
            if (nums[first] < nums[half]) {
                // sorted to half
                first = half;
            } else {
                // sorted after half 
                last = half;
            }
            half = Math.floor((last - first + 1) / 2 + first); // (last - first + 1) is length
        }
        result = nums[half];

        return result;
    }
}
