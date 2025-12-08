/**
 * Definition for a binary tree node.
 */
export class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 102. Binary Tree Level Order Traversal
 */
export class Solution {
    /**
     * Example1:
     *      Input: root = [3,9,20,nll,null,15,7]
     *      Output: [[3], [9,20], [15,7]]
     * Example2:
     *      Input: root = [1]
     *      Output: [[1]]
     * Example3:
     *      Input: root = []
     *      Output: []
     * Aim: Time:O(n), Space:O(n) 
     * Approach: 
     *      1. If root is null, return empty array. 
     *      2. Create newArray (number[][]) to store val. (this is result).
     *      3. Recursive search DFS (top -> left -> right).
     *      4. Add to newArray with current level
     */
    static levelOrder(root: TreeNode | null): number[][] {
        if (root == null) return [];

        const levelArray: number[][] = [];
        levelArray.push([root.val]);

        const rAddNode = (currentNode: TreeNode, currentLevel: number) => {
            if (currentNode.left !== null) {
                if (!levelArray[currentLevel + 1]) {
                    levelArray.push([currentNode.left.val]);
                } else {
                    levelArray[currentLevel + 1].push(currentNode.left.val);
                }
                rAddNode(currentNode.left, currentLevel + 1);
            }

            if (currentNode.right !== null) {
                if (!levelArray[currentLevel + 1]) {
                    levelArray.push([currentNode.right.val]);
                } else {
                    levelArray[currentLevel + 1].push(currentNode.right.val);
                }
                rAddNode(currentNode.right, currentLevel + 1);
            }
        }
        rAddNode(root, 0);

        return levelArray;
    }
}
