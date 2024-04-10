function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    const numberToString = number.toString();

    for (const current of numberToString) {
        let currentNum = Number(current);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum( 1000435);
oddAndEvenSum( 3495892137259234);