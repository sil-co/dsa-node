/**
 * https://leetcode.com/problems/reverse-linked-list/description/
 * 206. Reverse Linked List
 */
/**
 * Definition for singly-linked list.
*/
export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

export class Solution {
    reverseList(head: ListNode | null): ListNode | null {
        // aim: time:O(n), space:O(n)
        // Approach: create array and reverse input
        if (head === null) return null;
        let temp: ListNode | null = head;
        const newListNodeNums: number[] = [];
        while (temp != null) {
            newListNodeNums.push(temp.val);
            temp = temp.next;
        }
        const len = newListNodeNums.length;
        const result: ListNode = new ListNode(newListNodeNums[len-1]);
        temp = result;
        for (let i = len - 2; i >= 0; i--) {
            let newNode = new ListNode(newListNodeNums[i]);
            temp.next = newNode;
            temp = temp.next;
        }
        return result;
    }

    // Best Solution time:O(n) space:O(1)
    reverseListBest(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let curr = head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
