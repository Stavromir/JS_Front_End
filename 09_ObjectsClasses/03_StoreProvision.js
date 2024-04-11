function storeProvision(firstArray, secondArray) {

    let products = {};

    readProducts(firstArray);
    readProducts(secondArray);

    function readProducts(array) {

        for (let i = 0; i < array.length; i += 2) {
            let product = array[i];
            let count = Number(array[i + 1]);

            if (products.hasOwnProperty(product)) {
                products[product] += count;
            } else {
                products[product] = count;
            }
        }
    }

    Object.keys(products).forEach(key => {
        console.log(`${key} -> ${products[key]}`);
    })
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);