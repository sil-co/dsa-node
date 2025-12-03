
/**
 * https://leetcode.com/problems/two-sum/
 * 1. Two Sum
 */
export class Solution {
    twoSum(nums: number[], target: number): number[] {
        // aim time:O(n), space:O(1)
        // e.g., [2,7,11,15,9,1,3,4,5,14,6,8] 29
        // Approach: remainder map key : <number(remainder), number(index)>
        const mapRemainder = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if (mapRemainder.has(nums[i])) {
                const pairNumIndex: number = mapRemainder.get(nums[i])!;
                console.log({ pairNumIndex, i });
                return [i, pairNumIndex];
            }
            mapRemainder.set(target - nums[i], i);
        }
        return [];
    }

    twoSumGPT(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement)!, i];
            }
            map.set(nums[i], i);
        }
        return [];
    }

    // incorrect: because it doesn't get the index from `Set` 
    twoSumFailed(nums: number[], target: number): number[] {
        const setRemainder = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (setRemainder.has(nums[i])) {
                const pairNum = target - nums[i];
                const pairNumIndex = pairNum; // I can't get index from `Set`...
                return [i, pairNumIndex];
            }
            const remainder = target - nums[i];
            setRemainder.add(remainder);
        }
        return [];
    }
}
