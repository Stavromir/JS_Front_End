function addItem() {

    let input = document
        .getElementById('newItemText');

    let listItems = document
        .getElementById('items');

    let newItem = document.createElement('li');
    newItem.textContent = input.value;

    const deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#'

    deleteLink.addEventListener('click', deleteItem);

    newItem.appendChild(deleteLink);

    listItems.appendChild(newItem);

    input.value = "";

    function deleteItem(e) {
        let item = e.currentTarget.parentElement;
        item.remove();
    }
}