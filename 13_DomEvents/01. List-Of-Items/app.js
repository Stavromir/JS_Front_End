function addItem() {
    let input = document
        .getElementById('newItemText');

    let listItems = document
        .getElementById('items');

    let newItem = document.createElement('li');
    newItem.textContent = input.value;

    listItems.appendChild(newItem);

    input.value = "";
}