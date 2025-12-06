import { ListNode, Solution } from "./Solution";

class TestHelper {
    arrayToList(arr: number[]): ListNode | null {
        if (arr.length === 0) return null;
        let head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    listToArray(head: ListNode | null): number[] {
        const result: number[] = [];
        while (head) {
            result.push(head.val);
            head = head.next;
        }
        return result;
    }
}

const solution = new Solution();
const reverseList = solution.reverseListBest;
const testHelper = new TestHelper();
const arrayToList = testHelper.arrayToList;
const listToArray = testHelper.listToArray;

describe("Reverse Linked List", () => {
    const cases: Array<{ input: number[]; expected: number[] }> = [
        { input: [1,2,3,4,5], expected: [5,4,3,2,1] },
        { input: [1,2], expected: [2,1] },
        { input: [1], expected: [1] },
        { input: [], expected: [] },
    ];

    test.each(cases)(
        "should reverse %j to %j",
        ({ input, expected }) => {
            const head = arrayToList(input);
            const reversed = reverseList(head); 
            expect(listToArray(reversed)).toEqual(expected);
        }
    );
});
