const isPalindrome = (x) => {
    const numberString = String(x);
    const splitString = numberString.split('');
    const reversedString = splitString.reverse();
    const reversedNumberString = reversedString.join('');
    const reversedNumber = Number(reversedNumberString);
    return x === reversedNumber;
};

const testCases = [
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: -101, expected: false },
    { input: 1234321, expected: true },
    { input: 123454321, expected: true },
    { input: 12345654321, expected: true },
    { input: 1234565432, expected: false },
    { input: 12345654321, expected: true },
    { input: 1234565432, expected: false },
    { input: 12345654321, expected: true },
    { input: 1234565432, expected: false },
    { input: 12345654321, expected: true },
    { input: 1234565432, expected: false },
    { input: 12345654321, expected: true }
  ];
  
  testCases.forEach((test, index) => {
    const result = isPalindrome(test.input);
    const pass = result === test.expected ? '✅' : '❌';
    console.log(
      `Case ${index + 1}: Input = ${test.input}, Output = ${result}, Expected = ${test.expected} ${pass}`
    );
  });