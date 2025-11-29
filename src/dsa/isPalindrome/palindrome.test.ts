
import { Solution } from "./solution";

const solution = new Solution();

test('positive palindrome number', () => {
    expect(solution.isPalindrome(121)).toBe(true);
});

test('negative number', () => {
    expect(solution.isPalindrome(-21)).toBe(false);
});

test('number ending with zero', () => {
    expect(solution.isPalindrome(10)).toBe(false);
});

test('single digit number', () => {
    expect(solution.isPalindrome(7)).toBe(true);
});

test('large palindrome number', () => {
    expect(solution.isPalindrome(12333333333321)).toBe(true);
});
