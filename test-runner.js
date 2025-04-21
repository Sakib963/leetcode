function runTestCases(fn, testCases, label = 'Test Results') {
    const tableData = testCases.map((test, index) => {
        const output = fn(test.input);
        const pass = output === test.expected ? '✅ Pass' : '❌ Fail';

        return {
            '#': index + 1,
            Input: JSON.stringify(test.input),
            Output: output,
            Expected: test.expected,
            Result: pass
        };
    });

    console.log(`\n=== ${label} ===`);
    console.table(tableData);
}

module.exports = { runTestCases };
