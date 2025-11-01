
import { isPalindrome } from "../../src/dsa/palindrome";

test('positive palindrome number', () => {
    expect(isPalindrome(121)).toBe(true);
});

test('negative number', () => {
    expect(isPalindrome(-21)).toBe(false);
});

test('number ending with zero', () => {
    expect(isPalindrome(10)).toBe(false);
});

test('single digit number', () => {
    expect(isPalindrome(7)).toBe(true);
});

test('large palindrome number', () => {
    expect(isPalindrome(12333333333321)).toBe(true);
});
