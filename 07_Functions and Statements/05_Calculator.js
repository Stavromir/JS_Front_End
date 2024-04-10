function calculate(x, y, operator) {

    let result;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;


    switch (operator) {
        case "multiply":
            result = multiply(x, y);
            break;
        case "divide":
            result = divide(x, y);
            break;
        case "add":
            result = add(x, y);
            break;
        case "subtract":
            result = subtract(x, y);
            break;
    }

    console.log(result);
}

calculate(5, 5, 'multiply');
calculate(40, 8, 'divide');


function calculateVersionTwo(x, y, operator) {

    const operations = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    }

    console.log(operations[operator](x, y));
}

calculateVersionTwo(5, 5, 'multiply');
calculateVersionTwo(40, 8, 'divide');