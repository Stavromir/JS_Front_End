function calculatePrice(product, quantity) {

    const products = {
        coffee: (quantity) => quantity * 1.5,
        water: (quantity) => quantity * 1.00,
        coke: (quantity) => quantity * 1.40,
        snacks: (quantity) => quantity * 2.00,
    }

    const operatorFunction = products[product];
    const result = operatorFunction(quantity);
    console.log(result.toFixed(2));

    // console.log((products[product](quantity)).toFixed(2));
}

calculatePrice("water", 5);
calculatePrice("coffee", 2);
calculatePrice("coke", 2);