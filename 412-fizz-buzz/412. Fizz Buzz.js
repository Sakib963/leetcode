const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let output;
        if ( i % 3 === 0) output = 'Fizz';
        if ( i % 5 === 0) output = 'Buzz';
        if ( i % 3 === 0 && i % 5 === 0) output = 'FizzBuzz';
        if (!output) output = String(i);
        result.push(output);
    }
    return result;
};




const testCases = [
    { input: 3, expected: ["1","2","Fizz"] },
    { input: 5, expected: ["1","2","Fizz","4","Buzz"] },
    { input: 15, expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] },
];

testCases.forEach((test, index) => {
    const result = fizzBuzz(test.input);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected) ? '✅' : '❌';
    console.log(
        `Case ${index + 1}:\n  Input:    ${test.input}\n  Output:   ${result}\n  Expected: ${test.expected} ${pass}\n`
    );
});