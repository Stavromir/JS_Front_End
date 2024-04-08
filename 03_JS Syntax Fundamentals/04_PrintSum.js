function printSum (num1, num2) {
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}

printSum(5, 10);
printSum(0, 26);
printSum(50, 60);