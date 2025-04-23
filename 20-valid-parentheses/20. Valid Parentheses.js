const { runTestCases } = require("../test-runner");

const isValid = (s) => {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        else {
            const last = stack.pop();
            if (
                (char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const isValidTest = (s) => {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (mapping[char]) {
            if (stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

const testCases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([])", expected: true },
    { input: "{[]}", expected: true },
    { input: "((()))", expected: true },
    { input: "((())", expected: false },
    { input: "([{}])", expected: true },
    { input: "", expected: true }, // Edge case for empty string
    { input: "((((()))))", expected: true }, // Deeply nested parentheses
    { input: "((((()))))}", expected: false }, // Extra closing brace
    { input: "(((())))", expected: true }, // Balanced with multiple levels
    { input: "((())", expected: false }, // Unbalanced with extra opening
    { input: "([{}])", expected: true }, // Mixed types of brackets
    { input: "([)]", expected: false }, // Incorrect nesting
    { input: "{[()]}", expected: true }, // Correctly nested mixed brackets
];

runTestCases(isValid, testCases, 'Valid Parentheses Test');