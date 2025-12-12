/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * 33. Search in Rotated Sorted Array
 */
export class Solution {
    /**
     * Aim: Time:O(log n), Space:O(1)
     * Approach: 
     *      Binary Search
     *      
     */
    static search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let middle = Math.floor(left + ((right - left) / 2));

            console.log({ left, middle, right });

            //     nums: [9,10,0,1,4,5,6,7,8],
            //     target: 3,
            //     expected: -1 

            if (target < nums[middle]) {
                if (nums[left] < nums[middle]) {
                    // sorted: left to middle
                    if (target > nums[left]) {
                        // target is existing in left through middle
                        right = middle - 1;
                    } else {
                        // target is existing middle through right
                        left = middle + 1;
                    }
                } else {
                    // sorted: middle to right, because nums is sorted array
                    if (target > nums[left]) {
                        // target is existing in left through middle
                        right = middle - 1;
                    } else {
                        // target is existing middle through right
                        left = middle + 1;
                    }
                }
            }
        }

        return -1;
    }
}

