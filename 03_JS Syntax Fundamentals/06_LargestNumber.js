function solve(num1, num2, num3) {
    let num = [num1, num2, num3].sort((a ,b) => a - b)[2];
    console.log(num);

    let numTest = Math.max(num1, num2, num3);
    console.log(numTest);
}

solve(121, 2, 4);
