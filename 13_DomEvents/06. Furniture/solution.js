function solve() {

    const buttonElements = document.querySelectorAll('button');
    const generateButtonElement = buttonElements[0];
    const buyButtonElement = buttonElements[1];

    generateButtonElement.addEventListener("click", addProductsToList);
    buyButtonElement.addEventListener("click", buyProducts);

    const tableElement = document.querySelector("tbody");
    function addProductsToList(e) {
        const inputTextElement = document.querySelectorAll('textarea')[0];
        let newProducts = JSON.parse(inputTextElement.value);

        for (const product of newProducts) {
            const newRow = document.createElement('tr');

            const imageCell = document.createElement('td');
            const image = document.createElement('img');
            image.src = product['img'];
            imageCell.appendChild(image);
            newRow.appendChild(imageCell);

            const nameCell = document.createElement('td');
            const name = document.createElement('p');
            name.textContent = product['name'];
            nameCell.appendChild(name);
            newRow.appendChild(nameCell);

            const priceCell = document.createElement('td');
            const price = document.createElement('p');
            price.textContent = product['price'];
            priceCell.appendChild(price);
            newRow.appendChild(priceCell);

            const decorationCell = document.createElement('td');
            const decoration = document.createElement('p');
            decoration.textContent = product['decFactor'];
            decorationCell.appendChild(decoration);
            newRow.appendChild(decorationCell);

            const markCell = document.createElement('td');
            const mark = document.createElement('input');
            mark.type = 'checkbox';
            markCell.appendChild(mark);
            newRow.appendChild(markCell);

            tableElement.appendChild(newRow);
        }
    }

    function buyProducts(e) {

        const outputTextElement = document.querySelectorAll('textarea')[1];

        let boughtProducts = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        for (const products of tableElement.children) {
            const productName = products.querySelectorAll('p')[0].textContent;
            const productPrice = Number(products.querySelectorAll('p')[1].textContent);
            const decFactor = Number(products.querySelectorAll('p')[2].textContent);
            const isChecked = products.querySelector('input').checked;

            if (isChecked) {
                boughtProducts.push(productName);
                totalPrice += productPrice;
                totalDecFactor += decFactor;
            }
        }

        const avrDecFactor = totalDecFactor / boughtProducts.length;

        outputTextElement.value += `Bought furniture: ${boughtProducts.join(", ")}\n`;
        outputTextElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputTextElement.value += `Average decoration factor: ${avrDecFactor.toFixed(1)}`
    }

}