function signCheck() {

    let numbers = (arguments);
    let indicator = 2;

    for (const number of numbers) {
        if (number < 0) {
            indicator++;
        }
    }

    if (indicator % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck( 5, -12, -15, -43, -56);