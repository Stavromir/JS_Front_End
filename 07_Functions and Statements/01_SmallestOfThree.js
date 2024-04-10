function findSmallestNumber() {

    const numbers = arguments;

    // const smallest = Math.min(num1, num2, num3);

    let smallestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}

console.log(findSmallestNumber(2, 5, 3));
console.log(findSmallestNumber(600, 342, 123));
console.log(findSmallestNumber(600, 342, -123));