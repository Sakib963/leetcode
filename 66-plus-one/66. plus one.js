const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    // only applicable when all elements are 9
    // e.g. [9,9] => [1,0,0]
    return [1, ...digits];
};


console.log('Case 1: Input: [1,2,3], Output: ', plusOne([1,2,3]));
console.log('Case 1: Input: [4,3,2,1], Output: ', plusOne([4,3,2,1]));
console.log('Case 1: Input: [9], Output: ', plusOne([9]));
console.log('Case 1: Input: [9,9], Output: ', plusOne([9,9]));