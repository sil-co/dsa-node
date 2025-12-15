/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * 33. Search in Rotated Sorted Array
 */
export class Solution {
    /**
     * Aim: Time:O(log n), Space:O(1)
     * Approach: 
     *      Binary Search
     */
    static search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let middle = Math.floor(left + ((right - left) / 2));

            if (nums[middle] === target) { return middle; }

            if (nums[left] <= nums[middle]) { // Left half is sorted
                if (nums[left] <= target && target < nums[middle]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            } else { // Right half is sorted
                if (nums[middle] < target && target <= nums[right]) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                }
            }
           
        }

        return -1;
    }
}

