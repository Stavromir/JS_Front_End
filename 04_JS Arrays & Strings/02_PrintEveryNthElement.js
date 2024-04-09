function solve(strArr, step) {

    let newArr = [];

    newArr.push(strArr[0]);
    for (let i = step; i < strArr.length; i+= step) {
        newArr.push(strArr[i]);
    }
    console.log(newArr);
}

solve(['5', '20', '31', '4', '20'], 2);
solve(['1', '2', '3', '4', '5'], 6);