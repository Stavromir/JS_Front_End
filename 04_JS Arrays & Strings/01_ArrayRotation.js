function solve(numArray, rotationCount) {

    for (let i = 0; i < rotationCount; i++) {
        let lastNum = numArray.shift();
        numArray.push(lastNum);
    }
    console.log(numArray.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
solve([2, 4, 15, 31], 5);