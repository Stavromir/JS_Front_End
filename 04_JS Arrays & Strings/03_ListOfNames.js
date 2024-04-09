function solve(strArray) {

    let sortedArr = strArray.toSorted();
    // let sortedArr = strArray.toSorted((a, b) => b.localeCompare(a));

    for (let i = 0; i < sortedArr.length ; i++) {
        console.log(`${i + 1}. ${sortedArr[i]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"]);