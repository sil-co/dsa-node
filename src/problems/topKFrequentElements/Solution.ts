/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * 347. Top K Frequent Elements
 */
export class Solution {
    /**
     * Example 1:
     *      Input: nums = [1,1,1,2,2,3], k = 2 
     *      Output: [1,2] because 1 is the most frequent, 2 is the 2nd frequent.
     * Example 2:
     *      Input: nums = [1], k = 1
     *      Output: [1]
     * Example 3:
     *      Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
     *      Output: [1,2]
     * Aim: time:O(n log n), space:O(n)
     * Approach:
     *      1. Set with Map like [{ value : times }]
     *      2. Create sortedArray
     *      3. Loop sortedArray and extract keys for top k.
     * Result: Time:O(N log n), Space:O(N)
     *      Good, but a little bit inefficient... because
     *      Runtime: 85 ms Beats 5.18%
     *      Memory: 64.52 MB Beats 13.37%
     */
    static topKFrequent(nums: number[], k: number): number[] {
        let countMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            if (countMap.has(nums[i])) {
                countMap.set(nums[i], countMap.get(nums[i])! + 1)
            } else {
                countMap.set(nums[i], 1);
            }
        }

        const sortedArray: number[][] = []; // [[key, value]]
        for (const key of countMap.keys()) {
            const count = countMap.get(key)!;
            const newArray: number[] = [key, count];
            sortedArray.push(newArray);
            sortedArray.sort((a, b) => b[1] - a[1]);
        }

        const slicedSortedArray: number[][] = sortedArray.slice(0, k);

        const result: number[] = [];

        for (const i of slicedSortedArray) {
            result.push(i[0]);
        }

        return result;
    }

    static topKFrequentGPT(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (const n of nums) {
            map.set(n, (map.get(n) ?? 0) + 1);
        }

        const freq = Array.from(map.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num);

        return freq;
    }
}