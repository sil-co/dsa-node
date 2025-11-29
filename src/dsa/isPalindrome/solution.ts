
export class Solution {
    isPalindrome(x: number): boolean {
        if (x < 0) return false;
        if (x != 0 && x % 10 === 0) return false;
        let reversed: number = 0;
        while (x > reversed) {
            const lastDigit: number = x % 10;
            x = Math.floor(x / 10); // integer division
            reversed = reversed * 10 + lastDigit;
        }
        return x === reversed || x === Math.floor(reversed / 10);
    }
}
