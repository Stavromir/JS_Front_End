function solve (number, numArr) {
    numArr.splice(number, numArr.length);
    console.log(numArr.reverse().join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);