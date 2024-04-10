function sumAndSubtract(num1, num2, num3) {

    const sum = (num1, num2) => num1 + num2;
    const subtract = (sum, num3) => sum - num3;

    return subtract(sum(num1, num2), num3);
}

console.log(sumAndSubtract(23, 6, 10));
console.log(sumAndSubtract(1, 17, 30));