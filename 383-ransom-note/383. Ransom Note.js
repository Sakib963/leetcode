const numberOfSteps = (ransomNote, magazine) => {
    const ransomCount = new Map();
    for (let char of ransomNote) {
        ransomCount.set(char, (ransomCount.get(char) || 0) + 1);
    }

    for (let char of magazine) {
        if (ransomCount.has(char)) {
            ransomCount.set(char, ransomCount.get(char) - 1);
            if (ransomCount.get(char) === 0) ransomCount.delete(char);
        }
    }

    return ransomCount.size === 0;
};




const testCases = [
    { input: ["a", "b"], expected: false },
    { input: ["aa", "ab"], expected: false },
    { input: ["aa", "aab"], expected: true },
    { input: ["aab", "baa"], expected: true },
    { input: ["fffbfg", "effjfggbffjdgbjjhhdegh"], expected: true },
];

testCases.forEach((test, index) => {
    const result = numberOfSteps(...test.input);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected) ? '✅' : '❌';
    console.log(
        `Case ${index + 1}:\n  Input:    ${test.input}\n  Output:   ${result}\n  Expected: ${test.expected} ${pass}\n`
    );
});