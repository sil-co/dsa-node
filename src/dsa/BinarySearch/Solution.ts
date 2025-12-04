/**
 * https://leetcode.com/problems/binary-search/description/
 * 704. Binary Search
 */

export class Solution {
    static search(nums: number[], target: number): number {
        // Aim: O(log n)
        // Example: input:nums=[-1,0,3,5,9,12],target=2, output:-1
        /**
         * Approach: 
         *      nums.length divided by 2
         *      check left of right
         */
        let leftPointer = 0;
        let rightPointer = nums.length - 1;
        while (leftPointer <= rightPointer) {
            let middle = Math.floor((rightPointer - leftPointer) / 2) + leftPointer;
            if (nums[middle] === target) {
                return middle;
            } else if (target > nums[middle]) {
                leftPointer = middle + 1;
            } else {
                rightPointer = middle - 1;
            }
        }
        return -1;
    }
}

const cases: Array<{ nums: number[]; target: number; expected: number }> = [
    { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
    { nums: [1, 2, 3, 4, 5], target: 3, expected: 2 },
    { nums: [1, 2, 3, 4, 5], target: 1, expected: 0 },
    { nums: [1, 2, 3, 4, 5], target: 5, expected: 4 },
    { nums: [], target: 10, expected: -1 },
    { nums: [2], target: 2, expected: 0 },
    { nums: [2], target: 3, expected: -1 },
];

for (const i of cases) {
    const index = Solution.search(i.nums, i.target);
    const isCorrect = index === i.expected;
    console.log({ index }, isCorrect ? "√ Success!!" : "××××××× Failed ×××××××")
}
