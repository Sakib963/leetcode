const { runTestCases } = require("../test-runner");

const numRabbits = (answers) => {
    const checking_object = {};
    let counter = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === 0) {
            counter ++;
        } else {
            checking_object[answers[i]] = (checking_object[answers[i]] || 0) + 1;
        }
    }
    for (const property in checking_object) {
        const group_size = Number(property) + 1;
        const count = checking_object[property];
    
        const groups = Math.ceil(count / group_size);
        counter += groups * group_size;
    }
    

    return counter;
};

const testCases = [
    { input: [1,1,2], expected: 5 },
    { input: [10,10,10], expected: 11 },
    { input: [1,0,1,0,0], expected: 5 },
    { input: [0,0,1,1,1], expected: 6 },
    { input: [0,1, 2,2,2,2], expected: 9 },
];

runTestCases(numRabbits, testCases, 'Rabbit Counter Test');
