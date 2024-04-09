function solve (numArr) {
    let evenElementSum = 0;
    let oddElementSum = 0;

    for (const element of numArr) {
        let isEven = element % 2 === 0;

        if (isEven) {
            evenElementSum += element;
        } else {
            oddElementSum += element;
        }
    }

    console.log(evenElementSum - oddElementSum);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);