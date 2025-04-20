const numberOfSteps = (num) => {
    let stepCounter = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        stepCounter++;
    }
    return stepCounter;
};




const testCases = [
    { input: 14, expected: 6 },
    { input: 8, expected: 4 },
    { input: 123, expected: 12 },
];

testCases.forEach((test, index) => {
    const result = numberOfSteps(test.input);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected) ? '✅' : '❌';
    console.log(
        `Case ${index + 1}:\n  Input:    ${test.input}\n  Output:   ${result}\n  Expected: ${test.expected} ${pass}\n`
    );
});