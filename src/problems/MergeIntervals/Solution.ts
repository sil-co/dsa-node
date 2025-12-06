
/**
 * https://leetcode.com/problems/merge-intervals/
 * 56. Merge Intervals
 */
export class Solution {
    /**
     * Example1: 
     *  input: Intervals = [[1,3], [2,6], [8,10], [15,18], [3,4]], 
     *  output: [[1,6], [8,10], [15,18]]
     * Example2: 
     *  input: Intervals = [[1,3], [2,6], [8,10], [1500,1800], [3,40]], 
     *  output: [[1,1800]]
     * Aim: time:O(n), space:O(n)
     * Approach:
     *  1. Sort array like `[[1,3], [2,6], [3,40], [8,10], [1500,1800]]` (eg2) 
     */
    static merge(intervals: number[][]): number[][] {
        let sortedIntervals: number[][] = [];

        for (const i of intervals) {

        }

        return intervals;
    }

    static binarySearchArray(): number {
        return 0;
    }
}
