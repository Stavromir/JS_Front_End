function perfectNum(number) {

    let sumOfDivisors = 0;

    for (let i = 1; i <= Math.ceil(number/2); i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    if (sumOfDivisors === number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNum(28);
perfectNum(1236498);
perfectNum(7);