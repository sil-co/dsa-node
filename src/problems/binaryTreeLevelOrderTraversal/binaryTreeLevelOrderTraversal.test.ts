import { TreeNode, Solution } from "./Solution";

const levelOrder = Solution.levelOrder;

function buildTree(nodes: (number | null)[]): TreeNode | null {
    if (!nodes.length || nodes[0] === null) return null;

    const root = new TreeNode(nodes[0]);
    const queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (queue.length && i < nodes.length) {
        const current = queue.shift();
        if (!current) continue;

        const leftVal = nodes[i++];
        if (leftVal !== undefined) {
            if (leftVal !== null) {
                current.left = new TreeNode(leftVal);
                queue.push(current.left);
            } else {
                current.left = null;
                queue.push(null);
            }
        }

        const rightVal = nodes[i++];
        if (rightVal !== undefined) {
            if (rightVal !== null) {
                current.right = new TreeNode(rightVal);
                queue.push(current.right);
            } else {
                current.right = null;
                queue.push(null);
            }
        }
    }

    return root;
}

const cases = [
    {
        tree: [3, 9, 20, null, null, 15, 7],
        expected: [[3], [9, 20], [15, 7]]
    },
    {
        tree: [1],
        expected: [[1]]
    },
    {
        tree: [],
        expected: []
    },
    {
        tree: [1, 2, 3, 4, 5, 6, 7],
        expected: [[1], [2, 3], [4, 5, 6, 7]]
    },
    {
        tree: [1, 2, null, 3, null, 4, null],
        expected: [[1], [2], [3], [4]]
    },
    {
        tree: [1, null, 2, null, 3, null, 4],
        expected: [[1], [2], [3], [4]]
    },
    {
        tree: [1, 2, 3, null, 4, null, 5],
        expected: [[1], [2, 3], [4, 5]]
    },
    {
        tree: [1, null, 2, 3, null, null, 4, null, 5],
        expected: [[1], [2], [3], [4], [5]]
    },
    {
        tree: [8, 4, 12, 2, 6, 10, 14, null, 3, 5, null, 9, 11, 13, null],
        expected: [
            [8],
            [4, 12],
            [2, 6, 10, 14],
            [3, 5, 9, 11, 13]
        ]
    }
];

describe("Binary Tree Level Order Traversal", () => {
    test.each(cases)("%j", ({ tree, expected }) => {
        const root = buildTree(tree);
        expect(levelOrder(root)).toEqual(expected);
    });
});
