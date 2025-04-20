const runningSum = (nums) => {
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        nums[i] = currentSum;
    }
    return nums;
};

const testCases = [
    { input: [1, 2, 3, 4], expected: [1, 3, 6, 10] },
    { input: [1, 1, 1, 1, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 10, 1], expected: [3, 4, 6, 16, 17] },
];

testCases.forEach((test, index) => {
    // Clone input to avoid mutation across test cases
    const inputCopy = [...test.input];
    const result = runningSum(inputCopy);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected) ? '✅' : '❌';
    console.log(
        `Case ${index + 1}:\n  Input:    ${test.input}\n  Output:   ${result}\n  Expected: ${test.expected} ${pass}\n`
    );
});
