function solve(fruit, weight, price) {
    let weightInKg = (weight / 1000).toFixed(2);
    let result = (weightInKg * price).toFixed(2);
    console.log(`I need $${result} to buy ${weightInKg} kilograms orange.`);
}

solve('orange', 2500, 1.80);