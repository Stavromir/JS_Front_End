function calculatePrice(product, quantity) {

    const productPrices = {
        coffee:  1.5,
        water:  1.00,
        coke:  1.40,
        snacks:  2.00,
    }

    const productPrice = productPrices[product];
    const orderPrice = productPrice * quantity;
    console.log(orderPrice.toFixed(2));

    // console.log((products[product](quantity)).toFixed(2));
}

calculatePrice("water", 5);
calculatePrice("coffee", 2);
calculatePrice("coke", 2);