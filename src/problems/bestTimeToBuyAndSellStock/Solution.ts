
/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * No. 121: Best Time to Buy and Sell Stock
 */
export class Solution {
    static maxProfit(prices: number[]): number {
        // Aim: time:O(n) space:O(1)
        /** 
         * Approach:
         * example: input:[7, 5, 6, 4, 10000, 1000, 100, 10, 10004, 1, 0], output:10000
         * Use a single pass to track two values:
         *      buyPoint: the lowest price seen to far (the best day to buy) 
         *      maxProfit: the highest profit found so far
         * Do loop input array and change maxProfit, when max is grater than it
         * return maxProfit
         */
        let maxProfit = 0;
        let buyPoint = prices[0];
        for (const p of prices) {
            if (p < buyPoint) {
                // best buy point
                buyPoint = p;
            } else {
                const profit = p - buyPoint;       
                maxProfit = Math.max(profit, maxProfit);
            }
        }
        return maxProfit;
    }
}
