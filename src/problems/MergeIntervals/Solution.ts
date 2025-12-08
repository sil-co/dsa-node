
/**
 * https://leetcode.com/problems/merge-intervals/
 * 56. Merge Intervals
 */
export class Solution {
    /**
     * Example1: 
     *      input: Intervals = [[1,3], [2,6], [8,10], [15,18], [3,4]], 
     *      output: [[1,6], [8,10], [15,18]]
     * Example2: 
     *      input: Intervals = [[1,3], [2,6], [8,10], [1500,1800], [3,40]], 
     *      output: [[1,40],[1500,1800]]
     * Aim: time:O(n), space:O(n)
     * Approach:
     *      1. Sort the interval array by their start values.
     *      2. Initialize the result with the first interval.
     *      3. Loop through the sorted intervals:
     *          - If the current interval overlaps with the last interval in the result, merge them by extending the end value.
     *          - Otherwise, add the current interval as a new non-overlapping interval.
     * Actual Big O: 
     *      Time: O(n log n), because sorting tasks O(n log n)
     *      Space: O(n) - Worst case
     */
    static merge(intervals: number[][]): number[][] {
        if (intervals.length === 0) return [];
        intervals.sort((a, b) => a[0] - b[0]);
        let result: number[][] = [intervals[0]];

        let currResultPointer = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (
                result[currResultPointer][0] <= intervals[i][0] // should always True, because sorted
                && result[currResultPointer][1] >= intervals[i][0]
            ) {
                result[currResultPointer][1] = result[currResultPointer][1] <= intervals[i][1] ? intervals[i][1] : result[currResultPointer][1];
            } else {
                result.push(intervals[i]);    
                currResultPointer++;
            }
        }

        return result;
    }
}
