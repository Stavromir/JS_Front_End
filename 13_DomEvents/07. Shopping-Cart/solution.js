function solve() {
   const buttonElements = document
       .querySelectorAll('button.add-product');

   const outputTextElement = document
       .querySelector('textarea');

   const productsInCart = [];
   let productsPrice = 0;

   buttonElements.forEach(element => {
       element.addEventListener('click', addProduct);
   });

   function addProduct(e) {
       const product = e.currentTarget.parentNode.parentNode;
       const productTitle = product
           .querySelector('.product-title').textContent;
       const productPrice = Number(product
           .querySelector('.product-line-price').textContent);

       if (!productsInCart.includes(productTitle)) {
           productsInCart.push(productTitle);
       }

       productsPrice += productPrice;

       outputTextElement.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
    }

    const checkoutElement = document.querySelector('.checkout');

    checkoutElement.addEventListener('click', boughtProducts);

    function boughtProducts() {

        buttonElements.forEach(element => {
            element.removeEventListener('click', addProduct);
        });

        outputTextElement.textContent += `You bought ${productsInCart.join(', ')} for ${productsPrice}.`
    }


}