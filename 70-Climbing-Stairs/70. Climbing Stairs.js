const { runTestCases } = require("../test-runner");

const climbStairs = (n) => {
    if (n <= 3) return n;

    let way_to_previous_step = 3;
    let way_to_two_steps_back = 2;
    let total_ways = 0;

    for (let i = 4; i <= n; i++) {
        total_ways = way_to_previous_step + way_to_two_steps_back;

        way_to_two_steps_back = way_to_previous_step;
        way_to_previous_step = total_ways;
    }

    return total_ways;
}

const testCases = [
    { input: 2, expected: 2 },
    { input: 3, expected: 3 },
    { input: 4, expected: 5 },
];

runTestCases(climbStairs, testCases, 'Climbing Stairs Test');