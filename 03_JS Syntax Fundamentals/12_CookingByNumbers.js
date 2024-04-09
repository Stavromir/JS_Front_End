function solve (number, op1, op2, op3, op4, op5) {
    const array = [op1, op2, op3, op4, op5];
    let num = Number(number);

    for (let i = 0; i < array.length; i++) {
        let operator = array[i];

        switch (operator) {
            case "chop": num = num / 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num = num + 1; break;
            case "bake": num = num * 3; break;
            case "fillet": num = num * 0.8; break;
        }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');