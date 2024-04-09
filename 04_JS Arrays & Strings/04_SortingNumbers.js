function solve (numArray) {

    let sortedAcs = numArray.sort((a, b) => a - b);
    let resultingArr = [];

    while (sortedAcs.length > 0) {
        resultingArr.push(sortedAcs.shift());
        if (sortedAcs.length === 0) {
            break;
        }
        resultingArr.push(sortedAcs.pop());
    }

    console.log(resultingArr);
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);