const maximumWealth = (accounts) => {
    let maxWealth = 0;
    for (let i = 0; i< accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};


const testCases = [
    { input: [[1,2,3],[3,2,1]], expected: 6 },
    { input: [[1,5],[7,3],[3,5]], expected: 10 },
    { input: [[2,8,7],[7,1,3],[1,9,5]], expected: 17 },
];

testCases.forEach((test, index) => {
    // Clone input to avoid mutation across test cases
    const inputCopy = [...test.input];
    const result = maximumWealth(inputCopy);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected) ? '✅' : '❌';
    console.log(
        `Case ${index + 1}:\n  Input:    ${test.input}\n  Output:   ${result}\n  Expected: ${test.expected} ${pass}\n`
    );
});