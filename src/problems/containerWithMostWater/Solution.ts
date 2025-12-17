/**
 * https://leetcode.com/problems/container-with-most-water/description/
 * 11. Container With Most Water
 */
export class Solution {
    /**
     * Aim: time:O(n), space:O(1)
     */
    static maxArea(height: number[]): number {
        let left = 0;
        let right = height.length - 1;
        let max = 0;

        while (left < right) {
            const area = Math.min(height[left], height[right]) * (right - left);
            max = Math.max(max, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
