function sumTable() {

    const productValuesRef = document.querySelectorAll('td:nth-child(even)');

    console.log(productValuesRef);
    const productValues = Array.from(productValuesRef);

    let productsValueSum = 0;

    for (let i = 0; i < productValues.length - 1; i++) {

        console.log(Number(productValues[i]));
        console.log(Number(productValues[i].textContent));

        productsValueSum += Number(productValues[i].textContent);
    }
    console.log(productsValueSum);

    document.getElementById('sum').textContent = productsValueSum;
}