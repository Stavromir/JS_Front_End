function carNumbers(input) {

    let carNumbers = [];

    for (const element of input) {
        const [direction, number] = element.split(", ");

        if (direction === "IN") {
            carNumbers.push(number);
        } else if (direction === "OUT") {
            let indexNumber = carNumbers.indexOf(number);
            carNumbers.splice(indexNumber, 1);
        }
    }

    if (carNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        carNumbers.sort().forEach(el => {
            console.log(el);
        });
    }
}

carNumbers([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

carNumbers([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);