function solve (num) {
    let numAsString = String(num);
    let length = numAsString.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
        result += Number(numAsString[i]);
    }

    console.log(result);
}

solve(97561);

